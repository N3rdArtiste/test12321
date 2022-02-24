<script context="module" type="ts">
    import { EnterPageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                entryPage: stuff.getOperationStore ? await stuff.getOperationStore(EnterPageDocument) : null,
            },
        }
    }
</script>

<script lang="ts">
    import Intro from 'modules/enter/intro.svelte'
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import Timeline from 'modules/enter/timeline.svelte'
    import WinningsWhat from 'modules/questions/winnings-what.svelte'
    import WinningsHow from 'modules/questions/winnings-how.svelte'
    export let entryPage: EnterPageQueryStore

    query(entryPage)

    let { question: whatQuestions } = $entryPage.data?.enter_page?.multi_level_questions![0]!
    let { question: howQuestions } = $entryPage.data?.enter_page?.text_area_questions![0]!
</script>

<svelte:head>
    <title>{$entryPage.data?.enter_page?.title_bar_text ?? ''}</title>
</svelte:head>

<Intro data={$entryPage.data?.enter_page} />
<Divider heightMobile={10} heightDesktop={10} />
<Divider heightMobile={5} heightDesktop={9.7} />
{#if whatQuestions && howQuestions}
    <WinningsWhat question={whatQuestions} />
    <WinningsHow question={howQuestions} />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}
<Timeline data={$entryPage.data?.enter_page} />
<Divider heightMobile={4.99} heightDesktop={20.1} />
