<script type="ts">
    import { goto } from '$app/navigation'
    import { session } from '$app/stores'

    import Arrow from 'components/buttons/arrow.svelte'

    import LiteYtEmbed from 'components/lite-yt-embed.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    export let data: PastWinnerDetailsQuery['past_winners_by_id']
    export let onNextClick: () => void
    export let showNextButton: boolean = false

    const details = {
        year: (data?.year ?? [])[0]?.past_winners_year?.year,
        category: (data?.categories ?? [])
            .map(category => {
                return category?.past_winners_category?.category
            })
            .join(', '),
        school: data?.school_name,
        students: data?.students_name,
    }
</script>

<section>
    <h1 class="name">{data?.name}</h1>
    <p class="details">
        Year<br />
        <strong>{details.year}</strong>
        <span>&nbsp;</span>
        Category<br />
        <strong>{details.category}</strong>
        <span>&nbsp;</span>

        School<br />
        <strong>{details.school}</strong>
        <span>&nbsp;</span>

        Student/s<br />
        <strong>{details.students}</strong>
    </p>
    <div class="video">
        <LiteYtEmbed youtubeVideoId={data?.youtube_video_id ?? ''} />
    </div>
    <div class="next-button">
        {#if showNextButton}
            <Arrow
                label={'Next'}
                onClick={() => {
                    onNextClick()
                }}
            />
        {/if}
    </div>
    <div class="drawers-container">
        {#if data?.short_description}
            <hr />
            <div class="download-button-container">
                <p class="decription-text">Description</p>
                <p>{data.short_description}</p>
            </div>
        {/if}

        {#if data?.worksheets?.length}
            <hr />
            {#each data?.worksheets ?? [] as worksheet}
                <div class="download-button-container">
                    <Arrow
                        small
                        label={'Download Worksheets'}
                        onClick={() => {
                            goto(getDirectusAssetLink($session.directusURL, worksheet?.past_winners_worksheet?.worksheet?.filename_disk))
                        }}
                    />
                </div>
            {/each}
        {/if}
        {#if data?.project_information || data?.worksheets?.length}
            <hr />
        {/if}
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 2.8rem auto 2.4rem auto 2rem auto 2rem auto;
        column-gap: var(--column-gap);
        grid-auto-flow: row;
        align-items: flex-start;
        justify-content: center;
        align-content: flex-start;
    }

    hr {
        height: 0.25rem;
        background: var(--color-secondary);
    }
    .name {
        grid-area: 1 / 2 / 2 / 8;
    }

    .details {
        grid-area: 5 / 2 / 6 / 8;
        & > span {
            display: block;
        }
    }
    .decription-text {
        margin-bottom: 2rem;
    }
    .drawers-container {
        grid-area: 7 / 2 / 8 / 8;
    }

    .video {
        grid-area: 3 / 2 / 4 / 8;
        width: 100%;
        aspect-ratio: 755/521;
    }

    .next-button {
        grid-area: 9 / 2 / 10 / 8;

        display: grid;
        justify-items: end;
    }

    .download-button-container {
        padding: 2rem 0;
    }

    @media (min-width: 769px) {
        section {
            grid-template-columns: repeat(11, 1fr) minmax(12.2rem, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            grid-template-rows: auto 4.8rem auto 9rem auto auto 4.4rem auto;
            padding: 0 2rem;
        }

        .name {
            grid-area: 1 / 1 / 2 / 7;
        }

        .details {
            grid-area: 3 / 1 / 7 / 7;
        }

        .drawers-container {
            grid-area: 8 / 1 / 9 / 13;
        }

        .video {
            grid-area: 1 / 8 / 4 / 13;
        }

        .next-button {
            grid-area: 5 / 8 / 6 / 13;

            display: grid;
            justify-items: end;
        }
    }

    @media (min-width: 1333px) {
        .drawers-container {
            grid-area: 5 / 1 / 6 / 7;
        }
    }
</style>
