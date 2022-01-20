import { operationStore } from '@urql/svelte'
import { StatsQueryDocument } from '_config/typeDefs/graphql-generated'
import type { StatsQueryQueryStore } from '_config/typeDefs/graphql-generated'
export const stats: StatsQueryQueryStore = operationStore(StatsQueryDocument)
