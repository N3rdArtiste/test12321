<script context="module" type="ts">
    import { HomePageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                homePage: stuff.getOperationStore ? await stuff.getOperationStore(HomePageDocument) : null,
            },
        }
    }
</script>

<script type="ts">
    export let homePage: HomePageQueryStore

    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competitions/intros/home.svelte'
    import InnovatorsIntro from 'modules/innovators/intro.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    query(homePage)
</script>

<svelte:head>
    <title>{$homePage.data?.home_page?.title_bar_text ?? 'YiA'}</title>
</svelte:head>

{#if $homePage.data}
    <CompetitionIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={8.5} heightMobile={5.1} />
    <InnovatorsIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={16.2} heightMobile={5} />
    <HorizontalLine />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
    <!-- <Winnings {data} /> -->
{/if}
