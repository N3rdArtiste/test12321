<script context="module" type="ts">
    import { HomepageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                homepage: stuff.getOperationStore ? await stuff.getOperationStore(HomepageDocument) : null,
            },
        }
    }
</script>

<script type="ts">
    export let homepage: HomepageQueryStore

    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competition/intro.svelte'
    import InnovatorsIntro from 'modules/innovators/intro.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    import Winnings from 'modules/questions/winnings.svelte'

    import data from 'api/data.json'

    query(homepage)
</script>

<svelte:head>
    <title>{$homepage.data?.home_page?.title_bar_text ?? 'YiA'}</title>
</svelte:head>

<section>
    {#if $homepage.data}
        <CompetitionIntro data={$homepage.data.home_page} />
        <Divider heightDesktop={8.5} heightMobile={5.1} />
        <InnovatorsIntro data={$homepage.data.home_page} />
        <Divider heightDesktop={16.2} heightMobile={5} />
        <HorizontalLine />
        <Divider heightDesktop={11.5} heightMobile={5.6} />
        <Winnings {data} />
    {/if}
</section>
