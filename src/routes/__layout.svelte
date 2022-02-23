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

    import { onMount } from 'svelte'
    import { isLoading } from 'stores/ui'

    import Header from 'components/page/header.svelte'
    import Footer from 'components/page/footer.svelte'
    import LoadingUiBlocker from 'components/ui-blocker.svelte'

    setClient(_client)
    query(headerAndFooterContent)

    onMount(() => {
        $isLoading = false
    })
</script>

{#if $headerAndFooterContent.data && !$isLoading}
    <Header data={$headerAndFooterContent.data} />

    <main id="content">
        <slot />
    </main>

    <Footer data={$headerAndFooterContent.data} />
{:else}
    <LoadingUiBlocker text="loading" />
{/if}

<style lang="scss">
    main {
        display: grid;

        min-height: calc(100vh - var(--header-height));
        padding-top: calc(2rem + var(--header-height));
        padding-bottom: 8rem;

        &::before {
            content: '';
            box-shadow: 0px -28px 16px 23px #000000;
            position: fixed;
            top: 10rem;
            left: 0;
            width: 100vw;
        }

        @media (min-width: 769px) {
            padding-top: calc(6.2rem + var(--header-height));
        }
    }
</style>
