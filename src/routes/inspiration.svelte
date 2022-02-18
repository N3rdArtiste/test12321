<script context="module" type="ts">
    import { InspirationPageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                inspirationPageContent: stuff.getOperationStore ? await stuff.getOperationStore(InspirationPageDocument, { limit: 4, page: 1 }) : null,
            },
        }
    }
</script>

<script type="ts">
    import uniqBy from 'lodash/uniqBy.js'
    import { query } from '@urql/svelte'

    import InspirationIntro from 'modules/inspiration/intro.svelte'
    import Divider from 'components/divider.svelte'
    import Articles from 'modules/inspiration/articles/articles.svelte'
    import type { InspirationPageQuery, InspirationPageQueryStore } from '_config/typeDefs/graphql-generated'

    export let inspirationPageContent: InspirationPageQueryStore
    let inspirationArticles: InspirationPageQuery['inspiration_articles']

    query(inspirationPageContent)

    $: inspirationArticles = [...(inspirationArticles ?? []), ...($inspirationPageContent.data?.inspiration_articles ?? [])]

    const loadMoreArticles = () => {
        $inspirationPageContent.variables = { ...$inspirationPageContent.variables, page: ($inspirationPageContent.variables?.page ?? 0) + 1 }
    }
</script>

{#if $inspirationPageContent.data}
    <InspirationIntro data={$inspirationPageContent.data.inspiration_page} />
    <Divider heightDesktop={15} heightMobile={5} />
    <Articles data={uniqBy(inspirationArticles, 'id')} onLoadMoreClick={loadMoreArticles} />
    <Divider heightDesktop={18.4} heightMobile={5} />
{/if}
