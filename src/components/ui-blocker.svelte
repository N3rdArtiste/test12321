<script lang="ts">
    export let text: string

    import { darkTheme } from 'stores/ui'

    import Loading from 'components/loading.svelte'
</script>

<div class="loadingContainer" class:darkTheme={$darkTheme}>
    <Loading text={text ?? 'loading'} />
</div>

<style lang="scss">
    .loadingContainer {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: grid;

        align-items: center;
        justify-items: center;

        grid-template-rows: 1fr 3fr 2fr;
        padding-top: 5.3rem;

        background: var(--theme-primary);

        z-index: 9999998;
    }
</style>
