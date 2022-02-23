<script lang="ts">
    export let data: AboutPageQuery['about_page']

    import { goto } from '$app/navigation'
    import { getDirectusAssetLink } from 'helpers/string'

    import ArrowButton from 'components/buttons/arrow.svelte'
</script>

<section>
    <h1>{data?.heading}</h1>

    <ArrowButton
        label={data?.enter_now_section_CTA_label ?? ''}
        onClick={() => {
            goto('/enter')
        }}
    />

    <img src={getDirectusAssetLink(data?.enter_now_section_image?.filename_disk)} alt="enter now" />
</section>

<style lang="scss">
    section {
        display: grid;

        grid-template-rows: auto auto;
        grid-template-columns: 1fr;

        align-items: start;

        @media (min-width: 830px) {
            grid-template-rows: auto auto;
            grid-template-columns: 1fr minmax(10rem, 2fr);
        }

        h1 {
            margin-bottom: calc(var(--grid-gap) * 2);

            @media (min-width: 830px) {
                grid-row: 1;
                grid-column: 1 / 3;
            }
        }

        img {
            width: 100vw;
            transform: translateX(-3rem);
            margin-right: -6rem;

            @media (min-width: 769px) {
                width: 100%;
                transform: inherit;
                margin-right: inherit;
            }
        }
    }
</style>
