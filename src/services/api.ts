import { query } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

export function api(queryString: OperationStore) {
    query(queryString)
}
