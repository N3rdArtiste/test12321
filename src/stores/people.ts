import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const people: OperationStore<any, object, any> = operationStore(`
    query {
        allPeople {
            people {
                name
                homeworld {
                    name
                }
                species {
                    name
                }
                gender
                id
            }
        }
    }`)
