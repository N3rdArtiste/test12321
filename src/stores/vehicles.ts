import { operationStore } from '@urql/svelte'
import type { OperationStore } from '@urql/svelte'

// interface OperationStore extends Readable<OperationStore>
export const vehicles: OperationStore<any, object, any> = operationStore(`
    query {
        allVehicles{
            vehicles{
                name
                id
            }
        }
    }`)
