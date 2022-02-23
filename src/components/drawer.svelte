<script lang="ts">
    export let title: string
    export let content: any

    import { tab } from 'stores/app'

    import HorizontalLine from 'components/horizontal-line.svelte'

    function handleOurClick(val: number) {
        $tab = val + 1
    }
</script>

<HorizontalLine />
<h2>{title}</h2>

<section>
    <slot />
</section>
<HorizontalLine />

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
            background: var(--color-primary);

            &.tabs {
                grid-auto-rows: 1.3rem;
                grid-template-columns: max-content;

                span {
                    padding: 0.1rem;
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
                display: grid;
                grid-template-rows: 1fr;

                :global(div) {
                    display: grid;
                    z-index: 0;
                    grid-row: 1;
                    grid-column: 1;
                }
                :global(div.active) {
                    z-index: 2;
                    background: var(--color-primary);
                    height: 100%;

                    grid-template-rows: 3rem 1fr;
                    grid-template-columns: minmax(10rem, 15rem) minmax(16rem, 1fr);

                    @media (max-width: 1100px) {
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

                    @media (max-width: 1100px) {
                        padding-left: 0;
                    }
                }
            }
        }
    }
</style>
