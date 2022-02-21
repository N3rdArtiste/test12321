<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Filter from 'components/filter.svelte'

    import Card from 'modules/past-winners/card.svelte'

    export let data: PastWinnersPageQuery
    export let pastWinnersList: PastWinnersPageQuery['past_winners']
    export let onLoadMoreClick: () => void
    export let onCategoryClick: (id: string) => void

    let pastWinnerCategories = data.past_winners_categories?.map(category => {
        return { name: category?.category!, id: `cat-${category?.id!}` }
    })

    const pastWinnerYears = data.past_winners_years?.map(year => {
        return { name: year?.year?.toString()!, id: `year-${year?.id!}` }
    })
    const multiLevelList = [
        {
            id: 'all',
            name: 'All',
            multiLevelList: [{ id: 'year', name: 'Year', multiLevelList: pastWinnerYears }, ...(pastWinnerCategories ?? [])],
        },
    ]
</script>

<section>
    <aside>
        <Filter
            {multiLevelList}
            catClick={id => {
                console.log(id)
            }}
        />
    </aside>
    <h1>{data.past_winners_page?.heading}</h1>
    {#each pastWinnersList ?? [] as past_winner}
        <div>
            <Card data={past_winner} />
        </div>
    {/each}
    <i>
        <ArrowButton onClick={onLoadMoreClick} label="Load more" />
    </i>
</section>

<style lang="scss">
</style>
