<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'
    export let article: ArrayElement<InspirationPageQuery['inspiration_articles']>
    export let longCard: boolean = false
</script>

<article>
    <img class:longCard src={getDirectusAssetLink(article?.image?.filename_disk)} alt={article?.image?.description} />
    <h2 class="small">{article?.title}</h2>
    <p class="smaller">{article?.body}</p>
    <a sveltekit:prefetch href={article?.read_more_link}>{article?.read_more_label}</a>
</article>

<style lang="scss">
    article {
        display: grid;
        grid-auto-flow: row;
        grid-auto-columns: auto;
        grid-template-rows: auto 2.5rem auto 2.1rem auto 2.3rem auto 2.5rem;
        background-color: var(--color-primary);

        @media (min-width: 769px) {
            background-color: inherit;
            &:hover {
                background-color: var(--color-primary);
            }
        }

        img {
            grid-row: 1/2;
            aspect-ratio: 374/258;
            width: 100%;
            object-fit: cover;
            background-color: grey;
            &.longCard {
                aspect-ratio: 374/346;
            }
            @media (min-width: 769px) {
                &.longCard {
                    aspect-ratio: 397/368;
                }
            }
        }

        h2 {
            grid-row: 3/4;
        }
        p {
            grid-row: 5/6;
        }
        a {
            grid-row: 7/8;

            text-decoration: underline;
            cursor: pointer;
        }
        & > :not(img) {
            padding: 0 2.4rem;
        }
    }
</style>
