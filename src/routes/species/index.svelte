<script lang="ts">
    import { api } from 'services/api'
    import { species } from 'stores/species'

    import Query from 'base/components/query.svelte'

    api(species)
</script>

<svelte:head>
    <title>species</title>
</svelte:head>

<section class="species">
    <Query content={$species}>
        <ul>
            {#each $species.data.allSpecies.species as item (item.id)}
                <!-- <li style="background-image: url({`sw/species/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});"> -->
                <li>
                    <img src={`sw/species/${Math.floor(Math.random() * (37 - 1 + 1)) + 1}-full.jpg`} />
                    <h4>{item.name}</h4>
                    <h3>{item.diameter}</h3>
                    <p>{item.population}</p>
                    <p>{item.gravity}</p>
                    <!-- <img src={`sw/species/${item.id}-full.jpg`} /> -->
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
