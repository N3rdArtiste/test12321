<script lang="ts">
    import { api } from 'services/api'
    import { starships } from 'stores/starships'

    import Query from 'components/query.svelte'

    api(starships)
</script>

<svelte:head>
    <title>starships</title>
</svelte:head>

<section class="starships">
    <Query content={$starships} let:data>
        <ul>
            {#each data.allStarships?.starships ?? [] as item (item?.id)}
                <!-- <li style="background-image: url({`sw/starships/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});"> -->
                <li>
                    <img src={`sw/starships/${Math.floor(Math.random() * (48 - 5 + 1)) + 5}-full.jpg`} alt="" />
                    <h4>{item.name}</h4>
                    <!-- <img src={`sw/starships/${item.id}-full.jpg`} alt="" /> -->
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
