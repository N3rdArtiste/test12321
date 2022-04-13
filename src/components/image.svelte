<script lang="ts">
    export let src: string
    export let alt: string = ''
    export let svgCode: string | null | undefined = undefined
</script>

{#if svgCode}
    {@html svgCode}
{:else}
    <img loading="lazy" {src} {alt} />
{/if}

<style lang="scss">
    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
