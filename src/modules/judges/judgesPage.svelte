<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Filter from 'components/filter.svelte'
    import SelectFilterOption from 'components/selectFilterOption.svelte'
    import { selectedJudgesCategoryId } from 'stores/judges'
    import Card from 'modules/judges/card.svelte'

    export let data: JudgesPageQuery
    export let judgesList: JudgesPageQuery['judges']

    export let onLoadMoreClick: () => void
    export let onCategoryClick: (id: string) => void

    const judgesYears = data.judges_years?.map(year => {
        return { name: year?.year?.toString()!, id: `year${year?.id!}` }
    })
    const multiLevelList: MultiLevelList = [
        {
            id: 'all',
            name: 'All',
            multiLevelList: [{ name: 'Year', multiLevelList: judgesYears }],
        },
    ]

    const selectValueChange = (e: Event & { currentTarget: EventTarget & HTMLSelectElement }) => onCategoryClick((e.target as HTMLInputElement).value)
</script>

<section>
    <h1>{data.judges_page?.heading}</h1>
    <!-- Only visible in desktop -->
    <aside>
        <p class="small"><strong>Filter by</strong></p>
        <div>
            <Filter selectedId={$selectedJudgesCategoryId} {multiLevelList} catClick={onCategoryClick} />
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
        {#each judgesList ?? [] as judge}
            <div>
                <Card data={judge} />
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
            grid-template-columns: minmax(12.2rem, 1fr) repeat(2, 1fr) repeat(3, minmax(12.2rem, 1fr)) repeat(6, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
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
                border-right: 0.2rem solid var(--color-secondary);
                grid-auto-rows: 1fr;
                grid-template-columns: auto;
                grid-template-rows: auto 4.5rem auto;
                grid-area: 1 / 1 / 5 / 3;
                align-content: flex-start;

                & > p {
                    grid-area: 1 / 1 / 2 / 2;
                }
                & > div {
                    grid-area: 3 / 1 / 4 / 2;
                }
            }
        }

        & > b {
            grid-column: 2/8;
            grid-row: 5/6;
            display: grid;
            row-gap: 5.3rem;
            @media (min-width: 769px) {
                row-gap: 8.3rem;
                grid-area: 3 / 4 / 4 / 13;
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
