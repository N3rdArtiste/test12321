<script lang="ts">
    import { scale } from 'svelte/transition'
    import { flip } from 'svelte/animate'

    import { api } from 'services/api'
    import { planets } from 'stores/planets'

    import Query from 'base/components/query.svelte'

    api(planets)
</script>

<svelte:head>
    <title>planets</title>
</svelte:head>

<section class="planets">
    <Query content={$planets}>
        <ul>
            {#each $planets.data.allPlanets.planets as item (item.id)}
                <li transition:scale|local={{ start: 0.7 }} animate:flip={{ duration: 200 }}>
                    <h4>{item.name}</h4>
                    <h3>{item.diameter}</h3>
                    <p>{item.population}</p>
                    <p>{item.gravity}</p>
                </li>
            {/each}
        </ul>
    </Query>
</section>

<style lang="scss">
    section {
        display: grid;
    }
</style>
