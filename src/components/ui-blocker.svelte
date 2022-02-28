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

        background: var(--color-primary);

        z-index: 9999998;
    }
</style>
