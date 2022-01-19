<script context="module" lang="ts">
    export const prerender = true
</script>

<script lang="ts">
    import { api } from 'services/api'
    import { stats } from 'stores/stats'
    import { contentTypes } from 'constants/content-types'

    api(stats)

    import Query from 'base/components/query.svelte'
    import Counter from 'base/components/counter.svelte'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>
    <Query content={$stats}>
        <h1>We have a graphql api with:</h1>
        {#each contentTypes as type}
            <a href={`/${type.toLowerCase()}`}>{$stats.data[`all${type}`].totalCount} {type}</a>
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
