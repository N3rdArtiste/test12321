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
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competitions/intros/about.svelte'
    import Challenge from 'modules/competitions/challenge.svelte'
    import Judges from 'modules/judges/intro.svelte'
    import Brands from 'modules/brands/about.svelte'
    import WinningsHow from 'modules/questions/winnings-how.svelte'
    import WinningsWhat from 'modules/questions/winnings-what.svelte'

    export let aboutPage: AboutPageQueryStore
    query(aboutPage)

    let { question: whatQuestions } = $aboutPage.data?.about_page?.multi_level_questions![0]!
    let { question: howQuestions } = $aboutPage.data?.about_page?.textarea_questions![0]!
</script>

<svelte:head>
    <title>{$aboutPage.data?.about_page?.heading ?? 'YiA'}</title>
</svelte:head>

{#if aboutPage.data}
    <CompetitionIntro data={$aboutPage.data?.about_page} />
    <Divider heightMobile={6.8} heightDesktop={16.6} />
    <Challenge data={$aboutPage.data?.about_page} />
    <Divider heightMobile={5} heightDesktop={15.8} />
    {#if whatQuestions && howQuestions}
        <WinningsWhat question={whatQuestions} />
        <WinningsHow question={howQuestions} />
        <Divider heightDesktop={11.5} heightMobile={5.6} />
    {/if}
    <Judges data={$aboutPage.data?.about_page} />
    <Divider heightMobile={4.47} heightDesktop={16.1} />
    <Brands brands={$aboutPage.data?.brands} data={$aboutPage.data?.about_page} />
    <Divider heightMobile={4.7} heightDesktop={18.9} />
{/if}
