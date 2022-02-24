<script type="ts">
    import { goto } from '$app/navigation'

    import Arrow from 'components/buttons/arrow.svelte'
    import Card from 'modules/inspiration/articles/card.svelte'

    export let data: HomePageQuery['home_page']
    const articles = data?.inspiration_articles?.map(article => {
        return article?.inspiration_article as ArrayElement<InspirationPageQuery['inspiration_articles']>
    })
</script>

<section>
    <div class="button-container">
        <Arrow
            label={'i am inspired'}
            onClick={() => {
                goto('/inspiration')
            }}
        />
    </div>
    <div class="articles">
        {#each articles ?? [] as article, i}
            <div>
                <Card {article} longCard={Boolean(i % 2)} />
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 3.1em auto;
        column-gap: var(--column-gap);
        grid-auto-flow: row;
        justify-content: center;
    }

    .button-container {
        grid-area: 1 / 2 / 2 / 8;
    }

    .articles {
        grid-area: 3 / 2 / 4 / 8;
    }

    @media (min-width: 769px) {
        section {
            grid-template-rows: auto 3.1em auto;
            grid-auto-flow: row;
            padding: 0 2rem;
        }

        .button-container {
            grid-area: 1 / 1 / 2 / 13;
        }

        .articles {
            grid-area: 3 / 1 / 4 / 13;

            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            column-gap: var(--column-gap);
            & > div {
                column-span: 3;
            }
        }
    }
</style>
