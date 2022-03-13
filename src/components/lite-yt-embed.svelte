<script type="ts">
    export let youtubeVideoId: string
    let showIframe = false
    $: showIframe = !youtubeVideoId
</script>

{#if showIframe}
    <iframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
{:else}
    <div
        on:click={() => {
            showIframe = true
        }}
        class="thumbnail"
        style={`--imageUrlDesktop: url(https://i.ytimg.com/vi_webp/${youtubeVideoId}/maxresdefault.webp);
        --imageUrlMobile: url(https://i.ytimg.com/vi_webp/${youtubeVideoId}/hqdefault.webp
        )`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 111"
            ><g transform="translate(0.428 -0.309)"
                ><path d="M20.784,12.79,0,0V25.58Z" transform="translate(49.738 43.426)" fill="#fff" /><g
                    transform="translate(-0.428 0.309)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"><ellipse cx="56" cy="55.5" rx="56" ry="55.5" stroke="none" /><ellipse cx="56" cy="55.5" rx="55" ry="54.5" fill="none" /></g
                ></g
            ></svg
        >
    </div>
{/if}

<style lang="scss">
    iframe {
        height: 100%;
        width: 100%;
    }
    .thumbnail {
        width: 100%;
        height: 100%;
        background-size: cover;
        display: grid;
        align-items: center;
        justify-content: center;
        background-position: center;
        cursor: pointer;
        background-image: var(--imageUrlMobile);
        @media (min-width: 450px) {
            background-image: var(--imageUrlDesktop);
        }
    }
    svg {
        width: 11.2rem;
        height: 11.1rem;

        &:hover {
            opacity: 0.5;
        }
    }
</style>
