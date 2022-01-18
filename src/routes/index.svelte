<script context="module" lang="ts">
    export const prerender = true
</script>

<script lang="ts">
    import { api } from 'services/api'
    import { people } from 'stores/people'

    api(people)

    import Query from 'base/components/query.svelte'
    import Counter from 'base/components/counter.svelte'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>
    <Query content={$people}>
        <ul>
            {#each $people.data.allPeople.people as item}
                <li>
                    <h4>{item.name}</h4>
                    <p>{item.homeworld?.name}</p>
                    <p>{item.species?.name}</p>
                    <p>{item.gender}</p>
                </li>
            {/each}
        </ul>
    </Query>

    <Counter />
</section>

<style lang="scss">
    section {
        display: grid;

        width: 100%;
        max-width: calc(100vw - 3rem);
        margin: 3rem auto;
    }
</style>
