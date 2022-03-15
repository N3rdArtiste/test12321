<script type="ts">
    import { blur } from 'svelte/transition'
    import { session } from '$app/stores'

    import { getDirectusAssetLink } from 'helpers/string'
    export let article: ArrayElement<InspirationPageQuery['inspiration_articles']>
    export let longCard: boolean = false
</script>

<article in:blur>
    <picture>
        <source srcset={`${getDirectusAssetLink($session.directusURL, article?.image?.filename_disk)}?quality=50&format=webp`} media="(min-width: 769px)" />
        <img
            loading="lazy"
            class:longCard
            src={`${getDirectusAssetLink($session.directusURL, article?.image?.filename_disk)}?quality=30&format=webp`}
            alt={article?.image?.description ?? 'article thumbnail'}
        />
    </picture>
    <h2 class="small">{article?.title}</h2>
    <p class="smaller">{article?.body}</p>
    <a rel="external" target="_blank" href={article?.read_more_link}>{article?.read_more_label}</a>
</article>

<style lang="scss">
    article {
        transition: all 0.3s;
        display: grid;
        grid-auto-flow: row;
        grid-auto-columns: auto;
        grid-template-rows: auto 2.5rem auto 2.1rem auto 2.3rem auto 2.5rem;
        background-color: var(--color-primary);

        @media (min-width: 769px) {
            background-color: inherit;
            &:hover {
                background-color: white;
            }
        }

        & > picture {
            grid-row: 1/2;
            & > img {
                width: 100%;
                object-fit: cover;
                object-position: top;
                aspect-ratio: 374/258;

                &.longCard {
                    aspect-ratio: 374/346;
                }

                @media (min-width: 769px) {
                    &.longCard {
                        aspect-ratio: 397/368;
                    }
                }
            }
        }

        & > h2 {
            grid-row: 3/4;
        }
        & > p {
            grid-row: 5/6;
        }
        & > a {
            grid-row: 7/8;

            text-decoration: underline;
            cursor: pointer;
        }
        & > :not(picture) {
            padding: 0 2.4rem;
        }
    }
</style>
