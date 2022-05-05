<script type="ts">
    import { session } from '$app/stores'

    export let data: HeaderAndFooterQuery

    import { getDirectusAssetLink } from 'helpers/string'

    import { navMain } from '_config/constants/menus'
    import Image from 'components/image.svelte'

    let logo = {
        src: `${getDirectusAssetLink($session.directusURL, data.footer?.footer_logo?.filename_disk)}?quality=100&format=webp`,
        alt: data.footer?.footer_logo?.description ?? 'yia logo',
        svgCode: data.footer?.footer_logo?.svg_code,
    }

    let copyrightText = data.footer?.copyright_text ?? ''
    let shortAboutUsText = data.footer?.text ?? ''

    const partners = data?.partners?.map(partner => {
        return {
            href: partner?.link ?? '',
            alt: partner?.image?.description ?? 'partners logo',
            src: `${getDirectusAssetLink($session.directusURL, partner?.image?.filename_disk)}?quality=100&format=webp` ?? '',
            svgCode: partner?.image?.svg_code,
        }
    })

    const sponsors = data?.our_sponsors?.map(sponsor => {
        return {
            href: sponsor?.link ?? '',
            alt: sponsor?.image?.description ?? 'sponsors logo',
            src: `${getDirectusAssetLink($session.directusURL, sponsor?.image?.filename_disk)}?quality=100&format=webp` ?? '',
            svgCode: sponsor?.image?.svg_code,
        }
    })

    const socialMediaIcons = data?.social_media_links?.map(socialMediaIcon => {
        return {
            href: socialMediaIcon?.link ?? '',
            alt: socialMediaIcon?.image?.description ?? 'social media icon',
            src: `${getDirectusAssetLink($session.directusURL, socialMediaIcon?.image?.filename_disk)}?quality=100&format=webp` ?? '',
            svgCode: socialMediaIcon?.image?.svg_code,
        }
    })
</script>

<div class="wrapper">
    <footer>
        <h2>Our sponsors</h2>
        <div>
            {#each sponsors ?? [] as sponsor}
                <a rel="external" target="_blank" aria-label={sponsor.alt} href={sponsor.href}>
                    <Image src={sponsor.src} alt={sponsor.alt} svgCode={sponsor.svgCode} />
                </a>
            {/each}
        </div>

        <h2>Our Partners</h2>
        <div>
            {#each partners ?? [] as partner}
                <a rel="external" target="_blank" aria-label={partner.alt} href={partner.href}>
                    <Image src={partner.src} alt={partner.alt} svgCode={partner.svgCode} />
                </a>
            {/each}
        </div>

        <div>
            <Image src={logo.src} svgCode={logo.svgCode} />
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
                <a rel="external" target="_blank" aria-label={socialMediaIcon.alt} href={socialMediaIcon.href}>
                    <Image src={socialMediaIcon.src} alt={socialMediaIcon.alt} svgCode={socialMediaIcon.svgCode} />
                </a>
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

            grid-template-rows: auto 0 auto 13.1rem auto 0 auto 13.1rem auto 4.63rem auto 2.4rem;
        }

        @media (min-width: 1200px) {
            padding: 17.9rem 2rem 18.6rem 2rem;
        }

        & > h2:nth-of-type(1) {
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
            grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
            gap: 1.6rem;
            @media (min-width: 769px) {
                grid-column: 5/13;
                grid-row: 1/2;
            }

            & > a {
                display: grid;
                justify-content: center;
                align-items: center;
                background-color: var(--color-secondary);
                aspect-ratio: 258/143;
            }
        }

        & > h2:nth-of-type(2) {
            grid-row: 1/2;
            grid-column: 2/8;

            @media (min-width: 769px) {
                font-size: 4rem;
                grid-column: 1/5;
                grid-row: 2/4;
                margin-top: 8rem;
            }
        }
        & > div:nth-of-type(2) {
            grid-column: 2/8;
            display: grid;
            grid-row: 3/4;
            grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
            gap: 1.6rem;
            @media (min-width: 769px) {
                grid-column: 5/13;
                grid-row: 2/4;
                margin-top: 8rem;
            }

            & > a {
                display: grid;
                justify-content: center;
                align-items: center;
                aspect-ratio: 258/143;
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
        & > div:nth-of-type(3) {
            grid-column: 2/8;
            grid-row: 4/5;
            width: 100%;
            max-width: 12.2rem;
            @media (min-width: 769px) {
                grid-row: 4/5;
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

            & > a {
                &:hover {
                    text-decoration: underline;
                }
            }

            @media (min-width: 769px) {
                grid-row: 7/8;
                grid-column: 4/5;
                align-content: flex-start;
            }
        }

        & > div:nth-of-type(4) {
            grid-row: 8/10;
            grid-column: 2/8;
            justify-items: center;

            display: grid;
            grid-auto-flow: column;
            gap: 2.6rem;
            justify-content: end;
            align-items: flex-end;
            grid-auto-columns: 2rem;

            & > a {
                border-bottom: 1px transparent solid;
                &:hover {
                    border-bottom: 1px var(--color-secondary) solid;
                }
            }

            @media (min-width: 769px) {
                justify-content: start;
                align-content: flex-start;
                grid-row: 8/9;
                grid-column: 4/5;
                margin-top: 6rem;
            }
        }

        & > p:nth-of-type(2) {
            grid-row: 13/14;
            grid-column: 2/8;

            @media (min-width: 769px) {
                grid-row: 8/9;
                grid-column: 1/3;
                margin-top: 6rem;
            }
        }
    }
</style>
