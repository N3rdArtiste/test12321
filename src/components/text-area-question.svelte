<script type="ts">
    export let text: string
</script>

<div>
    {@html text}
</div>

<style lang="scss">
    div {
        @media (min-width: 769px) {
            max-width: 108rem;
            width: 100%;
        }
    }
</style>
