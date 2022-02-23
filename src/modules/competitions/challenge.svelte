<script lang="ts">
    export let data: AboutPageQuery['about_page']
</script>

<section>
    <h2>{data?.challenge_section_heading}</h2>

    <p>{@html data?.challenge_section_body}</p>

    <iframe
        src={`https://www.youtube.com/embed/${data?.challenge_section_youtube_video_id}?controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
</section>

<style lang="scss">
    section {
        display: grid;

        grid-template-rows: min-content 1fr;
        grid-template-columns: 1fr;

        align-items: start;
        align-content: start;

        @media (min-width: 860px) {
            grid-template-columns: minmax(10rem, 2fr) 1fr;
        }

        h2 {
            margin-bottom: var(--grid-gap);
        }

        iframe {
            width: 100%;
            aspect-ratio: 100 / 56.25;

            @media (min-width: 860px) {
                grid-row: 1 / 3;
                grid-column: 1;
            }
        }
    }
</style>
