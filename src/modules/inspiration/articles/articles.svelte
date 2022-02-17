<script type="ts">
    import Card from 'modules/inspiration/articles/card.svelte'
    import type { InspirationPageQuery } from '_config/typeDefs/graphql-generated'

    export let data: InspirationPageQuery['inspiration_articles']
    console.log(data, 'data')
</script>

<section>
    {#if data}
        {#each data as article}
            <div>
                <Card {article} />
            </div>
        {/each}
    {/if}
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        padding: 0 2rem;
        row-gap: 2rem;
        & > div {
            grid-column: 1/7;
        }
    }
</style>
