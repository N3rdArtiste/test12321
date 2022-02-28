<script context="module" type="ts">
    import { JudgesPageDocument } from '_config/graphql-tags/graphql-tags-generated'
    import { getJudgesFilterQuery } from 'helpers/graphql-query'

    export const load: Load = async ({ stuff, url }) => {
        const defaultLimit = 4
        let limit = defaultLimit
        let page = parseInt(url.searchParams.get('page') ?? '1')
        let category = url.searchParams.get('category')
        let filterQuery = getJudgesFilterQuery(category)

        if (url.searchParams.get('page')) {
            if (page > 1) {
                limit = page * limit
            }
        }
        return {
            props: {
                currentPage: page,
                limit: defaultLimit,
                judgesContent: stuff.getOperationStore
                    ? await stuff.getOperationStore(JudgesPageDocument, {
                          limit,
                          page: 1,
                          filterQuery,
                      })
                    : null,
            },
        }
    }
</script>

<script lang="ts">
    import { query } from '@urql/svelte'

    import { replaceQueryParams } from 'helpers/url'
    import { onMount } from 'svelte'
    import Divider from 'components/divider.svelte'
    import JudgesPage from 'modules/judges/judgesPage.svelte'
    import uniqBy from 'lodash/uniqBy.js'
    import { selectedJudgesCategoryId } from 'stores/judges'

    export let judgesContent: JudgesPageQueryStore
    export let currentPage: number
    export let limit: number

    let judgesList: JudgesPageQuery['judges']
    let page = currentPage

    onMount(() => {
        replaceQueryParams({
            page: currentPage.toString(),
        })
    })

    query(judgesContent)

    $: if (!$judgesContent.fetching) {
        judgesList = uniqBy([...(judgesList ?? []), ...($judgesContent.data?.judges ?? [])], 'id')
    }

    const loadMoreJudges = () => {
        ++page
        replaceQueryParams({
            page: page.toString(),
        })

        $judgesContent.variables = { ...$judgesContent.variables, page, limit }
    }

    const onCategoryClick = (id: string) => {
        $selectedJudgesCategoryId = id
        judgesList = []
        page = 1
        replaceQueryParams({
            category: id,
            page: page.toString(),
        })

        $judgesContent.variables = { ...$judgesContent.variables, page, limit, filterQuery: getJudgesFilterQuery(id) }
    }
</script>

<svelte:head>
    <title>{$judgesContent.data?.judges_page?.title_bar_text ?? 'YiA'}</title>
</svelte:head>
{#if $judgesContent.data}
    <JudgesPage data={$judgesContent.data} {judgesList} onLoadMoreClick={loadMoreJudges} {onCategoryClick} />
{/if}
<Divider heightDesktop={12.8} heightMobile={5} />
