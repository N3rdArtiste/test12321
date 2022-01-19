<script lang="ts">
    import '../app.scss'
    import { setupClient } from 'services/api'

    import MainNav from 'components/layout/main-nav.svelte'

    setupClient()
</script>

<MainNav />

<slot />
