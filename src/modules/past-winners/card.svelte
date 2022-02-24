<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'

    export let data: ArrayElement<PastWinnersPageQuery['past_winners']>
</script>

<article>
    <img src="{getDirectusAssetLink(data?.image?.filename_disk)}/" alt={data?.image?.description} />
    <h2 class="small">{data?.name}</h2>
    <p>{data?.short_description}</p>
</article>

<style lang="scss">
    article {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: auto;
        grid-template-rows: auto 2.8rem auto 1.5rem auto;

        & > img {
            grid-row: 1/2;

            width: 100%;
            aspect-ratio: 374/268;
            object-fit: cover;
            object-position: top;
        }

        & > h2 {
            grid-row: 3/4;
        }

        & > p {
            grid-row: 5/6;
        }
    }
</style>
