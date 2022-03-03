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

<section>
    <h1>{status}</h1>

    <p>{error.message}</p>

    <a class="big" sveltekit:prefetch href={'/'}> Go back to home </a>
</section>

<style lang="scss">
    section {
        display: grid;
        padding: 0 2rem;
        gap: 1rem;
        grid-auto-flow: row;
        align-content: flex-start;
        justify-items: center;
        justify-content: center;
        & > a:hover {
            color: var(--color-tertiary);
        }
    }
</style>
