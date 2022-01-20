import { operationStore } from '@urql/svelte'
import { AllPeopleDocument } from '_config/graphql-tags/graphql-tags-generated'
import type { AllPeopleQueryStore } from '_config/typeDefs/graphql-generated'

export const people: AllPeopleQueryStore = operationStore(AllPeopleDocument)
