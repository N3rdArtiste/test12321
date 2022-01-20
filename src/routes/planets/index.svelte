<script lang="ts">
    import { api } from 'services/api'
    import { planets } from 'stores/planets'

    import Query from 'components/query.svelte'

    api(planets)
</script>

<svelte:head>
    <title>planets</title>
</svelte:head>

<section class="planets">
    <Query content={$planets} let:data>
        <ul>
            {#each data.allPlanets?.planets ?? [] as item (item?.id)}
                <!-- <li style="background-image: url({`sw/planets/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});"> -->
                <li>
                    <img src={`sw/planets/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`} alt="" />
                    <h4>{item.name}</h4>
                    <h3>{item.diameter}</h3>
                    <p>{item.population}</p>
                    <p>{item.gravity}</p>
                    <!-- <img src={`sw/planets/${item.id}-full.jpg`} alt="" /> -->
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
