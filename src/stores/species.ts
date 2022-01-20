import { operationStore } from '@urql/svelte'
import { AllSpeciesDocument } from '_config/graphql-tags/graphql-tags-generated'

export const species: AllSpeciesQueryStore = operationStore(AllSpeciesDocument)
