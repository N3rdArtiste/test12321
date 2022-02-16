<script lang="ts">
    export let heightDesktop: number
    export let heightMobile: number
    let viewportWidth: number

    $: height = viewportWidth < 769 ? heightMobile : heightDesktop
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<i style={`height: ${height}rem`} />

<style lang="scss">
    i {
        display: grid;
        margin: 0 auto;
    }
</style>
