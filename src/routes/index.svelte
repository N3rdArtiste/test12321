<script context="module" lang="ts">
    export const prerender = true
</script>

<script lang="ts">
    import { operationStore, query } from '@urql/svelte'

    const content = operationStore(`
        query {
            welcome {
                title
                blurb
            }
            what_we_do {
                title
                body
                category
                sort
            }
        }`)

    query(content)

    import Counter from 'base/components/counter.svelte'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>
    {#if $content.fetching}
        <p>Loading...</p>
    {:else if $content.error}
        <p>Oh no... {$content.error.message}</p>
    {:else}
        <h1>{$content.data.welcome.title}</h1>

        <h2>{$content.data.welcome.blurb}</h2>

        <ul>
            {#each $content.data.what_we_do as item (item.sort)}
                <li>
                    <h4>{item.category}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>
            {:else}
                <!-- Coming soon... -->
            {/each}
        </ul>
    {/if}

    <Counter />
</section>

<style lang="scss">
    section {
        display: grid;
        justify-items: center;
        align-items: center;

        max-width: calc(100vw - 4rem);
        margin: 0 auto;
    }
</style>
