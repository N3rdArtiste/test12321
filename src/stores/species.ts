import { operationStore } from '@urql/svelte'
import { AllSpeciesQueryDocument } from '_config/typeDefs/graphql-generated'
import type { AllSpeciesQueryQueryStore } from '_config/typeDefs/graphql-generated'

export const species: AllSpeciesQueryQueryStore = operationStore(AllSpeciesQueryDocument)
