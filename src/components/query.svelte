<script lang="ts">
    import type { OperationStore } from '@urql/svelte'

    type T = $$Generic
    export let content: OperationStore<T>
    interface $$Slots {
        default: {
            data: T
        }
    }
</script>

<section>
    {#if $content.fetching}
        <p>Loading...</p>
    {:else if $content.error}
        <p>Oh no... {$content.error.message}</p>
    {:else if $content.data}
        <slot data={$content.data} />
    {/if}
</section>

<style lang="scss">
    section {
        display: grid;
        padding: 1rem;

        :global(ul) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            grid-gap: 0.5rem;
            padding: 0;
            margin: 0;
        }
        :global(ul li) {
            display: grid;

            margin: 0 0 0.5rem 0;
            padding: 0.5rem;
            background-color: white;
            border-radius: 8px;
            filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
            transform: translate(-1px, -1px);
            transition: filter 0.2s, transform 0.2s;
        }
        :global(ul li > img) {
            width: 100%;
        }
    }
</style>
