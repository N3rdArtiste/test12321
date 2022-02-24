<script lang="ts">
    export let tabTitles: string[]
    export let content: Multi_Level_Question_Items[]

    import { tab } from 'stores/app'

    function handleClick(val: number) {
        $tab = val + 1
    }
</script>

<div>
    <i class="tabs">
        {#each tabTitles as item, index}
            <span on:click={() => handleClick(index)} class:active={$tab == index + 1}>
                {item}
            </span>
        {/each}
    </i>

    <i class="content">
        {#each content as item, index}
            <slot returnData={item} {index} />
        {/each}
    </i>
</div>

<style lang="scss">
    div {
        display: grid;

        grid-template-rows: max-content;
        grid-template-columns: 1fr;

        grid-gap: 1rem;
        padding: 0 3rem;

        @media (min-width: 850px) {
            grid-template-columns: max-content 1fr;
            grid-gap: 3rem;
        }

        i {
            display: grid;
            background: var(--color-primary);

            &.tabs {
                grid-auto-rows: 2.3rem;
                grid-template-columns: max-content;

                span {
                    padding: 0.1rem;
                    font-size: 1.7rem;
                    font-weight: 400;

                    &:hover {
                        color: var(--color-text-secondary);
                        cursor: pointer;
                    }
                    &.active {
                        color: var(--color-text);
                        cursor: default;
                        font-weight: 600;
                    }
                }
            }

            &.content {
                grid-template-rows: 1fr;

                :global(div.tabContent) {
                    z-index: 0;
                    grid-row: 1;
                    grid-column: 1;
                }
                :global(div.tabContent.active) {
                    display: grid;
                    z-index: 2;
                    background: var(--color-primary);
                    height: 101%;
                    padding-bottom: 2rem;

                    grid-template-rows: 5rem min-content 1fr;
                    grid-template-columns: 1fr;

                    @media (min-width: 1100px) {
                        grid-template-rows: 6rem 1fr;
                        grid-template-columns: minmax(20rem, 1fr) minmax(16rem, 2fr);
                    }
                }

                :global(div.tabContent.active > :nth-child(2)) {
                    grid-row: 2;
                    padding-bottom: 1rem;
                }
                :global(div.tabContent.active > :nth-child(3)) {
                    text-align: justify;
                    text-justify: inter-word;
                    padding-left: 0;

                    @media (min-width: 1100px) {
                        padding-left: 3rem;
                    }
                }
            }
        }
    }
</style>
