<script lang="ts">
    export let imageSrc: string = ''
    export let imageAlt: string = ''

    let lightBoxOpen = false
</script>

{#if imageSrc}
    <img class="image" src={imageSrc} alt={imageAlt} on:click={() => (lightBoxOpen = true)} />

    <div class="lightbox" class:open={lightBoxOpen}>
        <img src={imageSrc} alt={imageAlt} on:click={() => (lightBoxOpen = false)} />
    </div>
{/if}

<style lang="scss">
    .image {
        cursor: pointer;
        width: 100%;

        transition: 0.5s all ease-in-out;

        &:hover {
            transform: scale(1.02);
        }
    }

    .lightbox {
        /* Default to hidden */
        display: none;

        /* Overlay entire screen */
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 3em;
        overflow-x: auto;
        overflow-y: hidden;

        /* Translucent background */
        background: rgba(0, 0, 0, 0.8);

        &.open {
            display: block;
        }

        img {
            height: 90vh;

            @media (min-width: 1366px) {
                width: 100%;
            }
        }
    }
</style>
