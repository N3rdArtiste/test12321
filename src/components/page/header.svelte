<script type="ts">
    export let data: HeaderAndFooterQuery

    import { navMain, menuToggleIcons } from '_config/constants/menus'
    import { getDirectusAssetLink } from 'helpers/string'
    import { navDrawerOpen } from 'stores/ui'

    import SvgFile from 'components/svg-file.svelte'
    import AuthNav from 'components/page/nav-auth.svelte'

    const handleMenuOpenClose = () => {
        $navDrawerOpen = !$navDrawerOpen
    }

    let logo = { src: getDirectusAssetLink(data.header?.logo?.filename_disk), alt: data.header?.logo?.description ?? '' }
</script>

<header class:isOpened={$navDrawerOpen}>
    <a sveltekit:prefetch href="/" class="logo">
        <SvgFile src={logo.src} />
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <button on:click={handleMenuOpenClose} class="burgerMenu">
        <img {...menuToggleIcons[+!$navDrawerOpen]} />
    </button>

    <nav class:hide={!$navDrawerOpen}>
        {#each navMain as { label, slug }}
            <a class="bigger" sveltekit:prefetch href={slug} on:click={() => ($navDrawerOpen = false)}>{label}</a>
        {/each}
    </nav>

    <AuthNav />
</header>

<style lang="scss">
    header {
        transition: all 0.3s, background 0s, height 0s, padding 0s;

        position: sticky;
        top: 0;
        left: 0;

        width: calc(100% + 15rem);
        height: calc(var(--header-height) - 5rem);
        transform: translateX(-4rem);
        padding: 0 5rem;
        z-index: 99;

        background-color: var(--color-primary);

        .logo {
            display: block;
            width: fit-content;
            height: 6rem;
            transform: translateY(2rem);

            :global(svg) {
                width: 12.2rem;

                @media (min-width: 769px) {
                    width: 10rem;
                }
            }
        }

        nav {
            width: fit-content;
            z-index: 1;

            a {
                display: inline-block;
                font-weight: 700;
                font-size: 1.4rem;

                padding: 1.5rem 2rem;

                transition: all 0.3s ease-in-out;
            }
        }

        .burgerMenu {
            display: initial;
            position: absolute;
            top: 4rem;
            right: 12rem;

            @media (min-width: 769px) {
                display: none;
            }
        }

        &:not(.isOpened) {
            nav {
                position: absolute;
                top: 3.5rem;
                right: 12rem;
                display: none;

                a:hover {
                    transform: translateY(-0.2rem);
                    color: var(--color-tertiary);
                }

                @media (min-width: 769px) {
                    display: block;
                }
            }

            .logo {
                &:hover {
                    fill: var(--color-accent);
                }
            }
        }

        &.isOpened {
            display: grid;
            position: fixed;
            transform: translateX(-4rem);
            height: 100vh;
            background-color: var(--color-accent);

            .logo {
                transform: translate(3rem, 2rem);
            }

            nav {
                a {
                    display: block;
                    font-weight: 900;
                    font-size: 3rem;
                    line-height: 4rem;
                    padding: 2rem;
                }
            }

            .burgerMenu {
                right: 15.5rem;
            }

            :global(.authNav) {
                top: initial;
                right: initial;
                left: 4rem;
                bottom: 1.8rem;
            }
        }
    }
</style>
