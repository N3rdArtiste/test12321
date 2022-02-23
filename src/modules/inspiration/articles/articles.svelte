<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Card from 'modules/inspiration/articles/card.svelte'

    export let data: InspirationPageQuery['inspiration_articles']
    export let onLoadMoreClick: () => void
</script>

<section>
    {#if data}
        {#each data as article, i}
            <div>
                <Card {article} longCard={Boolean(i % 2)} />
            </div>
        {/each}
        <i>
            <ArrowButton onClick={onLoadMoreClick} label="Load more" />
        </i>
    {/if}
</section>

<style lang="scss">
    section {
        display: grid;
        row-gap: 2rem;

        padding: 0 2rem;
        justify-content: center;

        div {
            grid-column: span 6;
        }

        @media (min-width: 769px) {
            row-gap: 7.5rem;
            div {
                grid-column: span 3;
            }
        }
        i {
            grid-column: span 6;
            @media (min-width: 769px) {
                grid-column: span 12;
            }
        }
    }
</style>
