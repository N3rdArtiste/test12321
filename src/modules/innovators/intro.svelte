<script lang="ts">
    import { session } from '$app/stores'

    export let data: HomePageQuery['home_page']

    import { getDirectusAssetLink } from 'helpers/string'

    import ButtonArrow from 'components/buttons/arrow.svelte'
    import SvgFile from 'components/svg-file.svelte'
    import { goto } from '$app/navigation'
    import LiteYtEmbed from 'components/lite-yt-embed.svelte'
</script>

<section>
    <div class="video">
        <LiteYtEmbed youtubeVideoId={data?.hero_section_youtube_video_id ?? ''} />
    </div>
    <div>
        <SvgFile src={getDirectusAssetLink($session.directusURL, data?.hero_section_right_side_svg?.filename_disk)} />
    </div>
    <h1>{data?.innovator_section_heading}</h1>
    <b>{@html data?.innovator_section_body}</b>
    <picture>
        <source srcset={`${getDirectusAssetLink($session.directusURL, data?.innovator_section_image?.filename_disk)}?quality=80&format=webp`} media="(min-width: 450px)" />
        <img
            loading="lazy"
            src={`${getDirectusAssetLink($session.directusURL, data?.innovator_section_image?.filename_disk)}?quality=30&format=webp`}
            alt={data?.innovator_section_image?.description ?? 'innovator'}
        />
    </picture>
    <div>
        <ButtonArrow
            label={data?.innovator_section_CTA_label ?? ''}
            onClick={() => {
                goto('/about')
            }}
        />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: 1rem 1fr 1fr 1fr 1fr 1fr 1fr 1rem;
        grid-template-rows: auto 5rem auto 4.2rem auto 6.8rem auto 5.1rem auto;
        column-gap: var(--column-gap);
        max-width: var(--max-width);
        align-content: flex-start;

        @media (min-width: 821px) {
            grid-template-columns: repeat(2, minmax(12.2rem, 1fr)) 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr minmax(12.2rem, 1fr);
            margin: 0 auto;
            grid-template-rows: auto auto 13rem auto 4.6rem auto 7.6rem auto 3rem;
            justify-content: center;
            padding: 0 2rem;
            align-items: flex-start;
        }
        .video {
            grid-column: 1/9;
            grid-row: 1/2;
            width: 100%;
            aspect-ratio: 414/286;
            @media (min-width: 821px) {
                grid-column: 1/10;
                grid-row: 1/3;
                width: 95%;
                aspect-ratio: 1154/797;
            }
        }
        & > div:nth-of-type(2) {
            display: none;

            @media (min-width: 821px) {
                grid-column: 10/13;
                grid-row: 1/3;
                display: block;
                aspect-ratio: 373/795;
                width: 100%;
                &:hover {
                    fill: var(--color-accent);
                }
            }
        }
        & > h1:nth-of-type(1) {
            grid-column: 2/8;
            grid-row: 3/4;

            @media (min-width: 821px) {
                grid-column: 1/6;
                grid-row: 4/5;
            }
        }

        & > b:nth-of-type(1) {
            grid-column: 2/8;
            grid-row: 5/6;
            @media (min-width: 821px) {
                grid-column: 1/5;
                grid-row: 6/7;
            }
        }
        & > div:nth-of-type(3) {
            grid-column: 2/8;
            grid-row: 7/8;
            @media (min-width: 821px) {
                grid-column: 1/6;
                grid-row: 8/9;
            }
        }
        & > picture {
            grid-column: 1/9;
            grid-row: 9/10;

            & > img {
                aspect-ratio: 894/542;

                width: 100%;
            }

            @media (min-width: 821px) {
                grid-column: 6/13;
                grid-row: 4/10;
            }
        }
    }
</style>
