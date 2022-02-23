<script lang="ts">
    export let multiLevelList: MultiLevelList
</script>

{#each multiLevelList as listItem}
    {#if listItem.id}
        <option value={listItem.id}>{listItem.name}</option>
    {/if}
    {#if listItem.multiLevelList}
        <svelte:self multiLevelList={listItem.multiLevelList} />
    {/if}
{/each}
