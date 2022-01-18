import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const stats: OperationStore<any, object, any> = operationStore(`
    query {
        allFilms {
            totalCount
        }
        allPeople {
            totalCount
        }
        allPlanets {
            totalCount
        }
        allSpecies {
            totalCount
        }
        allStarships {
            totalCount
        }
        allVehicles {
            totalCount
        }
    }`)
