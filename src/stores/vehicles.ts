import { operationStore } from '@urql/svelte'
import { AllVehiclesDocument } from '_config/graphql-tags/graphql-tags-generated'
import type { AllVehiclesQueryStore } from '_config/typeDefs/graphql-generated'

export const vehicles: AllVehiclesQueryStore = operationStore(AllVehiclesDocument)
