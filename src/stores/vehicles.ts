import { operationStore } from '@urql/svelte'
import { AllVehiclesQueryDocument } from '_config/typeDefs/graphql-generated'
import type { AllVehiclesQueryQueryStore } from '_config/typeDefs/graphql-generated'

export const vehicles: AllVehiclesQueryQueryStore = operationStore(AllVehiclesQueryDocument)
