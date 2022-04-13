<script lang="ts">
    import LiteYtEmbed from 'components/lite-yt-embed.svelte'

    export let data: EnterPageQuery['enter_page']
</script>

<section>
    <h1 class="heading">{data?.heading}</h1>
    <div class="subtitle">
        {@html data?.key_dates_title}
    </div>
    <div class="key-dates-container">
        {#each data?.key_dates ?? [] as dateInfo}
            <div>
                <p>{dateInfo?.dates?.date}</p>
                <p>{dateInfo?.dates?.subtext}</p>
            </div>
        {/each}
    </div>
    <div class="video">
        <LiteYtEmbed youtubeVideoId={data?.key_dates_youtube_video_id ?? ''} />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        align-content: flex-start;
        justify-content: center;
        grid-template-rows: auto 4.2em auto 3.7em auto 5.4em auto;
        grid-auto-flow: row;
    }

    .heading {
        grid-area: 1 / 2 / 2 / 8;
    }

    .key-dates-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: 1.9em 0px;
        grid-auto-flow: row;
        grid-area: 5 / 2 / 6 / 8;
    }

    .subtitle {
        grid-area: 3 / 2 / 4 / 8;
    }

    .video {
        grid-area: 7 / 1 / 8 / 9;
        width: 100%;
        aspect-ratio: 414/286;
    }

    @media (min-width: 630px) {
        section {
            grid-template-columns: repeat(6, 1fr) minmax(12.2rem, 1fr) repeat(5, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            grid-template-rows: auto 10.3em auto 5em auto 1fr;
            padding: 0 2rem;
        }

        .heading {
            grid-area: 1 / 1 / 2 / 6;
        }

        .key-dates-container {
            grid-auto-flow: row;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            gap: 3.5em 1rem;
            grid-area: 5 / 1 / 6 / 13;
        }

        .subtitle {
            grid-area: 3 / 1 / 4 / 6;
        }

        .video {
            aspect-ratio: 755/521;
            grid-area: 1 / 7 / 4 / 13;
        }
    }

    @media (min-width: 930px) {
        .key-dates-container {
            grid-auto-flow: row;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            gap: 3.5em 1rem;
            grid-area: 5 / 1 / 6 / 7;
        }
        .video {
            aspect-ratio: 755/521;
            grid-area: 1 / 7 / 7 / 13;
        }
    }
</style>
