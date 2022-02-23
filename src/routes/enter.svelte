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
    export let entryPage: EnterPageQueryStore

    query(entryPage)
</script>

<svelte:head>
    <title>{$entryPage.data?.enter_page?.title_bar_text ?? ''}</title>
</svelte:head>

<Intro data={$entryPage.data?.enter_page} />
<Divider heightMobile={10} heightDesktop={10} />
<Timeline data={$entryPage.data?.enter_page} />
<Divider heightMobile={4.99} heightDesktop={20.1} />
