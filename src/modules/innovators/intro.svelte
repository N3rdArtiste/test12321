<script lang="ts">
    export let data: HomepageQuery['home_page']

    import { getDirectusAssetLink } from 'helpers/string'
    import { getInlineSvg } from 'helpers/markup'

    import ArrowButton from 'components/arrow-button/arrowButton.svelte'
</script>

<section>
    <div>Video goes here</div>
    <div>
        {#await getInlineSvg(getDirectusAssetLink(data?.hero_section_right_side_svg?.filename_disk)) then svgCode}
            {@html svgCode}
        {/await}
    </div>
    <h1>{data?.innovator_section_heading}</h1>
    <p>{@html data?.innovator_section_body}</p>
    <img src={getDirectusAssetLink(data?.innovator_section_image?.filename_disk)} alt={data?.innovator_section_image?.description} />
    <div>
        <ArrowButton
            label={data?.innovator_section_CTA_label ?? ''}
            onClick={() => {
                console.log('clicked')
            }}
        />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 4.2rem auto 6.8rem auto 5.1rem auto 5rem auto 4.2rem auto 6.8rem auto 5.1rem auto;
        column-gap: var(--column-gap);
        @media only screen and (min-width: 48.1rem) {
            grid-template-rows: auto 2rem auto 8.5rem auto auto 13rem auto 14.2rem auto 7.6rem auto 3rem;
            justify-content: center;
            padding: 0 2rem;
        }
        & > h1:nth-of-type(1) {
            grid-column: 1/6;
            grid-row: 1/2;

            font-size: 6rem;
            line-height: 6rem;
            font-weight: 900;
            padding: 0 2rem;

            &:hover {
                color: var(--color-brand);
            }
            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/6;
                grid-row: 1/4;

                font-size: 8rem;
                line-height: 8rem;
            }
        }
        & > p:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 3/4;

            font-size: 2rem;
            line-height: 2.8rem;
            padding: 0 2rem;
            & :global(strong),
            :global(p) {
                display: inline;
            }

            @media only screen and (min-width: 48.1rem) {
                grid-column: 7/13;
                grid-row: 1/2;

                font-size: 2.2rem;
                line-height: 3rem;
                margin-top: 1.5rem;

                & :global(strong),
                :global(p) {
                    display: block;
                }
            }
        }
        & > div:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 5/6;

            width: 100%;
            padding: 0 2rem;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 7/13;
                grid-row: 3/4;
            }
        }
        & > div:nth-of-type(2) {
            grid-column: 1/7;
            grid-row: 7/8;
            height: 100%;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/9;
                grid-row: 5/6;
            }
        }
        & > div:nth-of-type(3) {
            display: none;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 10/13;
                grid-row: 5/7;
                display: block;
                width: 100%;
                &:hover {
                    fill: var(--color-brand);
                }
            }
        }
        & > h1:nth-of-type(2) {
            grid-column: 1/7;
            grid-row: 9/10;

            font-size: 6rem;
            line-height: 6rem;
            font-weight: 900;
            padding: 0 2rem;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/6;
                grid-row: 8/9;

                font-size: 7.5rem;
                line-height: 7.2rem;
            }
        }
        & > p:nth-of-type(2) {
            grid-column: 1/7;
            grid-row: 11/12;

            font-size: 2rem;
            line-height: 2.8rem;
            padding: 0 2rem;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/5;
                grid-row: 10/11;

                font-size: 2.2rem;
                line-height: 3rem;
            }
        }
        & > div:nth-of-type(4) {
            grid-column: 1/7;
            grid-row: 13/14;

            padding: 0 2rem;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/6;
                grid-row: 12/13;
            }
        }
        & > img:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 15/16;

            width: 100%;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 6/13;
                grid-row: 8/15;
            }
        }
        @media only screen and (min-width: 48.1rem) {
            & > * {
                padding: 0 !important;
            }
        }
    }
</style>
