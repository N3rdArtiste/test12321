<script lang="ts">
    import { getDirectusAssetLink } from 'helpers/string'

    export let brands: AboutPageQuery['brands']
</script>

<div class="container">
    {#each brands ?? [] as logo}
        <div>
            <img src={getDirectusAssetLink(logo?.image?.filename_disk)} alt="" />
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
            background-color: white;
            margin-right: 1rem;
        }
    }

    @media (min-width: 769px) {
        .container {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-auto-rows: auto;
            row-gap: 3.9rem;
            grid-auto-flow: row;

            & img {
                width: 100%;
            }

            & > div {
                margin: 0;
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
