<script lang="ts">
    import LiteYTEmbed from 'components/lite-yt-embed.svelte'
    export let data: AboutPageQuery['about_page']
</script>

<section>
    <h2 class="heading">{data?.challenge_section_heading}</h2>
    <p class="description">{@html data?.challenge_section_body}</p>
    <div class="video">
        <LiteYTEmbed youtubeVideoId={data?.challenge_section_youtube_video_id ?? ''} />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        align-content: flex-start;
        justify-content: center;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        grid-template-rows: auto 3.7em auto 5.4em auto;

        @media (min-width: 769px) {
            grid-template-columns: repeat(5, 1fr) repeat(2, minmax(12.2rem, 1fr)) 1fr minmax(12.2rem, 1fr) repeat(2, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            grid-template-rows: auto 4.4em auto 1fr;
            padding: 0 2rem;
        }
    }

    .heading {
        grid-area: 1 / 2 / 2 / 8;

        @media (min-width: 769px) {
            grid-area: 1 / 9 / 2 / 13;
        }
    }
    .description {
        grid-area: 3 / 2 / 4 / 8;
        & :global(a) {
            font-size: 2rem;
            line-height: 2.8rem;
            @media (min-width: 769px) {
                font-size: 2.2rem;
                line-height: 3rem;
            }
        }
        @media (min-width: 769px) {
            grid-area: 3 / 9 / 4 / 13;
        }
    }
    .video {
        width: 100%;
        aspect-ratio: 414/251;
        grid-area: 5 / 1 / 6 / 9;

        @media (min-width: 769px) {
            grid-area: 1 / 1 / 5 / 8;
            aspect-ratio: 948/575;
        }
    }
</style>
