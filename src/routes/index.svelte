<script context="module" lang="ts">
    export const prerender = true
</script>

<script lang="ts">
    import { api } from 'services/api'
    import { stats } from 'stores/stats'

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
        <a href="/films">{$stats.data.allFilms.totalCount} Films</a>
        <a href="/people">{$stats.data.allPeople.totalCount} People</a>
        <a href="/planets">{$stats.data.allPlanets.totalCount} Planets</a>
        <a href="/species">{$stats.data.allSpecies.totalCount} Species</a>
        <a href="/starships">{$stats.data.allStarships.totalCount} Starships</a>
        <a href="/vehicles">{$stats.data.allVehicles.totalCount} Vehicles</a>
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
