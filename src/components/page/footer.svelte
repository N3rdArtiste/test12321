<script type="ts">
    export let logo: { src: string; alt: string }
    export let navItems: Array<{ label: string; slug: string }>
    export let copyrightText: string
    export let shortAboutUsText: string
    export let partners: StandardData
    export let sponsors: StandardData
    export let socialMediaIcons: StandardData

    import { getInlineSvg } from 'helpers/markup'

    let sponsorsContainer: HTMLDivElement

    const scrollSponsors = () => {
        sponsorsContainer.scrollTo({
            left: sponsorsContainer.scrollWidth,
            behavior: 'smooth',
        })
        console.log(sponsorsContainer, 'sponsorsContainer')
    }
</script>

<footer>
    <h2>Our sponsors</h2>
    <div bind:this={sponsorsContainer}>
        {#each sponsors ?? [] as sponsor}
            <a href="#"> <img src={sponsor.src} alt={sponsor.alt} /> </a>
        {/each}
    </div>
    <button on:click={scrollSponsors}>
        <img src="/images/right_arrow.svg" alt="right arrow icon" />
    </button>
    <div>
        {#await getInlineSvg(logo.src) then svgCode}
            {@html svgCode}
        {/await}
    </div>
    <p>
        {shortAboutUsText}
    </p>
    <nav>
        {#each navItems as navItem}
            <a href={navItem.slug}>
                {navItem.label}
            </a>
        {/each}
    </nav>
    <div>
        {#each socialMediaIcons ?? [] as socialMediaIcon}
            <a href="#"> <img src={socialMediaIcon.src} alt={socialMediaIcon.alt} /> </a>
        {/each}
    </div>
    <div>
        {#each partners ?? [] as partner}
            <a href="#"> <img src={partner.src} alt={partner.alt} /> </a>
        {/each}
    </div>
    <p>
        {copyrightText}
    </p>
</footer>

<style lang="scss">
    footer {
        display: grid;
        background-color: var(--color-brand);
        transition: all 0.3s;
        justify-content: center;
        padding: 5.1rem 0 4.1rem 0;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 3.1rem auto 6.1rem auto 3rem auto 3.3rem auto 3rem auto 5rem auto;
        column-gap: var(--column-gap);
        @media only screen and (min-width: 48.1rem) {
            padding: 9rem 2rem 9rem 2rem;

            grid-template-rows: auto 3.9rem auto 13.1rem auto 4.63rem auto 2.4rem;
        }
        @media only screen and (min-width: 102.5rem) {
            padding: 17.9rem 2rem 18.6rem 2rem;
        }
        & > h2 {
            font-weight: 900;
            font-size: 3rem;
            grid-row: 1/2;
            grid-column: 1/7;
            @media only screen and (min-width: 48.1rem) {
                font-size: 4rem;
                grid-column: 1/5;
                grid-row: 1/2;
            }
        }
        & > div:nth-of-type(1) {
            grid-column: 1/7;
            display: grid;
            grid-row: 3/4;
            grid-auto-columns: 26rem;
            grid-auto-flow: column;
            gap: 1.6rem;
            overflow-x: scroll;
            @media only screen and (min-width: 48.1rem) {
                grid-column: 5/13;
                grid-row: 1/2;
            }
            & > a {
                display: grid;
                justify-content: center;
                align-items: center;
                background-color: var(--color-black);
            }
        }
        & > button {
            display: none;
            @media only screen and (min-width: 48.1rem) {
                display: block;
                grid-row: 3/4;
                grid-column: 12/13;
                text-align: end;
            }
        }
        & > div:nth-of-type(2) {
            grid-column: 1/7;
            grid-row: 5/6;
            width: 100%;
            @media only screen and (min-width: 48.1rem) {
                grid-row: 5/6;
                grid-column: 1/2;
            }
        }
        & > p:nth-of-type(1) {
            font-weight: 500;
            font-size: 1.6rem;
            grid-row: 7/8;
            grid-column: 1/7;
            @media only screen and (min-width: 48.1rem) {
                grid-row: 7/8;
                grid-column: 1/3;
            }
        }
        & > nav {
            grid-row: 9/10;
            grid-column: 1/5;
            display: grid;
            grid-auto-flow: row;
            gap: 1.6rem;
            @media only screen and (min-width: 48.1rem) {
                grid-row: 7/8;
                grid-column: 4/5;
                align-content: flex-start;
            }
            & > a {
                font-size: 1.6rem;
                line-height: 1.6rem;
                font-weight: 900;
            }
        }

        & > div:nth-of-type(3) {
            grid-row: 9/10;
            grid-column: 5/7;

            display: grid;
            grid-auto-flow: column;
            gap: 2.6rem;
            justify-content: end;
            align-items: flex-end;
            grid-auto-columns: 1.6rem;
            @media only screen and (min-width: 48.1rem) {
                justify-content: start;
                align-content: flex-start;
                grid-row: 9/10;
                grid-column: 4/5;
            }
        }
        & > div:nth-of-type(4) {
            display: grid;
            grid-template-columns: minmax(9.4rem, 18.4rem) minmax(9.4rem, 18.4rem);
            grid-auto-rows: 6.7rem;
            align-items: center;
            justify-content: center;
            justify-items: center;
            grid-row: 11/12;
            grid-column: 1/7;
            @media only screen and (min-width: 48.1rem) {
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
            font-weight: 500;
            font-size: 1.4rem;
            grid-row: 13/14;
            grid-column: 1/7;
            @media only screen and (min-width: 48.1rem) {
                grid-row: 9/10;
                grid-column: 1/3;
            }
        }
        & > * {
            padding-left: 2rem;
            padding-right: 2rem;
            @media only screen and (min-width: 48.1rem) {
                padding-left: 0;
                padding-right: 0;
            }
        }
    }
</style>
