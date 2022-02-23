<script lang="ts">
    export let data: AboutPageQuery['about_page']

    import { goto } from '$app/navigation'

    import ArrowButton from 'components/buttons/arrow.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    let judges = data!.judges_section_judge!.flatMap(i => i?.judge ?? [])

    function handleClick(id?: string | null | undefined) {
        if (id) {
            goto(`/judges/${id}`)
            return
        }

        goto('/judges')
    }
</script>

{#if data}
    <section>
        <h1 class="heading">{data.judges_section_heading}</h1>

        <p class="description">{data.judges_section_body}</p>
        <div class="view-all-judges-button">
            <ArrowButton label={data.judges_section_CTA_label ?? ''} onClick={() => handleClick()} />
        </div>
        <img class="judge-image" src={getDirectusAssetLink(judges[0].image?.filename_disk)} alt="" on:click={() => handleClick(judges[0].id)} />

        <div class="judge-name">
            <p class="small">{judges[0].name}, {judges[0].company}</p>
            <ArrowButton label={''} onClick={() => handleClick(judges[0].id)} />
        </div>
    </section>
{/if}

<style lang="scss">
    section {
        display: grid;
        align-content: flex-start;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        grid-template-rows: auto 6.2rem auto 4.2rem auto 3.1rem auto 2.4rem auto;
        justify-content: center;
    }
    .description {
        grid-area: 3 / 2 / 4 / 8;
    }
    .view-all-judges-button {
        grid-area: 5 / 2 / 6 / 8;
    }
    .judge-image {
        grid-area: 7 / 2 / 8 / 8;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 948/575;
    }
    .judge-name {
        grid-area: 9 / 2 / 10 / 8;

        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
    }
    .heading {
        grid-area: 1 / 2 / 2 / 8;
    }

    @media (min-width: 769px) {
        section {
            grid-template-rows: auto 5rem auto 6.5rem 1fr 3.9rem auto;
            grid-auto-flow: row;
            padding: 0 2rem;
        }

        .heading {
            grid-area: 1 / 1 / 2 / 6;
        }

        .description {
            grid-area: 3 / 1 / 4 / 6;
        }

        .judge-image {
            grid-area: 1 / 7 / 6 / 13;
        }

        .view-all-judges-button {
            grid-area: 5 / 1 / 6 / 6;
        }

        .judge-name {
            grid-area: 7 / 7 / 8 / 13;
        }
    }
</style>
