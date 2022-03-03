<script type="ts">
    export let data: HeaderAndFooterQuery

    import { getDirectusAssetLink } from 'helpers/string'

    import ButtonArrow from 'components/buttons/arrow.svelte'

    import { navMain } from '_config/constants/menus'
    import SvgFile from 'components/svg-file.svelte'
    import { onDestroy, onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let partners: StandardData
    let sponsors: StandardData
    let socialMediaIcons: StandardData

    let logo = {
        src: getDirectusAssetLink(data.footer?.footer_logo?.filename_disk),
        alt: data.footer?.footer_logo?.description ?? '',
    }

    let copyrightText = data.footer?.copyright_text ?? ''
    let shortAboutUsText = data.footer?.text ?? ''

    $: partners = data?.partners?.map(partner => {
        return {
            href: partner?.link ?? '',
            alt: partner?.image?.description ?? '',
            src: getDirectusAssetLink(partner?.image?.filename_disk) ?? '',
        }
    })

    $: sponsors = data?.our_sponsors?.map(sponsor => {
        return {
            href: sponsor?.link ?? '',
            alt: sponsor?.image?.description ?? '',
            src: getDirectusAssetLink(sponsor?.image?.filename_disk) ?? '',
        }
    })

    $: socialMediaIcons = data?.social_media_links?.map(socialMediaIcon => {
        return {
            href: socialMediaIcon?.link ?? '',
            alt: socialMediaIcon?.image?.description ?? '',
            src: getDirectusAssetLink(socialMediaIcon?.image?.filename_disk) ?? '',
        }
    })

    let sponsorsContainer: HTMLDivElement
    let showLeftArrow: boolean
    let showRightArrow: boolean = true

    const scrollSponsors = (left: boolean = true) => {
        if (left) {
            sponsorsContainer.scrollTo({
                left: sponsorsContainer.scrollWidth,
                behavior: 'smooth',
            })
        } else {
            sponsorsContainer.scrollTo({
                left: 0,
                behavior: 'smooth',
            })
        }
    }
    const eventListenerHandler = (e: Event) => {
        const element = e.target as HTMLDivElement
        showLeftArrow = element.scrollLeft !== 0
        showRightArrow = element.offsetWidth + element.scrollLeft < element.scrollWidth
    }
</script>

<div class="wrapper">
    <footer>
        <h2>Our sponsors</h2>

        <div on:scroll={eventListenerHandler} bind:this={sponsorsContainer}>
            {#each sponsors ?? [] as sponsor}
                <a rel="external" target="_blank" href={sponsor.href}> <img src={sponsor.src} alt={sponsor.alt} /> </a>
            {/each}
        </div>

        {#if showLeftArrow}
            <i class="leftArrowButton" transition:fade>
                <ButtonArrow onClick={() => scrollSponsors(false)} accentHover={false} />
            </i>
        {/if}

        {#if showRightArrow}
            <i class="rightArrowButton" transition:fade>
                <ButtonArrow onClick={scrollSponsors} accentHover={false} />
            </i>
        {/if}

        <div>
            <SvgFile src={logo.src} />
        </div>

        <p class="small">
            {shortAboutUsText}
        </p>

        <nav>
            {#each navMain as navItem}
                <a class="big" sveltekit:prefetch href={navItem.slug}>
                    {navItem.label}
                </a>
            {/each}
        </nav>

        <div>
            {#each socialMediaIcons ?? [] as socialMediaIcon}
                <a rel="external" target="_blank" href={socialMediaIcon.href}> <img src={socialMediaIcon.src} alt={socialMediaIcon.alt} /> </a>
            {/each}
        </div>

        <div>
            {#each partners ?? [] as partner}
                <a rel="external" target="_blank" href={partner.href}> <img src={partner.src} alt={partner.alt} /> </a>
            {/each}
        </div>

        <p class="smaller">
            {copyrightText}
        </p>
    </footer>
</div>

<style lang="scss">
    .wrapper {
        width: 100%;
        background-color: var(--color-accent);
    }
    footer {
        display: grid;
        transition: all 0.3s;
        justify-content: center;
        padding: 5.1rem 0 4.1rem 0;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 3.1rem auto 6.1rem auto 3rem auto 3.3rem auto 3rem auto 5rem auto;
        column-gap: var(--column-gap);

        @media (min-width: 769px) {
            grid-template-columns: repeat(1, minmax(12.2rem, 1fr)) repeat(2, 1fr) repeat(2, minmax(9.2rem, 1fr)) repeat(5, 1fr) repeat(2, minmax(10.2rem, 1fr));
            max-width: var(--max-width);
            margin: 0 auto;

            padding: 9rem 2rem 9rem 2rem;

            grid-template-rows: auto 3.9rem auto 13.1rem auto 4.63rem auto 2.4rem;
        }

        @media (min-width: 1200px) {
            padding: 17.9rem 2rem 18.6rem 2rem;
        }

        & > h2 {
            grid-row: 1/2;
            grid-column: 2/8;

            @media (min-width: 769px) {
                font-size: 4rem;
                grid-column: 1/5;
                grid-row: 1/2;
            }
        }
        & > div:nth-of-type(1) {
            grid-column: 2/8;
            display: grid;
            grid-row: 3/4;
            grid-auto-columns: 26rem;
            grid-auto-flow: column;
            gap: 1.6rem;
            overflow-x: scroll;
            scroll-behavior: smooth;
            @media (min-width: 769px) {
                grid-column: 5/13;
                grid-row: 1/2;
            }

            & > a {
                display: grid;
                justify-content: center;
                align-items: center;
                background-color: var(--color-secondary);
            }
        }

        & .leftArrowButton {
            display: none;

            @media (min-width: 769px) {
                display: block;
                grid-row: 3/4;
                grid-column: 5/6;
                text-align: -webkit-right;
                transform: rotate(-180deg);
            }
        }
        & .rightArrowButton {
            display: none;

            @media (min-width: 769px) {
                display: block;
                grid-row: 3/4;
                grid-column: 12/13;
                text-align: -webkit-right;
            }
        }
        & > div:nth-of-type(2) {
            grid-column: 2/8;
            grid-row: 5/6;
            width: 100%;
            max-width: 12.2rem;
            @media (min-width: 769px) {
                grid-row: 5/6;
                grid-column: 1/2;
            }
        }
        & > p:nth-of-type(1) {
            grid-row: 7/8;
            grid-column: 2/8;

            @media (min-width: 769px) {
                grid-row: 7/8;
                grid-column: 1/3;
            }
        }
        & > nav {
            grid-row: 9/10;
            grid-column: 2/6;
            display: grid;
            grid-auto-flow: row;
            gap: 1rem;

            @media (min-width: 769px) {
                grid-row: 7/8;
                grid-column: 4/5;
                align-content: flex-start;
            }
        }

        & > div:nth-of-type(3) {
            grid-row: 9/10;
            grid-column: 2/8;

            display: grid;
            grid-auto-flow: column;
            gap: 2.6rem;
            justify-content: end;
            align-items: flex-end;
            grid-auto-columns: 1.6rem;

            @media (min-width: 769px) {
                justify-content: start;
                align-content: flex-start;
                grid-row: 9/10;
                grid-column: 4/5;
            }
        }
        & > div:nth-of-type(4) {
            display: grid;
            grid-template-columns: repeat(2, minmax(9.4rem, 12.4rem));
            grid-auto-rows: 4.7rem;
            align-items: center;
            justify-content: center;
            justify-items: center;
            grid-row: 11/12;
            grid-column: 2/8;
            gap: 1.5rem;

            @media (min-width: 769px) {
                grid-row: 7/8;
                grid-column: 10/13;
            }

            & > a {
                & > img {
                    max-width: 100%;
                }
            }
        }
        & > p:nth-of-type(2) {
            grid-row: 13/14;
            grid-column: 2/8;

            @media (min-width: 769px) {
                grid-row: 9/10;
                grid-column: 1/3;
            }
        }
    }
</style>
