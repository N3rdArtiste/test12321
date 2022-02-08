<script context="module" type="ts">
    import { AllJudgesDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff }) => {
        return {
            props: {
                allJudges: stuff.getOperationStore ? await stuff.getOperationStore(AllJudgesDocument, { limit: 2, page: 1 }) : null,
            },
        }
    }
</script>

<script type="ts">
    import { query } from '@urql/svelte'
    import uniqBy from 'lodash/uniqBy.js'
    export let allJudges: AllJudgesQueryStore
    const loadMore = () => {
        $allJudges.variables = { ...$allJudges.variables, page: ($allJudges.variables?.page ?? 0) + 1 }
    }
    let judgesArr: AllJudgesQuery['judges']
    $: judgesArr = [...(judgesArr ?? []), ...($allJudges.data?.judges ?? [])]
    query(allJudges)
</script>

<section>
    {#each uniqBy(judgesArr, 'id') as judge}
        <a href={`/judge/${judge?.id}`}>
            <div class="card">
                <p>{judge?.name}</p>
            </div>
        </a>
    {/each}
</section>
<button on:click={loadMore}>Load more</button>

<style>
    .card {
        height: 100px;
        width: 100px;
        background-color: pink;
    }
    section {
        margin-bottom: 10px;
    }
</style>
