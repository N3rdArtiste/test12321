<script lang="ts">
    export let multiLevelList: MultiLevelList
    export let name: string = ''
    export let id: string = ''
    export let catClick: (id: string) => void
</script>

{#if name}
    <span
        on:click={() => {
            catClick(id)
        }}>{name}</span
    >
{/if}

<ul>
    {#each multiLevelList as listItem}
        <li>
            {#if listItem.multiLevelList}
                <svelte:self {...listItem} {catClick} />
            {:else}
                <button
                    on:click={() => {
                        catClick(listItem.id)
                    }}>{listItem.name}</button
                >
            {/if}
        </li>
    {/each}
</ul>

<style lang="scss">
    span,
    button {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 3rem;
    }
    button {
        font-weight: 400;
    }
    li {
        padding-left: 1.5rem;
        list-style: none;
    }
</style>
