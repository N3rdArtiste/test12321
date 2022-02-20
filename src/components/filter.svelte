<script lang="ts">
    export let multiLevelList: MultiLevelList
    export let name: string = ''
</script>

{#if name}
    <span>{name}</span>
{/if}

<ul>
    {#each multiLevelList as listItem}
        <li>
            {#if listItem.multiLevelList}
                <svelte:self {...listItem} />
            {:else}
                <p>{listItem.name}</p>
            {/if}
        </li>
    {/each}
</ul>

<style lang="scss">
    span {
        font-weight: 900;
    }
    li {
        padding-left: 10px;
        list-style: none;
        & > p {
            color: red;
        }
    }
</style>
