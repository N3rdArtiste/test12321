<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Filter from 'components/filter.svelte'

    import Card from 'modules/past-winners/card.svelte'

    import type { PastWinnersPageQuery } from '_config/typeDefs/graphql-generated'

    export let data: PastWinnersPageQuery
    export let pastWinnersList: PastWinnersPageQuery['past_winners']
    export let onLoadMoreClick: () => void
    const pastWinnerfilters = data.past_winners_categories?.map(category => {
        return category?.category
    })
</script>

<section>
    <aside>
        <Filter
            multiLevelList={[
                {
                    name: 'All',
                    multiLevelList: [
                        { name: 'Year', multiLevelList: [] },
                        { name: 'child2' },
                        { name: 'child3', multiLevelList: [{ name: 'child3.1' }, { name: 'child3.2' }, { name: 'child3.3' }] },
                    ],
                },
            ]}
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
