<script lang="ts">
    import { term } from 'stores/search'
    export let placeHolder = 'Searching...'
</script>

<input class="search" type="text" placeholder={placeHolder} bind:value={$term} />

<style lang="scss">
    .search {
        margin: 1rem;
        height: 2rem;
        border: 1px solid;
        border-radius: 5px;
    }
</style>
