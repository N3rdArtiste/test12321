import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const species: OperationStore<any, object, any> = operationStore(`
    query {
        allSpecies {
            species {
                name
                id
            }
        }
    }`)
