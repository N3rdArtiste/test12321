<script lang="ts">
    export let tabTitles: string[]
    export let content: Content[]

    import { tab } from 'stores/app'

    function handleOurClick(val: number) {
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

        grid-template-rows: max-content;
        grid-template-columns: max-content 1fr;

        grid-gap: 3rem;
        padding: 0 3rem;

        @media (max-width: 850px) {
            grid-gap: 1rem;
            grid-template-columns: 1fr;
        }

        div {
            display: grid;

            &.tabs {
                grid-auto-rows: 1fr;
                grid-template-columns: max-content;

                background: #fff;

                & > span {
                    padding: 0.1rem;
                    font-weight: 400;

                    &:hover {
                        color: #888;
                        cursor: pointer;
                    }
                    &.active {
                        color: #000;
                        cursor: default;
                        font-weight: 600;
                    }
                }

                .active {
                    background: #fff;
                }
            }

            &.content {
                display: grid;
                grid-template-rows: 1fr;

                :global(div) {
                    z-index: 0;
                    grid-row: 1;
                    grid-column: 1;
                }
                :global(div.active) {
                    z-index: 2;
                    background: var(--color-primary-bg);
                    min-height: 23rem;

                    grid-template-rows: 3rem 1fr;
                    grid-template-columns: minmax(10rem, 15rem) minmax(16rem, 1fr);

                    @media (max-width: 850px) {
                        grid-template-rows: 3rem min-content 1fr;
                        grid-template-columns: 1fr;
                    }
                }
                :global(div.active *) {
                    text-align: justify;
                    text-justify: inter-word;
                }
                :global(div.active > :nth-child(2)) {
                    grid-row: 2;
                    padding-bottom: 1rem;
                }
                :global(div.active > :nth-child(3)) {
                    padding-left: 3rem;

                    @media (max-width: 850px) {
                        padding-left: 0;
                    }
                }
            }
        }
    }
</style>
