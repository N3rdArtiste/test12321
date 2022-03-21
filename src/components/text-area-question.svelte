<script type="ts">
    export let text: string
</script>

<div>
    {@html text}
</div>

<style lang="scss">
    div {
        & :global(a) {
            font-size: 2rem;
            line-height: 2.8rem;
            @media (min-width: 769px) {
                font-size: 2.2rem;
                line-height: 3rem;
            }
        }
        @media (min-width: 769px) {
            max-width: 108rem;
            width: 100%;
        }
    }
</style>
