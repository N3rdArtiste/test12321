<script type="ts">
    import Arrow from 'components/buttons/arrow.svelte'
    import { slide } from 'svelte/transition'
    export let title: string
    let toggle = false
</script>

<section>
    <div class="button-container">
        <Arrow
            label={title}
            onClick={() => {
                toggle = !toggle
            }}
        />
    </div>
    {#if !toggle}
        <div class="bottom-padding" />
    {/if}

    {#if toggle}
        <div class="slot-container" transition:slide>
            <slot />
        </div>
    {/if}
</section>

<style lang="scss">
    section {
        max-width: var(--max-width);
        width: 100%;
        padding: 2rem 2rem 0rem 2rem;
        margin: 0 auto;
    }
    .bottom-padding {
        height: 2rem;
    }
    .button-container {
        width: 100%;
    }
    .slot-container {
        margin-top: 6rem;
        margin-bottom: 2rem;
    }
</style>
