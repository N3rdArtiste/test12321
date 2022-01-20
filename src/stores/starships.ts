import { operationStore } from '@urql/svelte'
import { AllStarshipsDocument } from '_config/graphql-tags/graphql-tags-generated'
import type { AllStarshipsQueryStore } from '_config/typeDefs/graphql-generated'

export const starships: AllStarshipsQueryStore = operationStore(AllStarshipsDocument)
