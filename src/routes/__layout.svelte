<script context="module" type="ts">
    import { operationStore, query } from '@urql/svelte'
    import { client } from '../_config/graphql-client'
    import { HeaderAndFooterDocument } from '_config/graphql-tags/graphql-tags-generated'
    import { get } from 'svelte/store'

    export const load: Load = async () => {
        const _client = client
        const getOperationStore = async (queryDocument: DocumentNode, variables?: Object): Promise<OperationStore> => {
            const store = operationStore(queryDocument, variables)
            const result = await client.query(queryDocument, variables).toPromise()
            Object.assign(get(store), result)
            return store
        }
        return {
            props: { _client, headerAndFooterContent: await getOperationStore(HeaderAndFooterDocument) },
            stuff: {
                getOperationStore,
            },
        }
    }
</script>

<script type="ts">
    import '../global.scss'
    import { setClient } from '@urql/svelte'
    import type { DocumentNode } from 'graphql'
    import { getDirectusAssetLink } from 'helpers/directus.helpers'
    import Header from 'components/header/header.svelte'
    import Footer from 'components/footer/footer.svelte'
    import type { HeaderAndFooterQueryStore } from '_config/typeDefs/graphql-generated'
    export let _client: Client
    setClient(_client)
    export let headerAndFooterContent: HeaderAndFooterQueryStore
    query(headerAndFooterContent)

    let partners: Array<{ src: string; alt: string; href: string }> | undefined
    $: partners = $headerAndFooterContent.data?.partners?.map(partner => {
        return {
            href: partner?.link ?? '',
            alt: partner?.partners?.description ?? '',
            src: getDirectusAssetLink(partner?.partners?.filename_disk) ?? '',
        }
    })

    let sponsors: Array<{ src: string; alt: string; href: string }> | undefined
    $: sponsors = $headerAndFooterContent.data?.our_sponsors?.map(sponsor => {
        return {
            href: sponsor?.link ?? '',
            alt: sponsor?.image?.description ?? '',
            src: getDirectusAssetLink(sponsor?.image?.filename_disk) ?? '',
        }
    })

    let socialMediaIcons: Array<{ src: string; alt: string; href: string }> | undefined
    $: socialMediaIcons = $headerAndFooterContent.data?.social_media_links?.map(socialMediaIcon => {
        return {
            href: socialMediaIcon?.link ?? '',
            alt: socialMediaIcon?.image?.description ?? '',
            src: getDirectusAssetLink(socialMediaIcon?.image?.filename_disk) ?? '',
        }
    })
    let navItems = [
        { label: 'Enter', slug: '/enter' },
        { label: 'About', slug: 'asd' },
        { label: 'Inspiration', slug: 'asd' },
        { label: 'Past Winners', slug: 'asd' },
    ]
</script>

<div class="wrapper">
    {#if $headerAndFooterContent.data}
        <Header
            topMenuItems={[{ label: 'Account' }, { label: 'Log out' }]}
            logo={{ src: getDirectusAssetLink($headerAndFooterContent.data.header?.logo?.filename_disk), alt: $headerAndFooterContent.data.header?.logo?.description ?? '' }}
            {navItems}
        />
        <div>
            <slot />
        </div>
        <Footer
            logo={{
                src: getDirectusAssetLink($headerAndFooterContent.data.footer?.footer_logo?.filename_disk),
                alt: $headerAndFooterContent.data.footer?.footer_logo?.description ?? '',
            }}
            {partners}
            {sponsors}
            {socialMediaIcons}
            {navItems}
            copyrightText={$headerAndFooterContent.data.footer?.copyright_text ?? ''}
            shortAboutUsText={$headerAndFooterContent.data.footer?.text ?? ''}
        />
    {/if}
</div>

<style lang="scss">
    .wrapper {
        position: relative;
        min-height: 100vh;
        display: grid;
        & > div {
            margin-top: var(--header-height);
        }
    }
</style>
