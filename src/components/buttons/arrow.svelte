<script lang="ts">
    export let label: string
    export let onClick: () => void
</script>

<button on:click={onClick}>
    <span>{label}</span>
</button>

<style lang="scss">
    button {
        display: grid;
        grid-auto-flow: column;
        &:hover {
            color: var(--color-brand);
        }
        & > span {
            font-size: 3rem;
            line-height: 4rem;
            font-weight: 900;

            @media only screen and (min-width: 48.1rem) {
                font-size: 4rem;
                line-height: 5rem;
            }
        }
    }
</style>
