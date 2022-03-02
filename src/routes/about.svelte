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
    import MultiLevelQuestion from 'components/multi-level-question.svelte'
    import Drawer from 'components/drawer.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    import TextAreaQuestion from 'components/text-area-question.svelte'

    export let aboutPage: AboutPageQueryStore
    query(aboutPage)

    let { question: whatQuestions } = $aboutPage.data?.about_page?.multi_level_questions![0]!
    let { question: howQuestions } = $aboutPage.data?.about_page?.textarea_questions![0]!
</script>

<svelte:head>
    <title>{$aboutPage.data?.about_page?.title_bar_text ?? 'YiA'}</title>
    <meta name="description" content={$aboutPage.data?.about_page?.meta_description ?? ''} />
    <meta name="keywords" content={$aboutPage.data?.about_page?.meta_keywords ?? ''} />
</svelte:head>

{#if aboutPage.data}
    <CompetitionIntro data={$aboutPage.data?.about_page} />
    <Divider heightMobile={6.8} heightDesktop={16.6} />
    <Challenge data={$aboutPage.data?.about_page} />
    <Divider heightMobile={5} heightDesktop={15.8} />
    {#if whatQuestions && howQuestions}
        <HorizontalLine />
        <Drawer title={whatQuestions.title ?? ''}>
            <MultiLevelQuestion question={whatQuestions} />
        </Drawer>
        <HorizontalLine />
        <Drawer title={howQuestions.title ?? ''}>
            <TextAreaQuestion text={howQuestions.body ?? ''} />
        </Drawer>
        <HorizontalLine />
        <Divider heightDesktop={11.5} heightMobile={5.6} />
    {/if}
    <Judges data={$aboutPage.data?.about_page} />
    <Divider heightMobile={4.47} heightDesktop={16.1} />
    <Brands brands={$aboutPage.data?.brands} data={$aboutPage.data?.about_page} />
    <Divider heightMobile={4.7} heightDesktop={18.9} />
{/if}
