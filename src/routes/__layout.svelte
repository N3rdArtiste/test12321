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

    import { navigating } from '$app/stores'
    import { isLoading } from 'stores/ui'

    import Header from 'components/page/header-main.svelte'
    import Footer from 'components/page/footer.svelte'
    import LoadingUiBlocker from 'components/ui-blocker.svelte'

    setClient(_client)
    query(headerAndFooterContent)
</script>

<section>
    {#if $headerAndFooterContent.data && !$navigating && !$isLoading}
        <Header data={$headerAndFooterContent.data} />

        <slot />

        <Footer data={$headerAndFooterContent.data} />
    {:else}
        <LoadingUiBlocker text="initialising" />
    {/if}
</section>

<style lang="scss">
    section {
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
