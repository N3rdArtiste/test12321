<script lang="ts">
    export let label: string
    export let onClick: () => void
</script>

<button on:click={onClick}>
    <span>{label}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="49.5" height="21.28" viewBox="0 0 49.5 21.28">
        <path id="Path_10" data-name="Path 10" d="M5.34,0,3.405,1.935l7.324,7.324v2.764L3.405,19.346,5.34,21.28,15.98,10.64Z" transform="translate(33.52)" />
        <line id="Line_46" data-name="Line 46" x1="20" x2="35" fill="none" stroke="#000" stroke-width="3" />
    </svg>
</button>

<style lang="scss">
    @import 'arrowButton.styles.scss';
</style>
