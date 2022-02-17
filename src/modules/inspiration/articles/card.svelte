<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'

    import type { InspirationPageQuery } from '_config/typeDefs/graphql-generated'

    export let article: ArrayElement<InspirationPageQuery['inspiration_articles']>
    export let longCard: boolean = false
</script>

<article>
    <img class:longCard src={'https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg'} alt={article?.image?.description} />
    <h2>{article?.title}</h2>
    <p>{article?.body}</p>
    <a href={article?.read_more_link}>{article?.read_more_label}</a>
</article>

<style lang="scss">
    article {
        display: grid;
        grid-auto-flow: row;
        grid-auto-columns: auto;
        grid-template-rows: auto 2.5rem auto 2.1rem auto 2.3rem auto 2.5rem;
        background-color: var(--color-white);

        @media only screen and (min-width: 769px) {
            background-color: inherit;
        }

        & > img {
            grid-row: 1/2;
            aspect-ratio: 374/258;
            width: 100%;
            object-fit: cover;
            background-color: grey;
            &.longCard {
                aspect-ratio: 374/346;
            }
            @media only screen and (min-width: 769px) {
                &.longCard {
                    aspect-ratio: 397/368;
                }
            }
        }

        & > h2 {
            grid-row: 3/4;

            font-size: 1.6rem;
            line-height: 2.4rem;
            font-weight: 900;
        }
        & > p {
            grid-row: 5/6;

            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: 400;
        }
        & > a {
            grid-row: 7/8;

            font-size: 1.4rem;
            line-height: 1.7rem;
            font-weight: 900;

            text-decoration: underline;
            cursor: pointer;
        }
        & > :not(img) {
            padding: 0 2.4rem;
        }
    }
</style>
