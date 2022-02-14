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
    <!-- {#each uniqBy(judgesArr, 'id') as judge}
        <a href={`/judge/${judge?.id}`}>
            <div class="card">
                <p>{judge?.name}</p>
            </div>
        </a>
    {/each}
</section>
<button on:click={loadMore}>Load more</button>
<p>Hello</p>
<h5>Hello</h5>
<span>Hello</span> -->
</section>

<style>
    p {
        font-weight: 500;
    }
    a {
        font-weight: 700;
    }
    span {
        font-weight: 900;
    }
    .card {
        height: 100px;
        width: 100px;
        background-color: pink;
    }
    section {
        margin-bottom: 10px;
    }
</style>
