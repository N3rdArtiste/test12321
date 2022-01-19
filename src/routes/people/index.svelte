<script lang="ts">
    import { api } from 'services/api'
    import { people } from 'stores/people'

    import Query from 'components/query.svelte'

    api(people)
</script>

<svelte:head>
    <title>people</title>
</svelte:head>

<section class="people">
    <Query content={$people}>
        <ul>
            {#each $people.data.allPeople.people as item (item.id)}
                <!-- <li style="background-image: url({`sw/people/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});"> -->
                <li>
                    <img src={`sw/people/${Math.floor(Math.random() * (88 - 1 + 1)) + 1}-full.jpg`} alt="" />
                    <h4>{item.name}</h4>
                    <h3>{item.diameter}</h3>
                    <p>{item.population}</p>
                    <p>{item.gravity}</p>
                    <!-- <img src={`sw/people/${item.id}-full.jpg`} alt="" /> -->
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
