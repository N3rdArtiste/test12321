<script context="module" type="ts">
    import { InspirationPageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff, url }) => {
        const defaultLimit = 8
        let limit = defaultLimit
        let page = parseInt(url.searchParams.get('page') ?? '1')
        if (url.searchParams.get('page')) {
            if (page > 1) {
                limit = page * limit
            }
        }
        return {
            props: {
                currentPage: page,
                limit: defaultLimit,
                inspirationPageContent: stuff.getOperationStore ? await stuff.getOperationStore(InspirationPageDocument, { limit, page: 1 }) : null,
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'

    import InspirationIntro from 'modules/inspiration/intro.svelte'
    import Divider from 'components/divider.svelte'
    import Articles from 'modules/inspiration/articles/articles.svelte'
    import { replaceQueryParams } from 'helpers/url'
    import { onMount } from 'svelte'
    import uniqBy from 'lodash/uniqBy.js'

    export let inspirationPageContent: InspirationPageQueryStore
    export let currentPage: number
    export let limit: number

    let inspirationArticles: InspirationPageQuery['inspiration_articles']
    let page = currentPage

    $: noMorePastWinnersToLoad = inspirationArticles?.length === (inspirationPageContent.data?.inspiration_articles_aggregated ?? [])[0]?.count?.id

    onMount(() => {
        replaceQueryParams({
            page: currentPage.toString(),
        })
    })

    query(inspirationPageContent)

    $: if (!$inspirationPageContent.fetching) {
        inspirationArticles = uniqBy([...(inspirationArticles ?? []), ...($inspirationPageContent.data?.inspiration_articles ?? [])], 'id')
    }

    const loadMoreArticles = () => {
        ++page
        replaceQueryParams({
            page: page.toString(),
        })
        $inspirationPageContent.variables = { ...$inspirationPageContent.variables, page, limit }
    }
</script>

<svelte:head>
    <title>{$inspirationPageContent.data?.inspiration_page?.title_bar_text ?? 'YiA'}</title>
    <meta name="description" content={$inspirationPageContent.data?.inspiration_page?.meta_description ?? ''} />
</svelte:head>

{#if $inspirationPageContent.data}
    <InspirationIntro data={$inspirationPageContent.data.inspiration_page} />
    <Divider heightDesktop={15} heightMobile={5} />
    <Articles data={inspirationArticles} onLoadMoreClick={noMorePastWinnersToLoad ? undefined : loadMoreArticles} />
    <Divider heightDesktop={18.4} heightMobile={5} />
{/if}
