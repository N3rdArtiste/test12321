import { operationStore } from '@urql/svelte'
import { AllSpeciesDocument } from '_config/graphql-tags/graphql-tags-generated'
import type { AllSpeciesQueryStore } from '_config/typeDefs/graphql-generated'

export const species: AllSpeciesQueryStore = operationStore(AllSpeciesDocument)
