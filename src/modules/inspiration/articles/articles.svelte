<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'
    import Card from 'modules/inspiration/articles/card.svelte'

    export let data: InspirationPageQuery['inspiration_articles']
    export let onLoadMoreClick: (() => void) | undefined
</script>

<section>
    <div class="articles">
        {#each data ?? [] as article, i}
            <div>
                <Card {article} longCard={Boolean(i % 2)} />
            </div>
        {/each}
    </div>
    {#if onLoadMoreClick}
        <i>
            <ArrowButton onClick={onLoadMoreClick} label="Load more" />
        </i>
    {/if}
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        gap: 2rem var(--column-gap);
        justify-content: center;
        @media (min-width: 843px) {
            row-gap: 7.5rem;
            padding: 0 2rem;
            grid-template-columns: minmax(12.2rem, 1fr) repeat(11, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
        }
        & > i {
            grid-column: 2/8;
            @media (min-width: 843px) {
                grid-column: span 12;
            }
        }
    }
    .articles {
        grid-column: 2/8;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
        gap: 2rem var(--column-gap);
        @media (min-width: 843px) {
            grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));

            grid-column: 1/13;
        }
    }
</style>
