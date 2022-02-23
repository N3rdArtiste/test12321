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

    import CompetitionIntro from 'modules/competitions/intros/about.svelte'
    import CompetitionChallenge from 'modules/competitions/challenge.svelte'
    import BrandsIntro from 'modules/brands/intro.svelte'
    import JudgesIntro from 'modules/judges/intro.svelte'
    import WinningsHow from 'modules/questions/winnings-how.svelte'
    import WinningsWhat from 'modules/questions/winnings-what.svelte'

    query(aboutPage)

    $: console.log('--$aboutPage.data--', $aboutPage.data)

    let { question: whatQuestions } = $aboutPage.data?.about_page?.multi_level_questions![0]!
    let { question: howQuestions } = $aboutPage.data?.about_page?.textarea_questions![0]!
</script>

<svelte:head>
    <title>{$aboutPage.data?.about_page?.heading ?? 'YiA'}</title>
</svelte:head>

{#if $aboutPage.data}
    <CompetitionIntro data={$aboutPage.data.about_page} />
    <Divider heightDesktop={11.5} heightMobile={5.6} />

    <CompetitionChallenge data={$aboutPage.data.about_page} />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}

{#if whatQuestions && howQuestions}
    <WinningsWhat question={whatQuestions} />
    <WinningsHow question={howQuestions} />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}

{#if $aboutPage.data}
    <JudgesIntro data={$aboutPage.data.about_page} />
    <Divider heightDesktop={11.5} heightMobile={5.6} />

    <BrandsIntro data={$aboutPage.data.about_page} brands={$aboutPage.data.brands} />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}
