<script context="module" type="ts">
    import { AboutPageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                aboutPage: stuff.getOperationStore ? await stuff.getOperationStore(AboutPageDocument) : null,
            },
        }
    }
</script>

<script type="ts">
    export let aboutPage: AboutPageQueryStore

    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competition/intro.svelte'
    import InnovatorsIntro from 'modules/innovators/intro.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    import Winnings from 'modules/questions/winnings.svelte'

    import data from 'api/data.json'

    query(aboutPage)
</script>

<svelte:head>
    <title>{$aboutPage.data?.about_page?.heading ?? 'YiA'}</title>
</svelte:head>

<section>
    {#if $aboutPage.data}
        <Winnings {data} />

        <HorizontalLine />

        <Divider heightDesktop={11.5} heightMobile={5.6} />

        <Winnings {data} />
    {/if}
</section>
