<script lang="ts">
    import { api } from 'services/api'
    import { films } from 'stores/films'

    import Query from 'base/components/query.svelte'

    api(films)
</script>

<svelte:head>
    <title>films</title>
</svelte:head>

<section class="films">
    <Query content={$films}>
        <ul>
            {#each $films.data.allFilms.films as item (item.id)}
                <!-- <li style="background-image: url({`sw/films/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});"> -->
                <li>
                    <img src={`sw/films/${Math.floor(Math.random() * (7 - 2 + 1)) + 2}-full.jpg`} />
                    <h4>{item.title}</h4>

                    <!-- <img src={`sw/films/${item.id}-full.jpg`} /> -->
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
