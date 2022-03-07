<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'
    export let data: InspirationPageQuery['inspiration_page']
</script>

<section>
    <i>{@html data?.heading}</i>
    <p>{data?.description}</p>
    <img src={`${getDirectusAssetLink(data?.hero_image?.filename_disk)}?quality=80&format=webp`} alt={data?.hero_image?.description} />
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        grid-template-rows: auto 4.2rem auto 5.4rem auto auto;
        column-gap: var(--column-gap);
        justify-content: center;

        @media (min-width: 843px) {
            grid-template-columns: minmax(12.2rem, 1fr) repeat(11, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            grid-template-rows: auto 6.3rem auto;
            padding: 0 2rem;
        }
        & > i {
            grid-column: 2/8;
            grid-row: 1/2;

            @media (min-width: 843px) {
                grid-column: 1/6;
                grid-row: 1/2;

                padding: 0;
            }
        }

        & > p {
            grid-column: 2/8;
            grid-row: 3/4;
            @media (min-width: 843px) {
                grid-column: 1/4;
                grid-row: 3/4;

                padding: 0;
            }
        }

        & > img {
            grid-column: 2/8;
            grid-row: 5/6;
            width: 100%;

            @media (min-width: 843px) {
                grid-column: 6/13;
                grid-row: 1/5;
            }
        }
    }
</style>
