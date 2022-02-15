<script lang="ts">
    export let tabTitles: string[]
    export let content: Content[]

    import { tab } from 'stores/app'

    function handleOurClick(val: number) {
        console.log('--val--', val)

        $tab = val + 1
    }
</script>

<section>
    <div class="tabs">
        {#each tabTitles as item, index}
            <span class={`index-${index + 1}`} on:click={() => handleOurClick(index)} class:active={$tab == index + 1}>
                {item}
            </span>
        {/each}
    </div>

    <div class="content">
        {#each content as item, index}
            <slot retData={item} {index} />
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        display: grid;

        grid-template-rows: 1rem;
        grid-template-columns: max-content 1fr;

        div {
            display: grid;

            border: 1px solid blue;

            &.tabs {
                grid-auto-rows: 1fr;
                grid-template-columns: max-content;

                background-color: transparent;
                /* pointer-events: none; */

                background: #888;

                & > span {
                    padding: 1rem;

                    &:hover {
                        cursor: pointer;
                        background: red;
                        pointer-events: all;
                    }
                }

                :global(.content) {
                    background: red;
                }

                .active {
                    background: #fff;
                }
            }
        }
    }
</style>
