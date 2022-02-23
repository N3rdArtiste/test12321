<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Filter from 'components/filter.svelte'
    import SelectFilterOption from 'components/selectFilterOption.svelte'

    import Card from 'modules/past-winners/card.svelte'

    export let data: PastWinnersPageQuery
    export let pastWinnersList: PastWinnersPageQuery['past_winners']
    export let onLoadMoreClick: () => void
    export let onCategoryClick: (id: string) => void

    let viewportWidth: number

    let pastWinnerCategories = data.past_winners_categories?.map(category => {
        return { name: category?.category!, id: `cat${category?.id!}` }
    })

    const pastWinnerYears = data.past_winners_years?.map(year => {
        return { name: year?.year?.toString()!, id: `year${year?.id!}` }
    })
    const multiLevelList: MultiLevelList = [
        {
            id: 'all',
            name: 'All',
            multiLevelList: [{ name: 'Year', multiLevelList: pastWinnerYears }, ...(pastWinnerCategories ?? [])],
        },
    ]
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<section>
    <p class="small"><strong>Filter by</strong></p>
    {#if viewportWidth > 769}
        <aside>
            <Filter {multiLevelList} catClick={onCategoryClick} />
        </aside>
    {:else}
        <select>
            <SelectFilterOption {multiLevelList} />
        </select>
    {/if}

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
    section {
    }
</style>
