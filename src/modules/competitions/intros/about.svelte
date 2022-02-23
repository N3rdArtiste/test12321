<script lang="ts">
    export let data: AboutPageQuery['about_page']

    import { goto } from '$app/navigation'

    import ButtonArrow from 'components/buttons/arrow.svelte'

    console.log('--data-88-', data)
</script>

<section>
    <h1>{data?.heading}</h1>

    <ButtonArrow
        label={data?.enter_now_section_CTA_label ?? ''}
        onClick={() => {
            goto('/enter')
        }}
    />

    <!-- TODO: update url 
        <img src={data?.enter_now_section_image?.filename_disk} alt="enter now" /> -->
    <img src="https://yia-cms-qa.dev.eks.cucumbersoftware.com/assets/989719db-6540-4825-ad64-410d74fd670f.jpg" alt="enter now" />
</section>

<style lang="scss">
    section {
        display: grid;
        grid-gap: var(--column-gap);

        grid-template-rows: auto auto;
        grid-template-columns: 1fr minmax(10rem, 2fr);

        align-items: start;

        @media (max-width: 830px) {
            grid-template-rows: auto auto;
            grid-template-columns: 1fr;
        }

        h1 {
            margin-bottom: calc(var(--column-gap) * 2);
            grid-row: 1;
            grid-column: 1 / 3;

            @media (max-width: 830px) {
                grid-row: initial;
                grid-column: initial;
            }
        }

        img {
            width: 100%;
        }

        /* :global(.buttonArrow) {
            grid-row: 2;
            grid-column: 1;
        } */
    }
</style>
