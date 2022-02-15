<script lang="ts">
    export let heightDesktop: number
    export let heightMobile: number
    export let rule: boolean = false

    let viewportWidth: number

    $: height = viewportWidth < 600 ? heightMobile : heightDesktop
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<i style={`height: ${height}rem`}>
    {#if rule}
        <hr />
    {/if}
</i>

<style lang="scss">
    i {
        display: grid;
        width: 80%;
        margin: 0 auto;

        hr {
            align-self: center;
            background: #333;
            width: 100%;
            height: 2px;
            border: none;
        }
    }
</style>
