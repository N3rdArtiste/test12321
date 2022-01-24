import { operationStore } from '@urql/svelte'
import { AllPeopleDocument } from '_config/graphql-tags/graphql-tags-generated'

import { derived } from 'svelte/store'
import { term } from 'stores/search'

export const people: AllPeopleQueryStore = operationStore(AllPeopleDocument)

export const filteredPeople = derived([term, people], ([$term, $people]) => {
    return $people?.data?.allPeople?.people?.filter(x =>
        $term.length > 0
            ? x.name.toString().toLowerCase().includes($term.toLowerCase()) ||
              x.gender.toString().toLowerCase().includes($term.toLowerCase()) ||
              x.id.toString().toLowerCase().includes($term.toLowerCase())
            : true
    )
})
