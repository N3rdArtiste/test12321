<script context="module" type="ts">
    import { PastWinnerDetailsDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff, params, url }) => {
        let category = url.searchParams.get('category')
        let filterQuery = getPastWinnersFilterQuery(category)
        return {
            props: {
                category,
                pastWinnerDetailsContent: stuff.getOperationStore
                    ? await stuff.getOperationStore(PastWinnerDetailsDocument, { id: params.slug, filterQuery: { id: { _gt: parseInt(params.slug) }, ...filterQuery } })
                    : null,
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import PastWinnerDetails from 'modules/past-winners/past-winner-details.svelte'
    import { goto } from '$app/navigation'
    import { getPastWinnersFilterQuery } from 'helpers/graphql-query'

    export let pastWinnerDetailsContent: PastWinnerDetailsQueryStore
    export let category: string | null
    query(pastWinnerDetailsContent)
</script>

<svelte:head>
    <title>{'yia! | ' + $pastWinnerDetailsContent.data?.past_winners_by_id?.name ?? 'YiA'}</title>
</svelte:head>

{#if $pastWinnerDetailsContent.data?.past_winners_by_id}
    <PastWinnerDetails
        data={$pastWinnerDetailsContent.data.past_winners_by_id}
        showNextButton={!!($pastWinnerDetailsContent.data?.past_winners ?? []).length}
        onNextClick={() => {
            goto(`/past-winners/${($pastWinnerDetailsContent.data?.past_winners ?? [])[0]?.id}${category ? `?category=${category}` : ''}`)
        }}
    />
    <Divider heightDesktop={17.9} heightMobile={5} />
{/if}
