<script context="module" type="ts">
    import { PastWinnerDetailsDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff, params }) => {
        return {
            props: {
                pastWinnerDetailsContent: stuff.getOperationStore ? await stuff.getOperationStore(PastWinnerDetailsDocument, { id: params.slug }) : null,
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import PastWinnerDetails from 'modules/past-winners/past-winner-details.svelte'

    export let pastWinnerDetailsContent: PastWinnerDetailsQueryStore

    query(pastWinnerDetailsContent)
</script>

{#if $pastWinnerDetailsContent.data?.past_winners_by_id}
    <PastWinnerDetails data={$pastWinnerDetailsContent.data.past_winners_by_id} />
    <Divider heightDesktop={17.9} heightMobile={5} />
{/if}
