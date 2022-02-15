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
    export let homepage: HomepageQueryStore

    import { query } from '@urql/svelte'

    import Divider from 'components/divider.svelte'
    import CompetitionIntro from 'modules/competition/intro.svelte'
    import InnovatorsIntro from 'modules/innovators/intro.svelte'

    query(homepage)

    $: console.log('--homepage data--', $homepage)
</script>

<svelte:head>
    <title>YiA Welcome</title>
</svelte:head>

<section>
    {#if $homepage.data}
        <CompetitionIntro data={$homepage.data.home_page} />
        <Divider heightDesktop={4.2} heightMobile={100} />
        <InnovatorsIntro data={$homepage.data.home_page} />
        <Divider heightDesktop={6.3} heightMobile={100} rule={true} />
    {/if}
</section>
