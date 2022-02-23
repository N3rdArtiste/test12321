<script type="ts">
    export let data: HeaderAndFooterQuery

    import { navMain, navAuth, menuToggleIcons } from '_config/constants/menus'
    import { getDirectusAssetLink } from 'helpers/string'
    import { navDrawerOpen } from 'stores/ui'
    import SvgFile from 'components/svg-file.svelte'

    const handleMenuOpenClose = () => {
        $navDrawerOpen = !$navDrawerOpen
    }

    let logo = { src: getDirectusAssetLink(data.header?.logo?.filename_disk), alt: data.header?.logo?.description ?? '' }
</script>

<header class:isOpened={$navDrawerOpen}>
    <a sveltekit:prefetch href="/">
        <SvgFile src={logo.src} />
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <button on:click={handleMenuOpenClose}>
        <img {...menuToggleIcons[+!$navDrawerOpen]} />
    </button>

    <nav class:hide={!$navDrawerOpen}>
        {#each navMain as { label, slug }}
            <a class="bigger" sveltekit:prefetch href={slug} on:click={() => ($navDrawerOpen = false)}>{label}</a>
        {/each}
    </nav>

    <ul class:hide={!$navDrawerOpen}>
        {#each navAuth as { label }, i}
            <li class="small">{label}</li>
            {#if i !== navAuth.length - 1}
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
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        grid-template-rows: auto;
        justify-content: center;
        align-content: flex-start;
        width: 100%;
        height: var(--header-height);
        align-content: center;
        z-index: 99;

        background-color: var(--color-primary);

        @media (min-width: 769px) {
            padding: 0 2rem;
        }
        & > a {
            grid-column: 2/7;
            grid-row: 1/2;

            width: 10rem;

            @media (min-width: 769px) {
                grid-column: 1/2;
                grid-row: 2/3;
                &:hover {
                    fill: var(--color-accent);
                }
                width: 12.2rem;
            }
        }

        & > button {
            grid-column: 7/8;
            grid-row: 1/2;

            display: grid;
            justify-content: end;
            align-items: center;

            @media (min-width: 769px) {
                display: none;
            }
        }

        & > nav {
            grid-column: 2/8;
            grid-row: 3/4;

            display: grid;
            grid-auto-flow: row;
            gap: 5.7rem;

            @media (min-width: 769px) {
                grid-column: 2/13;
                grid-row: 2/3;

                grid-auto-flow: column;
                justify-content: end;
                padding-top: 1.2rem;
                & > a {
                    position: relative;
                    top: 0;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        top: -0.2rem;
                        color: var(--color-tertiary);
                    }
                }
            }
        }

        & > ul {
            grid-column: 2/8;
            grid-row: 5/6;

            display: grid;
            justify-content: start;
            list-style-type: none;
            grid-auto-flow: column;
            column-gap: 1rem;
            align-content: end;
            align-items: center;

            @media (min-width: 769px) {
                grid-column: 1/13;
                grid-row: 1/2;
                justify-content: end;
            }
        }
    }

    .hide {
        display: none;

        @media (min-width: 769px) {
            display: grid;
        }
    }

    .isOpened {
        height: 100vh;
        background-color: var(--color-accent);
        grid-template-rows: auto 6rem auto auto 1fr;
        padding: 2rem 0rem 5.1rem 0rem;

        @media (min-width: 769px) {
            height: auto;
            background-color: var(--color-primary);
            padding: 2rem;

            grid-template-rows: auto auto;
        }
    }

    .separator {
        border-left: 0.15rem var(--color-secondary) solid;
        height: 1.5rem;
    }
</style>
