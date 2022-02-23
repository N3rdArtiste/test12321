<script lang="ts">
    import { onMount } from 'svelte'
    import { browser } from '$app/env'
    import { isLoading } from 'stores/ui'

    onMount(() => {
        if (window.app_id) location.reload()

        if (!window.app_id) {
            window.app_id = '5bfb26240e9ef5086ac1c8ac'
            window.distribution_key = 'dist_3'
        }
    })
</script>

<svelte:head>
    {#if browser && !('app_id' in window)}
        <script type="text/javascript" src="https://loader.knack.com/5bfb26240e9ef5086ac1c8ac/dist_3/knack.js"></script>
    {/if}
</svelte:head>

{#if browser && !('app_id' in window)}
    <div id="knack-dist_3">Loading...</div>
{/if}

<style lang="scss">
    :global(main#content.loginPage) {
        padding-top: 5rem;
    }
</style>
