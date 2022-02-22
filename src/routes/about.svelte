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
    // import CompetitionIntro from 'modules/competitions/intros/about.svelte'
    // import CompetitionChallenge from 'modules/competitions/challenge.svelte'

    import Winnings from 'modules/questions/winnings.svelte'

    query(aboutPage)

    $: console.log('--$aboutPage.data--', $aboutPage.data)

    let { question } = $aboutPage.data?.about_page?.multi_level_questions![0]!
</script>

<svelte:head>
    <title>{$aboutPage.data?.about_page?.heading ?? 'YiA'}</title>
</svelte:head>

{#if $aboutPage.data}
    <!-- <CompetitionIntro data={$aboutPage.data.about_page} /> -->
    <Divider heightDesktop={11.5} heightMobile={5.6} />

    <!-- <CompetitionChallenge data={$aboutPage.data.about_page} /> -->
    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}

{#if question}
    <Divider heightDesktop={11.5} heightMobile={5.6} />

    <Winnings {question} />

    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}
