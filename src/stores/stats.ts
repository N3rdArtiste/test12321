import { operationStore } from '@urql/svelte'
import { StatsDocument } from '_config/graphql-tags/graphql-tags-generated'
import type { StatsQueryStore } from '_config/typeDefs/graphql-generated'

export const stats: StatsQueryStore = operationStore(StatsDocument)
