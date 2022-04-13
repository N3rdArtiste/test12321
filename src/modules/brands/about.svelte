<script lang="ts">
    export let data: AboutPageQuery['about_page']
    export let brands: AboutPageQuery['brands']
    import BrandsLogoGrid from 'components/brands-logo-grid.svelte'
</script>

{#if data}
    <section>
        <h2 class="heading">{data.brands_section_text}</h2>
        <div class="brand-logos">
            <BrandsLogoGrid {brands} />
        </div>
    </section>
{/if}

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 5.7em auto;
        column-gap: var(--column-gap);
        grid-auto-flow: row;
        justify-content: center;
    }

    .heading {
        grid-area: 1 / 2 / 2 / 8;
    }

    .brand-logos {
        grid-area: 3 / 2 / 4 / 9;
    }

    @media (min-width: 769px) {
        section {
            grid-template-columns: repeat(6, 1fr) minmax(12.2rem, 1fr) repeat(5, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 0 2rem;
        }
        .heading {
            grid-area: 1 / 1 / 2 / 6;
        }

        .brand-logos {
            grid-area: 1 / 7 / 3 / 13;
        }
    }
</style>
