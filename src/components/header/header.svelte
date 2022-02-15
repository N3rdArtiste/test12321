<script type="ts">
    import { getDirectusAssetLink } from 'helpers/directus.helpers'
    import { getInlineSvg } from 'helpers/get-inline-svg'

    export let logo: { src: string; alt: string }
    export let navItems: Array<{ label: string; slug: string }>
    export let topMenuItems: Array<{ label: string }>
    let isOpened = false
    const handleMenuOpenClose = () => {
        isOpened = !isOpened
    }
    const menuOpenCloseIcon = [
        { src: '/images/close.svg', alt: 'close menu' },
        { src: '/images/hamburger_menu.svg', alt: 'open menu' },
    ]
</script>

<header class:isOpened>
    <div>
        {#await getInlineSvg(logo.src) then svgCode}
            {@html svgCode}
        {/await}
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <button on:click={handleMenuOpenClose}>
        <img {...menuOpenCloseIcon[isOpened ? 0 : 1]} />
    </button>
    <nav class:hide={!isOpened}>
        {#each navItems as { label, slug }}
            <a href={slug}>{label}</a>
        {/each}
    </nav>
    <ul class:hide={!isOpened}>
        {#each topMenuItems as { label }, i}
            <li>{label}</li>
            {#if i !== topMenuItems.length - 1}
                <li class="separator" />
            {/if}
        {/each}
    </ul>
</header>

<style lang="scss">
    @import 'header.styles.scss';
</style>
