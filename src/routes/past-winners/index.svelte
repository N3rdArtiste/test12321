<script context="module" type="ts">
    import { PastWinnersPageDocument } from '_config/graphql-tags/graphql-tags-generated'
    export const load: Load = async ({ stuff, url }) => {
        const defaultLimit = 1
        let limit = 1
        let page = parseInt(url.searchParams.get('page') ?? '1')
        if (url.searchParams.get('page')) {
            if (page > 1) {
                limit = page * limit
            }
        }
        return {
            props: {
                currentPage: page,
                limit: defaultLimit,
                pastWinnersContent: stuff.getOperationStore
                    ? await stuff.getOperationStore(PastWinnersPageDocument, {
                          limit,
                          page: 1,
                          //   filterQuery: {
                          //       categories: {
                          //           past_winners_category: {
                          //               id: {
                          //                   _eq: 5,
                          //               },
                          //           },
                          //       },
                          //   },
                      })
                    : null,
            },
        }
    }
</script>

<script lang="ts">
    import { query } from '@urql/svelte'

    import PastWinners from 'modules/past-winners/index.svelte'
    import { replaceQueryParams } from 'helpers/url'
    import { onMount } from 'svelte'

    export let pastWinnersContent: PastWinnersPageQueryStore
    export let currentPage: number
    export let limit: number

    let pastWinnersList: PastWinnersPageQuery['past_winners']
    let page = currentPage

    onMount(() => {
        replaceQueryParams({
            page: currentPage.toString(),
        })
    })

    query(pastWinnersContent)

    $: if (!$pastWinnersContent.fetching) {
        pastWinnersList = [...(pastWinnersList ?? []), ...($pastWinnersContent.data?.past_winners ?? [])]
    }

    const loadMorePastWinners = () => {
        ++page
        replaceQueryParams({
            page: page.toString(),
        })

        $pastWinnersContent.variables = { ...$pastWinnersContent.variables, page, limit }
    }
</script>

{#if $pastWinnersContent.data}
    <PastWinners data={$pastWinnersContent.data} {pastWinnersList} onLoadMoreClick={loadMorePastWinners} />
{/if}
