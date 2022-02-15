<script context="module" type="ts">
    import { operationStore, query } from '@urql/svelte'

    import { get } from 'svelte/store'

    import { HeaderAndFooterDocument } from '_config/graphql-tags/graphql-tags-generated'
    import { client } from '_config/graphql-client'

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
    export let _client: Client
    export let headerAndFooterContent: HeaderAndFooterQueryStore

    import 'styles/global.scss'

    import { setClient } from '@urql/svelte'
    import type { DocumentNode } from 'graphql'

    import { paths } from '_config/constants/paths'
    import { getDirectusAssetLink } from 'helpers/string'

    import Header from 'components/page/header.svelte'
    import Footer from 'components/page/footer.svelte'

    setClient(_client)
    query(headerAndFooterContent)

    let partners: StandardData
    let sponsors: StandardData
    let socialMediaIcons: StandardData

    $: partners = $headerAndFooterContent.data?.partners?.map(partner => {
        return {
            href: partner?.link ?? '',
            alt: partner?.partners?.description ?? '',
            src: getDirectusAssetLink(partner?.partners?.filename_disk) ?? '',
        }
    })

    $: sponsors = $headerAndFooterContent.data?.our_sponsors?.map(sponsor => {
        return {
            href: sponsor?.link ?? '',
            alt: sponsor?.image?.description ?? '',
            src: getDirectusAssetLink(sponsor?.image?.filename_disk) ?? '',
        }
    })

    $: socialMediaIcons = $headerAndFooterContent.data?.social_media_links?.map(socialMediaIcon => {
        return {
            href: socialMediaIcon?.link ?? '',
            alt: socialMediaIcon?.image?.description ?? '',
            src: getDirectusAssetLink(socialMediaIcon?.image?.filename_disk) ?? '',
        }
    })
</script>

<div class="wrapper">
    {#if $headerAndFooterContent.data}
        <Header
            topMenuItems={[{ label: 'Account' }, { label: 'Log out' }]}
            logo={{ src: getDirectusAssetLink($headerAndFooterContent.data.header?.logo?.filename_disk), alt: $headerAndFooterContent.data.header?.logo?.description ?? '' }}
            navItems={paths}
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
            navItems={paths}
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
            padding-top: 2rem;
            @media only screen and (min-width: 48.1rem) {
                padding-top: 6.2rem;
            }
        }
    }
</style>
