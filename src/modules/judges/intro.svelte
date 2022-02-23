<script lang="ts">
    export let data: AboutPageQuery['about_page']

    import { goto } from '$app/navigation'

    import ArrowButton from 'components/buttons/arrow.svelte'
    import { getDirectusAssetLink } from 'helpers/string'

    let judges = data!.judges_section_judge!.flatMap(i => i?.judge ?? [])
    $: console.log('--data.judges_section_judge--', data?.judges_section_judge)

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
        <b>
            <h1>{data.judges_section_heading}</h1>

            <p>{data.judges_section_body}</p>

            <ArrowButton label={data.judges_section_CTA_label ?? ''} onClick={() => handleClick()} />
        </b>

        <b>
            {#each judges as judge}
                <img src={getDirectusAssetLink(judge.image?.filename_disk)} alt="" on:click={() => handleClick(judge.id)} />
                <div><ArrowButton label={`${judge.name}, ${judge.company}`} onClick={() => handleClick(judge.id)} arrowRight={true} /></div>
            {/each}
        </b>
    </section>
{/if}

<style lang="scss">
    section {
        b {
            grid-column: var(--grid-span-half);

            & > :global(.arrowButton span) {
                font-size: 2.1rem;
            }

            div :global(.arrowButton span) {
                font-size: 1.3rem;
            }

            p {
                padding: 10rem 0;
            }
            img {
                width: 100%;
                cursor: pointer;
                object-fit: cover;
                aspect-ratio: 1/1;
            }
        }
    }
</style>
