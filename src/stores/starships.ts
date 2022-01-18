import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const starships: OperationStore<any, object, any> = operationStore(`
    query {
        allStarships{
            starships{
                name
                id
            }
        }
    }`)
