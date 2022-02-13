<script type="ts">
    export let logo: { src: string; alt: string }
    export let navItems: Array<{ label: string; slug: string }>
    export let copyrightText: string
    export let shortAboutUsText: string
    export let partners: Array<{ src: string; alt: string; href: string }> | undefined
    export let sponsors: Array<{ src: string; alt: string; href: string }> | undefined
    export let socialMediaIcons: Array<{ src: string; alt: string; href: string }> | undefined
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
            <a href={sponsor.href}> <img src={sponsor.src} alt={sponsor.alt} /> </a>
        {/each}
    </div>
    <button on:click={scrollSponsors}>
        <img src="/images/right_arrow.svg" alt="right arrow icon" />
    </button>
    <img alt={logo.alt} src={logo.src} />
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
            <a href={socialMediaIcon.href}> <img src={socialMediaIcon.src} alt={socialMediaIcon.alt} /> </a>
        {/each}
    </div>
    <div>
        {#each partners ?? [] as partner}
            <a href={partner.href}> <img src={partner.src} alt={partner.alt} /> </a>
        {/each}
    </div>
    <p>
        {copyrightText}
    </p>
</footer>

<style lang="scss">
    @import 'footer.styles.scss';
</style>
