<script lang="ts">
    import Arrow from 'components/buttons/arrow.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    export let data: AboutPageQuery['about_page']
</script>

<section>
    <h2 class="heading">{data?.challenge_section_heading}</h2>
    <p class="description">{@html data?.challenge_section_body}</p>
    <iframe
        class="video"
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
        align-content: flex-start;
        justify-content: center;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        grid-template-rows: auto 3.7em auto 5.4em auto;

        @media (min-width: 769px) {
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
