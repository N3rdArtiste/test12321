<script context="module" type="ts">
    import { HomePageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff, url }) => {
        const defaultLimit = 6
        let limit = defaultLimit
        let page = parseInt(url.searchParams.get('page') ?? '1')
        let category = url.searchParams.get('category')
        let filterQuery = getPastWinnersFilterQuery(category)

        if (url.searchParams.get('page')) {
            if (page > 1) {
                limit = page * limit
            }
        }
        return {
            props: {
                category,
                currentPage: page,
                limit: defaultLimit,
                homePage: stuff.getOperationStore
                    ? await stuff.getOperationStore(HomePageDocument, {
                          limit,
                          page: 1,
                          filterQuery,
                      })
                    : null,
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'
    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competitions/intros/home.svelte'
    import InnovatorsIntro from 'modules/innovators/intro.svelte'
    import HorizontalLine from 'components/horizontal-line.svelte'
    import ArticleIntro from 'modules/inspiration/home/intro.svelte'
    import { replaceQueryParams } from 'helpers/url'
    import { onMount } from 'svelte'
    import { getPastWinnersFilterQuery } from 'helpers/graphql-query'
    import PastWinners from 'modules/past-winners/index.svelte'
    import Brands from 'modules/brands/home.svelte'
    import uniqBy from 'lodash/uniqBy.js'
    export let homePage: HomePageQueryStore

    query(homePage)

    export let currentPage: number
    export let limit: number
    export let category: string = 'all'
    export let selectedPastWinnersCategoryId: string

    let pastWinnersList: HomePageQuery['past_winners']
    let page = currentPage

    $: noMorePastWinnersToLoad = pastWinnersList?.length === (homePage.data?.past_winners_aggregated ?? [])[0]?.count?.id

    onMount(() => {
        selectedPastWinnersCategoryId = category ?? 'all'
        replaceQueryParams({
            page: currentPage.toString(),
        })
    })

    $: if (!$homePage.fetching) {
        pastWinnersList = uniqBy([...(pastWinnersList ?? []), ...($homePage.data?.past_winners ?? [])], 'id')
    }

    const loadMorePastWinners = () => {
        ++page
        replaceQueryParams({
            page: page.toString(),
        })

        $homePage.variables = { ...$homePage.variables, page, limit }
    }

    const onCategoryClick = (id: string) => {
        selectedPastWinnersCategoryId = id
        pastWinnersList = []
        page = 1
        replaceQueryParams({
            category: id,
            page: page.toString(),
        })

        $homePage.variables = { ...$homePage.variables, page, limit, filterQuery: getPastWinnersFilterQuery(id) }
    }
</script>

<svelte:head>
    <title>{$homePage.data?.home_page?.title_bar_text ?? 'YiA'}</title>
    <meta name="description" content={$homePage.data?.home_page?.meta_description ?? ''} />
    <meta name="keywords" content={$homePage.data?.home_page?.meta_keywords ?? ''} />
</svelte:head>

{#if $homePage.data}
    <CompetitionIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={8.5} heightMobile={5.1} />
    <InnovatorsIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={16.2} heightMobile={5} />
    <HorizontalLine />
    <Divider heightDesktop={11.5} heightMobile={5.6} />
    <ArticleIntro data={$homePage.data.home_page} />
    <Divider heightDesktop={7.6} heightMobile={5.6} />
    <HorizontalLine />
    <Divider heightDesktop={14.2} heightMobile={5.6} />
    <PastWinners
        selectedCategoryId={selectedPastWinnersCategoryId}
        data={$homePage.data}
        {pastWinnersList}
        onLoadMoreClick={noMorePastWinnersToLoad ? undefined : loadMorePastWinners}
        {onCategoryClick}
    />
    <Divider heightDesktop={14.4} heightMobile={5.6} />
    <HorizontalLine />
    <Divider heightDesktop={18.2} heightMobile={5} />
    <Brands data={$homePage.data} />
    <Divider heightDesktop={20.9} heightMobile={5.64} />
{/if}
