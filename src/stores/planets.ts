import { operationStore } from '@urql/svelte'
import { AllPlanetsDocument } from '_config/graphql-tags/graphql-tags-generated'

export const planets: AllPlanetsQueryStore = operationStore(AllPlanetsDocument)
