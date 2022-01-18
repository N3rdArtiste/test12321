import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const films: OperationStore<any, object, any> = operationStore(`
    query {
        allFilms{
            films{
                title
                id
            }
        }
    }`)
