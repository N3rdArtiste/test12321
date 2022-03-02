<script lang="ts" context="module">
    export function load({ error, status }: ErrorPayload) {
        return {
            props: { error, status },
        }
    }
</script>

<script lang="ts">
    export let status: string

    export let error: SomeError
</script>

<h1>{status} Hello world</h1>

<pre>{error.message}</pre>

<!-- TODO figure out what to do with frames/stacktraces in prod -->
<!-- frame is populated by Svelte in its CompileError and is a Rollup/Vite convention -->
{#if error.frame}
    <pre>{error.frame}</pre>
{/if}

{#if error.stack}
    <pre>{error.stack}</pre>
{/if}
