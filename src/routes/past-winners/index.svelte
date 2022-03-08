<script context="module" type="ts">
    import { PastWinnersPageDocument } from '_config/graphql-tags/graphql-tags-generated'
    import { getPastWinnersFilterQuery } from 'helpers/graphql-query'

    export const load: Load = async ({ stuff, url }) => {
        const defaultLimit = 6
        let limit = defaultLimit
        let page = parseInt(url.searchParams.get('page') ?? '1')
        let category = url.searchParams.get('category')
        let filterQuery = getPastWinnersFilterQuery(category)

        if (url.searchParams.get('page')) {
            if (page > 1) {
                limit = page * limit
            }
        }
        return {
            props: {
                category,
                currentPage: page,
                limit: defaultLimit,
                pastWinnersContent: stuff.getOperationStore
                    ? await stuff.getOperationStore(PastWinnersPageDocument, {
                          limit,
                          page: 1,
                          filterQuery,
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
    import Divider from 'components/divider.svelte'
    import uniqBy from 'lodash/uniqBy.js'
    export let pastWinnersContent: PastWinnersPageQueryStore
    export let currentPage: number
    export let limit: number
    export let category: string

    let pastWinnersList: PastWinnersPageQuery['past_winners']
    let page = currentPage
    let selectedPastWinnersCategoryId: string

    $: noMorePastWinnersToLoad = pastWinnersList?.length === (pastWinnersContent.data?.past_winners_aggregated ?? [])[0]?.count?.id
    onMount(() => {
        selectedPastWinnersCategoryId = category ?? 'all'
        replaceQueryParams({
            page: currentPage.toString(),
        })
    })

    query(pastWinnersContent)

    $: if (!$pastWinnersContent.fetching) {
        pastWinnersList = uniqBy([...(pastWinnersList ?? []), ...($pastWinnersContent.data?.past_winners ?? [])], 'id')
    }

    const loadMorePastWinners = () => {
        ++page
        replaceQueryParams({
            page: page.toString(),
        })

        $pastWinnersContent.variables = { ...$pastWinnersContent.variables, page, limit }
    }

    const onCategoryClick = (id: string) => {
        selectedPastWinnersCategoryId = id
        pastWinnersList = []
        page = 1
        replaceQueryParams({
            category: id,
            page: page.toString(),
        })

        $pastWinnersContent.variables = { ...$pastWinnersContent.variables, page, limit, filterQuery: getPastWinnersFilterQuery(id) }
    }

    $: console.log(pastWinnersList, 'pastWinnersList_pastwinners')
</script>

<svelte:head>
    <title>{$pastWinnersContent.data?.past_winners_page?.title_bar_text ?? 'YiA'}</title>
    <meta name="description" content={$pastWinnersContent.data?.past_winners_page?.meta_description ?? ''} />
</svelte:head>

{#if $pastWinnersContent.data}
    <PastWinners
        selectedCategoryId={selectedPastWinnersCategoryId}
        data={$pastWinnersContent.data}
        {pastWinnersList}
        onLoadMoreClick={noMorePastWinnersToLoad ? undefined : loadMorePastWinners}
        {onCategoryClick}
    />
{/if}
<Divider heightDesktop={12.8} heightMobile={5} />
