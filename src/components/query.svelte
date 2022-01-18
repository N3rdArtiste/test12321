<script lang="ts">
    import type { OperationStore } from '@urql/svelte'

    export let content: OperationStore<any, object, any>
</script>

<section>
    {#if $content.fetching}
        <p>Loading...</p>
    {:else if $content.error}
        <p>Oh no... {$content.error.message}</p>
    {:else}
        <!-- {JSON.stringify($content)} -->
        <slot />
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
    }
</style>
