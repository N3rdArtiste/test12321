<script lang="ts">
    export let data: AboutPageQuery['about_page']

    import { goto } from '$app/navigation'
    import { session } from '$app/stores'

    import ArrowButton from 'components/buttons/arrow.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    let judges = data!.judges_section_judge!.flatMap(i => i?.judge ?? [])

    function handleClick(id?: string | null | undefined) {
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
        <div class="judge-container">
            <picture>
                <source srcset={`${getDirectusAssetLink($session.directusURL, judges[0].image?.filename_disk)}?quality=100&format=webp`} media="(min-width: 769px)" />
                <img
                    loading="lazy"
                    src={`${getDirectusAssetLink($session.directusURL, judges[0].image?.filename_disk)}?quality=50&format=webp`}
                    alt={judges[0].image?.description ?? 'judge'}
                    on:click={() => handleClick(judges[0].id)}
                />
            </picture>

            <div class="judge-name">
                <p class="small"><strong>{judges[0].name}, {judges[0].company}</strong></p>
                <ArrowButton label={''} onClick={() => handleClick(judges[0].id)} />
            </div>
        </div>
    </section>
{/if}

<style lang="scss">
    section {
        display: grid;
        align-content: flex-start;
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        column-gap: var(--column-gap);
        grid-template-rows: auto 6.2rem auto 4.2rem auto 3.1rem auto;
        justify-content: center;
    }
    .description {
        grid-area: 3 / 2 / 4 / 8;
    }
    .view-all-judges-button {
        grid-area: 5 / 2 / 6 / 8;
    }
    .judge-container {
        grid-area: 7 / 2 / 8 / 8;
        & > picture > img {
            object-fit: cover;
            margin-bottom: 2.4rem;
            width: 100%;
            aspect-ratio: 948/575;
        }
    }
    .judge-name {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
    }
    .heading {
        grid-area: 1 / 2 / 2 / 8;
    }

    @media (min-width: 990px) {
        section {
            grid-template-columns: repeat(12, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            grid-template-rows: auto 5rem auto 6.5rem 1fr;
            grid-auto-flow: row;
            padding: 0 2rem;
        }

        .heading {
            grid-area: 1 / 1 / 2 / 5;
        }

        .description {
            grid-area: 3 / 1 / 4 / 5;
        }

        .judge-container {
            grid-area: 1 / 6 / 6 / 13;
        }

        .view-all-judges-button {
            grid-area: 5 / 1 / 6 / 5;
        }
    }
</style>
