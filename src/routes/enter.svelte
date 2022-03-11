<script context="module" type="ts">
    import { EnterPageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                enterPage: stuff.getOperationStore ? await stuff.getOperationStore(EnterPageDocument) : null,
            },
        }
    }
</script>

<script lang="ts">
    import Intro from 'modules/enter/intro.svelte'
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import Timeline from 'modules/enter/timeline.svelte'
    import Drawer from 'components/drawer.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    import MultiLevelQuestion from 'components/multi-level-question.svelte'
    export let enterPage: EnterPageQueryStore

    query(enterPage)

    let drawerOpenedTitle: string = ''
    let { question: whatQuestions } = $enterPage.data?.enter_page?.multi_level_questions![0]!
    let { question: howQuestions } = $enterPage.data?.enter_page?.text_area_questions![0]!
</script>

<svelte:head>
    <title>{$enterPage.data?.enter_page?.title_bar_text ?? ''}</title>
    <meta name="description" content={$enterPage.data?.enter_page?.meta_description ?? ''} />
</svelte:head>

<Intro data={$enterPage.data?.enter_page} />
<Divider heightMobile={5} heightDesktop={9.7} />
{#if whatQuestions && howQuestions}
    <HorizontalLine />
    <Drawer title={howQuestions.title ?? ''} bind:drawerOpenedTitle>
        {@html howQuestions.body}
    </Drawer>
    <HorizontalLine />
    <Drawer title={whatQuestions.title ?? ''} bind:drawerOpenedTitle>
        <MultiLevelQuestion question={whatQuestions} />
    </Drawer>
    <HorizontalLine />

    <Divider heightDesktop={11.5} heightMobile={5.6} />
{/if}
<Timeline data={$enterPage.data?.enter_page} />
<Divider heightMobile={4.99} heightDesktop={20.1} />
