<script lang="ts">
    export let data: HomepageQuery['home_page']

    import { getDirectusAssetLink } from 'helpers/string'
    import { getInlineSvg } from 'helpers/markup'

    import ButtonArrow from 'components/buttons/arrow.svelte'
</script>

<section>
    <iframe
        src={`https://www.youtube.com/embed/${data?.hero_section_youtube_video_id}?controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
    <div>
        {#await getInlineSvg(getDirectusAssetLink(data?.hero_section_right_side_svg?.filename_disk)) then svgCode}
            {@html svgCode}
        {/await}
    </div>
    <h1>{data?.innovator_section_heading}</h1>
    <p>{@html data?.innovator_section_body}</p>
    <img src={getDirectusAssetLink(data?.innovator_section_image?.filename_disk)} alt={data?.innovator_section_image?.description} />
    <div>
        <ButtonArrow
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
        grid-template-rows: auto 5rem auto 4.2rem auto 6.8rem auto 5.1rem auto;
        column-gap: var(--column-gap);
        @media only screen and (min-width: 769px) {
            grid-template-rows: auto auto 13rem auto 14.2rem auto 7.6rem auto 3rem;
            justify-content: center;
            padding: 0 2rem;
        }
        & > iframe:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 1/2;
            width: 100%;
            aspect-ratio: 414/286;
            @media only screen and (min-width: 769px) {
                grid-column: 1/9;
                grid-row: 1/3;
                width: 110%;
                aspect-ratio: 1154/797;
                height: 93%;
            }
        }
        & > div:nth-of-type(1) {
            display: none;

            @media only screen and (min-width: 769px) {
                grid-column: 10/13;
                grid-row: 1/3;
                display: block;
                width: 100%;
                &:hover {
                    fill: var(--color-brand);
                }
            }
        }
        & > h1:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 3/4;

            font-size: 6rem;
            line-height: 6rem;
            font-weight: 900;
            padding: 0 2rem;

            @media only screen and (min-width: 769px) {
                grid-column: 1/6;
                grid-row: 4/5;

                font-size: 7.5rem;
                line-height: 7.2rem;
            }
        }
        & > p:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 5/6;

            font-size: 2rem;
            line-height: 2.8rem;
            padding: 0 2rem;

            @media only screen and (min-width: 769px) {
                grid-column: 1/5;
                grid-row: 6/7;

                font-size: 2.2rem;
                line-height: 3rem;
            }
        }
        & > div:nth-of-type(2) {
            grid-column: 1/7;
            grid-row: 7/8;

            padding: 0 2rem;

            @media only screen and (min-width: 769px) {
                grid-column: 1/6;
                grid-row: 8/9;
            }
        }
        & > img:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 9/10;

            width: 100%;

            @media only screen and (min-width: 769px) {
                grid-column: 6/13;
                grid-row: 4/10;
            }
        }
        @media only screen and (min-width: 769px) {
            & > * {
                padding: 0 !important;
            }
        }
    }
</style>
