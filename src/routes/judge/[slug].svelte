<script context="module" type="ts">
    import { JudgeDocument } from '_config/graphql-tags/graphql-tags-generated'

    export const load: Load = async ({ stuff, url }) => {
        const judgeId = url.pathname.substring(url.pathname.lastIndexOf('/') + 1)
        return {
            props: {
                judge: stuff.getOperationStore ? await stuff.getOperationStore(JudgeDocument, { id: judgeId }) : null,
            },
        }
    }
</script>

<script type="ts">
    import { goto } from '$app/navigation'
    import { query } from '@urql/svelte'

    export let judge: JudgeQueryStore
    query(judge)
    const goToHome = () => {
        goto('/')
    }
</script>

<section>
    <div class="card">
        <p>{$judge?.data?.judges_by_id?.name}</p>
    </div>
</section>
<button on:click={goToHome}>Go to home</button>

<style>
    .card {
        height: 100px;
        width: 100px;
        background-color: var(--color-accent);
    }
    section {
        margin-bottom: 10px;
    }
</style>
