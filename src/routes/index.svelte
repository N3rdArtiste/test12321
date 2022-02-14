<script context="module" type="ts">
    export const prerender = true

    import { HomepageDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                homepage: stuff.getOperationStore ? await stuff.getOperationStore(HomepageDocument) : null,
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'
    import Homepage from 'modules/homepage/homepage.svelte'

    export let homepage: HomepageQueryStore
    query(homepage)
    $: console.log($homepage)
</script>

<section>
    {#if $homepage.data}
        <Homepage data={$homepage.data.home_page} />
    {/if}
</section>
