import { operationStore } from '@urql/svelte'
import type { AllPlanetsQueryQueryStore } from '_config/typeDefs/graphql-generated'

import { AllPlanetsQueryDocument } from '_config/typeDefs/graphql-generated'

export const planets: AllPlanetsQueryQueryStore = operationStore(AllPlanetsQueryDocument)
