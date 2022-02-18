<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'

    import type { InspirationPageQuery } from '_config/typeDefs/graphql-generated'

    export let data: InspirationPageQuery['inspiration_page']
</script>

<section>
    <h1>{@html data?.heading}</h1>
    <p>{data?.description}</p>
    <img src={getDirectusAssetLink(data?.hero_image?.filename_disk)} alt={data?.hero_image?.description} />
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 4.2rem auto 5.4rem auto auto;
        column-gap: var(--column-gap);
        justify-content: center;

        @media only screen and (min-width: 769px) {
            grid-template-rows: auto 6.3rem auto;
            padding: 0 2rem;
        }
        & > h1 {
            grid-column: 1/7;
            grid-row: 1/2;

            font-size: 6rem;
            font-weight: 900;
            line-height: 6rem;
            padding: 0 2rem;

            @media only screen and (min-width: 769px) {
                grid-column: 1/6;
                grid-row: 1/2;

                font-size: 8rem;
                font-weight: 900;
                line-height: 8rem;
                padding: 0;
            }
        }

        & > p {
            grid-column: 1/7;
            grid-row: 3/4;

            font-size: 2rem;
            line-height: 2.8rem;
            font-weight: 400;
            padding: 0 2rem;

            @media only screen and (min-width: 769px) {
                grid-column: 1/4;
                grid-row: 3/4;

                font-size: 2.2rem;
                line-height: 3rem;
                padding: 0;
            }
        }

        & > img {
            grid-column: 1/7;
            grid-row: 5/6;
            background-color: grey;

            width: 100%;
            height: 200px;

            @media only screen and (min-width: 769px) {
                grid-column: 6/13;
                grid-row: 1/5;
            }
        }
    }
</style>
