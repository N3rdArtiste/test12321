import { operationStore } from '@urql/svelte'
import { AllPlanetsDocument } from '_config/graphql-tags/graphql-tags-generated'
import type { AllPlanetsQueryStore } from '_config/typeDefs/graphql-generated'

export const planets: AllPlanetsQueryStore = operationStore(AllPlanetsDocument)
