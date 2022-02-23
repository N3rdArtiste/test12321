<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'
    export let data: InspirationPageQuery['inspiration_page']
</script>

<section>
    <i>{@html data?.heading}</i>
    <p>{data?.description}</p>
    <img src={getDirectusAssetLink(data?.hero_image?.filename_disk)} alt={data?.hero_image?.description} />
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-rows: auto 4.2rem auto 5.4rem auto auto;
        justify-content: center;

        @media (min-width: 769px) {
            grid-template-rows: auto 6.3rem auto;
            padding: 0 2rem;
        }
        i {
            grid-column: 1/7;
            grid-row: 1/2;

            padding: 0 2rem;

            @media (min-width: 769px) {
                grid-column: 1/6;
                grid-row: 1/2;

                padding: 0;
            }
        }

        p {
            grid-column: 1/7;
            grid-row: 3/4;
            padding: 0 2rem;

            @media (min-width: 769px) {
                grid-column: 1/4;
                grid-row: 3/4;

                padding: 0;
            }
        }

        img {
            grid-column: 1/7;
            grid-row: 5/6;
            background-color: grey;

            width: 100%;

            @media (min-width: 769px) {
                grid-column: 6/13;
                grid-row: 1/5;
            }
        }
    }
</style>
