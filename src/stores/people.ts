import { operationStore } from '@urql/svelte'
import { AllPeopleQueryDocument } from '_config/typeDefs/graphql-generated'
import type { AllPeopleQueryQueryStore } from '_config/typeDefs/graphql-generated'

export const people: AllPeopleQueryQueryStore = operationStore(AllPeopleQueryDocument)
