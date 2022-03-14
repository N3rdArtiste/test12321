<script lang="ts">
    import { session } from '$app/stores'

    import { getDirectusAssetLink } from 'helpers/string'
    import PinchToZoomImage from 'components/pinch-to-zoom-image.svelte'

    export let data: EnterPageQuery['enter_page']
</script>

<section>
    <h1 class="heading">{data?.timeline_section_heading}</h1>
    <div class="image-container">
        <PinchToZoomImage
            imageSrc={getDirectusAssetLink($session.directusURL, data?.timeline_section_image?.filename_disk ?? '')}
            imageAlt={data?.timeline_section_image?.description ?? undefined}
        />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        align-content: flex-start;
        justify-content: center;
        grid-auto-flow: row;
        grid-template-rows: auto 4.97em auto;
    }

    .heading {
        grid-area: 1 / 2 / 2 / 8;
    }

    .image-container {
        width: 100%;
        grid-area: 3 / 1 / 4 / 9;
        aspect-ratio: 1226/664.33;
    }

    @media (min-width: 1366px) {
        section {
            grid-template-columns: repeat(12, 1fr);
            margin: 0 auto;
            max-width: var(--max-width);
            grid-template-rows: auto 1fr;
            grid-auto-flow: row;
            padding: 0 2rem;
        }

        .heading {
            grid-area: 1 / 1 / 2 / 4;
        }

        .image-container {
            grid-area: 1 / 4 / 3 / 13;
        }
    }
</style>
