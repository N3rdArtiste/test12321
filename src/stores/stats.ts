import { operationStore } from '@urql/svelte'
import { StatsDocument } from '_config/graphql-tags/graphql-tags-generated'

export const stats: StatsQueryStore = operationStore(StatsDocument)
