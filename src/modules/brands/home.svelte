<script type="ts">
    export let data: HomePageQuery
    import BrandsLogoGrid from 'components/brands-logo-grid.svelte'
    import Arrow from 'components/buttons/arrow.svelte'
</script>

<section>
    <h1 class="heading">{data.home_page?.brands_section_heading}</h1>
    <p class="subtext">{data.home_page?.brands_section_description}</p>
    <div class="brands-container">
        <BrandsLogoGrid brands={data.brands} />
    </div>
    <div class="button-container">
        <Arrow label={data.home_page?.brands_section_CTA_label ?? ''} onClick={() => {}} />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 4.2rem auto 5.4rem auto 5.1rem auto;
        column-gap: var(--column-gap);
        grid-auto-flow: row;
        justify-content: center;
        align-items: flex-start;
    }

    .heading {
        grid-area: 1 / 2 / 2 / 8;
    }

    .subtext {
        grid-area: 3 / 2 / 4 / 8;
    }

    .brands-container {
        grid-area: 5 / 2 / 6 / 9;
    }

    .button-container {
        grid-area: 7 / 2 / 8 / 8;
    }

    @media (min-width: 769px) {
        section {
            grid-template-rows: auto 5.8em auto 7.8em auto 1fr;
            grid-auto-flow: row;
            padding: 0 2rem;
            grid-template-columns: repeat(12, 1fr);
            margin: 0 auto;
            max-width: var(--max-width);
        }

        .subtext {
            grid-area: 3 / 1 / 4 / 5;
        }

        .heading {
            grid-area: 1 / 1 / 2 / 5;
        }

        .brands-container {
            grid-area: 1 / 6 / 7 / 13;
            width: 100%;
        }

        .button-container {
            grid-area: 5 / 1 / 6 / 6;
        }
    }
</style>
