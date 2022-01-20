import { query, initClient } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

import { graphqlUrl } from 'constants/graphql'

export function setupClient() {
    initClient({
        url: graphqlUrl,
        // fetchOptions: () => ({ headers: { credentials: 'omit' } }),
    })
}

export const api = <T>(queryString: OperationStore<T>) => {
    query<T>(queryString)
}
