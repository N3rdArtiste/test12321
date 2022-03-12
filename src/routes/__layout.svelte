<script context="module" type="ts">
    import { Client, operationStore, query } from '@urql/svelte'

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
        if ($isLoading) {
            const appWrapper = document.getElementById('svelte') as HTMLElement
            appWrapper.style.display = 'block'
            setTimeout(() => {
                appWrapper.style.filter = 'none'
            }, 300)
        }
        $isLoading = false
    })
</script>

{#if $headerAndFooterContent.data}
    <Header data={$headerAndFooterContent?.data} />
    <main id="content">
        <slot />
    </main>
    <Footer data={$headerAndFooterContent?.data} />
{/if}

<style lang="scss">
    #content {
        display: grid;
        transition: background-color 0.3s;
        background-color: var(--color-primary);

        min-height: calc(100vh - var(--header-height));
        padding-top: calc(2rem + var(--header-height));
        align-content: flex-start;
        @media (min-width: 769px) {
            padding-top: calc(6.2rem + var(--header-height));
        }
    }
</style>
