import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const planets: OperationStore<any, object, any> = operationStore(`
    query {
        allPlanets{
            planets{
                name
                diameter
                population
                gravity
                id
            }
        }
    }`)
