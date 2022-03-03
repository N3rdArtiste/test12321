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
        {#each articles ?? [] as article}
            <div>
                <Card {article} longCard />
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

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
        gap: 2rem var(--column-gap);
    }

    @media (min-width: 769px) {
        section {
            grid-template-rows: auto 3.1em auto;
            padding: 0 2rem;
            grid-template-columns: minmax(12.2rem, 1fr) repeat(11, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
        }

        .button-container {
            grid-area: 1 / 1 / 2 / 13;
        }

        .articles {
            grid-area: 3 / 1 / 4 / 13;
            grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
        }
    }
</style>
