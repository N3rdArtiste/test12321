<script type="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'

    import Card from 'modules/inspiration/articles/card.svelte'
    import type { InspirationPageQuery } from '_config/typeDefs/graphql-generated'

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
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        padding: 0 2rem;
        justify-content: center;
        row-gap: 2rem;
        & > div {
            grid-column: span 6;
        }
        @media only screen and (min-width: 769px) {
            row-gap: 7.5rem;
            & > div {
                grid-column: span 3;
            }
        }
        & > i {
            grid-column: span 6;
            @media only screen and (min-width: 769px) {
                grid-column: span 12;
            }
        }
    }
</style>
