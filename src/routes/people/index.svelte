<script lang="ts">
    import { api } from 'services/api'
    import { filteredPeople, people } from 'stores/people'

    import Query from 'components/query.svelte'
    import Search from 'components/search.svelte'

    api(people)
</script>

<svelte:head>
    <title>people</title>
</svelte:head>

<section class="people">
    <Search placeHolder="Search By People's Name/Gender/Id" />
    <Query content={$people} let:data>
        <ul>
            {#each $filteredPeople ?? [] as item (item?.id)}
                <!-- <li style="background-image: url({`sw/people/${Math.floor(Math.random() * (21 - 2 + 1)) + 2}-full.jpg`});" /> -->
                <li>
                    <img src={`sw/people/${Math.floor(Math.random() * (88 - 1 + 1)) + 1}-full.jpg`} alt="" />
                    <h4>{item.name}</h4>
                    <h3>{item.gender}</h3>
                    <p>{item.id}</p>

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
