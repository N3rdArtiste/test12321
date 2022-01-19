<script lang="ts">
    import { api } from 'services/api'
    import { vehicles } from 'stores/vehicles'

    import Query from 'components/query.svelte'

    api(vehicles)
</script>

<svelte:head>
    <title>vehicles</title>
</svelte:head>

<section class="vehicles">
    <Query content={$vehicles}>
        <ul>
            {#each $vehicles.data.allVehicles.vehicles as item (item.id)}
                <!-- <li style="background-image: url({`sw/vehicles/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});"> -->
                <li>
                    <img src={`sw/vehicles/${Math.floor(Math.random() * (42 - 4 + 1)) + 4}-full.jpg`} alt="" />
                    <h4>{item.name}</h4>
                    <h3>{item.diameter}</h3>
                    <p>{item.population}</p>
                    <p>{item.gravity}</p>
                    <!-- <img src={`sw/vehicles/${item.id}-full.jpg`} alt="" /> -->
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
