<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'
    import { getInlineSvg } from 'helpers/markup'

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
    header {
        transition: all 0.3s, height 0s, padding 0s;

        display: grid;
        position: fixed;
        padding: 0 2rem;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        grid-template-rows: auto;
        justify-content: center;
        align-content: flex-start;
        width: 100%;
        background-color: var(--color-white);
        height: var(--header-height);
        align-content: center;
        @media only screen and (min-width: 48.1rem) {
            background-color: var(--color-light-grey);
        }
        & > div {
            grid-column: 1/6;
            grid-row: 1/2;

            width: 10rem;

            &:hover {
                fill: var(--color-brand);
            }
            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/2;
                grid-row: 2/3;

                width: 12.2rem;
            }
        }
        & > button {
            grid-column: 6/7;
            grid-row: 1/2;

            display: grid;
            justify-content: end;
            align-items: center;
            @media only screen and (min-width: 48.1rem) {
                display: none;
            }
        }
        & > nav {
            grid-column: 1/7;
            grid-row: 3/4;

            display: grid;
            grid-auto-flow: row;
            gap: 5.7rem;
            font-weight: 900;
            font-size: 3rem;
            line-height: 4rem;
            @media only screen and (min-width: 48.1rem) {
                grid-column: 2/13;
                grid-row: 2/3;

                grid-auto-flow: column;
                justify-content: end;
                font-size: 1.8rem;
                line-height: 2rem;
                padding-top: 1.2rem;
                & > a {
                    position: relative;
                    top: 0;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        top: -0.2rem;
                        color: var(--color-dark-grey);
                    }
                }
            }
        }
        & > ul {
            grid-column: 1/7;
            grid-row: 5/6;

            display: grid;
            justify-content: start;
            list-style-type: none;
            grid-auto-flow: column;
            column-gap: 1rem;
            align-content: end;
            align-items: center;
            font-size: 1.4rem;
            font-weight: 700;

            @media only screen and (min-width: 48.1rem) {
                grid-column: 1/13;
                grid-row: 1/2;
                justify-content: end;
            }
        }
    }
    .hide {
        display: none;
        @media only screen and (min-width: 48.1rem) {
            display: grid;
        }
    }
    .isOpened {
        height: 100vh;
        background-color: var(--color-brand);
        grid-template-rows: auto 6rem auto auto 1fr;
        padding: 2rem 2rem 5.1rem 2rem;
        @media only screen and (min-width: 48.1rem) {
            height: auto;
            background-color: var(--color-light-grey);
            padding: 2rem;

            grid-template-rows: auto auto;
        }
    }
    .separator {
        border-left: 0.15rem var(--color-black) solid;
        height: 1.5rem;
    }
</style>
