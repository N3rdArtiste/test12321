<script context="module" lang="ts">
    export const prerender = true
</script>

<script lang="ts">
    import { api } from 'services/api'
    import { stats } from 'stores/stats'
    import { contentTypes } from 'constants/content-types'

    api(stats)

    import Query from 'components/query.svelte'
    import Counter from 'components/counter.svelte'
    import type { StatsQueryQuery } from '_config/typeDefs/graphql-generated'

    const statsDataRestructurer = (data: StatsQueryQuery) => {
        const arr = []
        for (const [key, value] of Object.entries(data)) {
            if (value !== 'Root') arr.push({ key, value: value?.totalCount })
        }
        return arr
    }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>
    <Query content={$stats} let:data>
        <h1>We have a graphql api with:</h1>
        {#each statsDataRestructurer(data) as stat}
            <a href={`/${stat.key.replace('all', '').toLowerCase()}`}>
                {stat.key}
                {stat.value}
            </a>
        {/each}
    </Query>

    <Counter />
</section>

<style lang="scss">
    section {
        display: grid;

        width: 100%;
        max-width: calc(100vw - 3rem);
        margin: 3rem auto;

        a {
            justify-self: center;
        }
    }
</style>
