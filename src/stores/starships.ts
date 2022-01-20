import { operationStore } from '@urql/svelte'
import type { AllStarshipsQueryQueryStore } from '_config/typeDefs/graphql-generated'
import { AllStarshipsQueryDocument } from '_config/typeDefs/graphql-generated'

export const starships: AllStarshipsQueryQueryStore = operationStore(AllStarshipsQueryDocument)
