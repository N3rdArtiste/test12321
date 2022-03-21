<script lang="ts">
    import { fly } from 'svelte/transition'
    import { session } from '$app/stores'

    import { getDirectusAssetLink } from 'helpers/string'

    export let data: ArrayElement<JudgesPageQuery['judges']>
</script>

<article in:fly={{ y: -200, duration: 300 }}>
    <img
        loading="lazy"
        class="image"
        src={`${getDirectusAssetLink($session.directusURL, data?.image?.filename_disk)}?quality=50&format=webp`}
        alt={data?.image?.description ?? 'judge'}
    />

    <p class="small name"><strong>{`${data?.name}, ${data?.company}`}</strong></p>

    <p class="about-text">{data?.about_text}</p>
</article>

<style lang="scss">
    article {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 2.8rem auto 1rem auto;
        grid-auto-flow: row;
    }

    .about-text {
        grid-area: 5 / 1 / 6 / 2;
    }

    .image {
        grid-area: 1 / 1 / 2 / 2;
        width: 100%;
        aspect-ratio: 598/428;
        object-fit: cover;
    }

    .name {
        grid-area: 3 / 1 / 4 / 2;
    }

    @media (min-width: 1000px) {
        article {
            grid-template-columns: repeat(7, 1fr) minmax(10rem, 1fr);
            grid-template-rows: auto 2.8rem auto auto;
        }

        .image {
            grid-area: 1 / 1 / 5 / 5;
        }

        .name {
            grid-area: 1 / 6 / 2 / 10;
        }

        .about-text {
            grid-area: 3 / 6 / 4 / 10;
        }
    }
</style>
