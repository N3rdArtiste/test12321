import { operationStore } from '@urql/svelte'
import { AllStarshipsDocument } from '_config/graphql-tags/graphql-tags-generated'

export const starships: AllStarshipsQueryStore = operationStore(AllStarshipsDocument)
