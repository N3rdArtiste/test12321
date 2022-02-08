<script context="module" type="ts">
    import { operationStore } from '@urql/svelte'
    import { client } from '../_config/graphql-client'
    import { get } from 'svelte/store'

    export const load: Load = async () => {
        const _client = client
        return {
            props: { _client },
            stuff: {
                async getOperationStore(queryDocument: DocumentNode, variables: Object | undefined): Promise<OperationStore> {
                    const store = operationStore(queryDocument, variables)
                    const result = await client.query(queryDocument, variables).toPromise()
                    Object.assign(get(store), result)
                    return store
                },
            },
        }
    }
</script>

<script type="ts">
    import { setClient } from '@urql/svelte'
    import type { DocumentNode } from 'graphql'
    export let _client: Client

    setClient(_client)
</script>

<h1>Header</h1>
<slot />
