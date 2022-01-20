<script lang="ts">
    import '../app.scss'
    import { setupClient } from 'services/api'
    import MainNav from 'components/layout/main-nav.svelte'
    import { navigating } from '$app/stores'
    setupClient()
</script>

<MainNav />
{#if !$navigating}
    <slot />
{:else}
    <h2>LOADING!!</h2>
{/if}
