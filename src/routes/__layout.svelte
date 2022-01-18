<script lang="ts">
    import { initClient } from '@urql/svelte'

    initClient({
        url: import.meta.env.VITE_GRAPHQL_URL as string,
        // fetchOptions: () => ({ headers: { credentials: 'omit' } }),
    })

    import '../app.scss'
    import MainNav from 'components/layout/main-nav.svelte'
</script>

<MainNav />

<slot />
