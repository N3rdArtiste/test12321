import { operationStore } from '@urql/svelte'
import { AllVehiclesDocument } from '_config/graphql-tags/graphql-tags-generated'

export const vehicles: AllVehiclesQueryStore = operationStore(AllVehiclesDocument)
