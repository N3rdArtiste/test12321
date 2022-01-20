import { operationStore } from '@urql/svelte'
import { AllPeopleDocument } from '_config/graphql-tags/graphql-tags-generated'

export const people: AllPeopleQueryStore = operationStore(AllPeopleDocument)
