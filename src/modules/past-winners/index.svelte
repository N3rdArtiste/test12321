<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Filter from 'components/filter.svelte'
    import SelectFilterOption from 'components/selectFilterOption.svelte'

    import Card from 'modules/past-winners/card.svelte'

    export let data: PastWinnersPageQuery
    export let pastWinnersList: PastWinnersPageQuery['past_winners']
    export let onLoadMoreClick: () => void
    export let onCategoryClick: (id: string) => void

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

    const selectValueChange = (e: Event & { currentTarget: EventTarget & HTMLSelectElement }) => onCategoryClick((e.target as HTMLInputElement).value)
</script>

<section>
    <h1>{data.past_winners_page?.heading}</h1>
    <!-- Only visible in desktop -->
    <aside>
        <p class="small"><strong>Filter by</strong></p>
        <div>
            <Filter {multiLevelList} catClick={onCategoryClick} />
        </div>
    </aside>
    <!-- Only visible in mobile -->
    <i>
        <p class="small"><strong>Filter by</strong></p>
        <select on:change={selectValueChange}>
            <SelectFilterOption {multiLevelList} />
        </select>
    </i>
    <b>
        {#each pastWinnersList ?? [] as past_winner}
            <div>
                <Card data={past_winner} />
            </div>
        {/each}
    </b>
    <div>
        <ArrowButton onClick={onLoadMoreClick} label="Load more" />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 3.5rem auto 3rem auto 4rem auto;
        align-self: flex-start;
        grid-auto-flow: row;
        column-gap: var(--column-gap);
        justify-content: center;
        @media (min-width: 769px) {
            grid-template-rows: auto 11.2rem auto 11rem auto;
            padding: 0 2rem;
        }

        & > h1 {
            grid-column: 2/8;
            grid-row: 1/2;

            @media (min-width: 769px) {
                grid-area: 1 / 4 / 2 / 13;
            }
        }

        & > i {
            grid-column: 2/8;
            grid-row: 3/4;

            display: grid;
            grid-auto-flow: column;
            justify-content: flex-start;
            column-gap: 1rem;

            @media (min-width: 769px) {
                display: none;
            }
        }
        & > aside {
            display: none;
            @media (min-width: 769px) {
                display: grid;
                border-right: 0.15rem solid var(--color-secondary);
                grid-auto-rows: 1fr;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: auto 4.5rem auto;
                grid-area: 1 / 1 / 5 / 3;
                align-content: flex-start;

                & > p {
                    grid-area: 1 / 1 / 2 / 4;
                }
                & > div {
                    grid-area: 3 / 1 / 4 / 4;
                }
            }
        }

        & > b {
            grid-column: 2/8;
            grid-row: 5/6;
            display: grid;
            row-gap: 6.2rem;
            @media (min-width: 769px) {
                grid-area: 3 / 4 / 4 / 13;
                grid-auto-flow: row;
                column-gap: 2.9rem;
                grid-template-columns: 1fr 1fr;
            }
        }

        & > div {
            grid-column: 2/8;
            grid-row: 7/8;
            @media (min-width: 769px) {
                grid-area: 5 / 4 / 6 / 13;
            }
        }
    }
</style>
