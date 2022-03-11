<script lang="ts">
    export let multiLevelList: MultiLevelList
    export let name: string | undefined = undefined
    export let id: string | undefined = undefined
    export let selectedId: string
    export let catClick: (id: string) => void
</script>

{#if name}
    {#if id}
        <span
            class:selected={id === selectedId}
            on:click={() => {
                id ? catClick(id) : null
            }}>{name}</span
        >
    {:else}
        <span>{name}</span>
    {/if}
{/if}
<ul>
    {#each multiLevelList as listItem}
        <li>
            {#if listItem.multiLevelList}
                <svelte:self {selectedId} {...listItem} {catClick} />
            {:else}
                <button
                    class:selected={listItem.id === selectedId}
                    on:click={() => {
                        listItem.id && catClick(listItem.id)
                    }}>{listItem.name}</button
                >
            {/if}
        </li>
    {/each}
</ul>

<style lang="scss">
    span,
    button {
        cursor: pointer;
        font-size: 2.2rem;
        line-height: 3rem;
        &:hover {
            color: var(--color-tertiary);
        }
    }
    button {
        font-weight: 400;
    }

    ul {
        padding-left: 0;
    }
    li {
        padding-left: 0.75rem;
        list-style: none;
    }

    .selected {
        transition: all 0.3s;
        font-weight: 900;
    }
</style>
