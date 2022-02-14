<script lang="ts">
    export let label: string
    export let onClick: () => void
</script>

<button on:click={onClick}>
    <span>{label}</span>
</button>

<style lang="scss">
    @import 'arrowButton.styles.scss';
</style>
