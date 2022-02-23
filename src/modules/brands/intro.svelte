<script lang="ts">
    export let data: AboutPageQuery['about_page']
    export let brands: AboutPageQuery['brands']

    import { getDirectusAssetLink } from 'helpers/string'

    let images = brands?.flatMap(i => i?.image ?? []).splice(0, 5)
</script>

{#if data}
    <section>
        <h2>{data.brands_section_text}</h2>

        <b>
            {#if images}
                {#each images as item}
                    <img src={getDirectusAssetLink(item.filename_disk)} alt="" />
                {/each}
            {/if}
        </b>
    </section>
{/if}

<style lang="scss">
    section {
        h2 {
            grid-column: var(--grid-span-half);
        }
        b {
            grid-column: var(--grid-span-half);

            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));

            /* prettier-ignore */
            img {
                width: 100%;
                /* aspect-ratio: 374/258; */
                /* object-fit: cover; */

                &:nth-child(1){ grid-row: 1; grid-column: 1; }
                &:nth-child(2){ grid-row: 2; grid-column: 2; }
                &:nth-child(3){ grid-row: 3; grid-column: 3; }
                &:nth-child(4){ grid-row: 4; grid-column: 4; }
                &:nth-child(5){ grid-row: 5; grid-column: 5; }
            }
        }
    }
</style>
