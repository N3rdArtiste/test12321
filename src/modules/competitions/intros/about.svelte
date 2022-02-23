<script lang="ts">
    import Arrow from 'components/buttons/arrow.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    export let data: AboutPageQuery['about_page']
</script>

<section>
    <h1 class="heading">{data?.heading}</h1>
    <div class="ctaButton">
        <Arrow
            onClick={() => {
                console.log('clicked')
            }}
            label={data?.enter_now_section_CTA_label ?? ''}
        />
    </div>
    <img class="hero-image" src={getDirectusAssetLink(data?.enter_now_section_image?.filename_disk)} alt={data?.enter_now_section_image?.description} />
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 4.8em auto 3.1em auto;
        align-content: flex-start;
        column-gap: var(--column-gap);

        @media (min-width: 769px) {
            justify-content: center;
            grid-template-rows: auto 10.7em auto;
            grid-auto-flow: row;
            padding: 0 2rem;
        }
    }

    .heading {
        grid-area: 1 / 2 / 2 / 8;

        @media (min-width: 769px) {
            grid-area: 1 / 1 / 2 / 12;
        }
    }

    .ctaButton {
        grid-area: 3 / 2 / 4 / 8;

        @media (min-width: 769px) {
            grid-area: 3 / 1 / 4 / 5;
        }
    }

    .hero-image {
        grid-area: 5 / 1 / 6 / 9;
        width: 100%;

        @media (min-width: 769px) {
            grid-area: 3 / 6 / 4 / 13;
        }
    }
</style>
