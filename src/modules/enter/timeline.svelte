<script lang="ts">
    import { getDirectusAssetLink } from 'helpers/string'
    import Lightbox from 'components/lightbox.svelte'

    export let data: EnterPageQuery['enter_page']
</script>

<section>
    <h1 class="heading">{data?.timeline_section_heading}</h1>

    <Lightbox imageSrc={getDirectusAssetLink(data?.timeline_section_image?.filename_disk ?? '')} imageAlt={data?.timeline_section_image?.description ?? ''} />
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

    :global(.image) {
        width: 100%;
        grid-area: 3 / 1 / 4 / 9;
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

        :global(.image) {
            grid-area: 1 / 4 / 3 / 13;
        }
    }
</style>
