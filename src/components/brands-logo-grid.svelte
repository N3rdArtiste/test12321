<script lang="ts">
    import { session } from '$app/stores'
    import Image from 'components/image.svelte'

    import { getDirectusAssetLink } from 'helpers/string'

    export let brands: AboutPageQuery['brands'] | HomePageQuery['brands']
</script>

<div class="container">
    {#each brands ?? [] as logo}
        <div>
            <div class="image-container">
                <Image src={`${getDirectusAssetLink($session.directusURL, logo?.image?.filename_disk)}?quality=100&format=webp`} alt={logo?.image?.description ?? 'brand logo'} />
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .container {
        display: grid;
        column-gap: var(--column-gap);
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        overflow: scroll;
        max-width: 100vw;
        & > div {
            display: grid;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            & .image-container {
                width: 20rem;
                background-color: var(--color-grey);
            }
        }

        & :global(img) {
            mix-blend-mode: multiply;
            // width: 100%;
        }
    }

    @media (min-width: 769px) {
        .container {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-auto-rows: auto;
            row-gap: 1.9rem;
            grid-auto-flow: row;

            & > div {
                margin: 0;
                background-color: var(--color-grey);
                & .image-container {
                    width: auto;
                }
            }

            & > div:nth-child(5n-4) {
                grid-area: 1 / 1 / 2 / 4;
            }

            & > div:nth-of-type(5n-3) {
                grid-area: 1 / 4 / 3 / 6;
            }

            & > div:nth-of-type(5n-2) {
                grid-area: 1 / 6 / 3 / 8;
            }

            & > div:nth-of-type(5n-1) {
                grid-area: 4 / 1 / 6 / 5;
            }

            & > div:nth-of-type(5n) {
                grid-area: 4 / 5 / 5 / 8;
            }
        }
    }
</style>
