<script type="ts">
    import { goto } from '$app/navigation'

    import Arrow from 'components/buttons/arrow.svelte'

    import Drawer from 'components/drawer.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    export let data: PastWinnerDetailsQuery['past_winners_by_id']
    export let onNextClick: () => void
    export let showNextButton: boolean = false

    const details = {
        year: (data?.year ?? [])[0]?.past_winners_year?.year,
        category: (data?.categories ?? [])[0]?.past_winners_category?.category,
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
        {details.school}
        <span>&nbsp;</span>

        Student/s<br />
        <strong>{details.students}</strong>
    </p>
    <iframe
        class="video"
        src={`https://www.youtube.com/embed/${data?.youtube_video_id}?controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
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
        {#if data?.project_information}
            <hr />
            <Drawer title="Project Information" small noHorizontalPadding>
                {@html data?.project_information}
            </Drawer>
        {/if}

        {#if data?.worksheets?.length}
            <hr />
            <Drawer title="Download Worksheets" small noHorizontalPadding>
                {#each data?.worksheets ?? [] as worksheet}
                    <Arrow
                        small
                        label={worksheet?.past_winners_worksheet?.worksheet?.description ?? ''}
                        onClick={() => {
                            goto(getDirectusAssetLink(worksheet?.past_winners_worksheet?.worksheet?.filename_disk))
                        }}
                    />
                {/each}
            </Drawer>
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
