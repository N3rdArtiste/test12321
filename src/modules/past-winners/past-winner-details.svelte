<script type="ts">
    import Drawer from 'components/drawer.svelte'

    export let data: PastWinnerDetailsQuery['past_winners_by_id']

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
    <div class="drawers-container">
        <Drawer title="Project Information">
            {data?.project_information}
        </Drawer>
        <Drawer title="Download Worksheets" />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 2.8em auto 2.4em auto 2em auto;
        column-gap: var(--column-gap);
        grid-auto-flow: row;
        align-items: flex-start;
        justify-content: center;
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

    @media (min-width: 769px) {
        section {
            grid-template-columns: repeat(11, 1fr) minmax(12.2rem, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            grid-template-rows: auto 4.8em auto 4.4em auto;
            padding: 0 2rem;
        }

        .name {
            grid-area: 1 / 1 / 2 / 7;
        }

        .details {
            grid-area: 3 / 1 / 4 / 7;
        }

        .drawers-container {
            grid-area: 5 / 1 / 6 / 13;
        }

        .video {
            grid-area: 1 / 8 / 6 / 13;
        }
    }

    @media (min-width: 1333px) {
        .drawers-container {
            grid-area: 5 / 1 / 6 / 7;
        }
    }
</style>
