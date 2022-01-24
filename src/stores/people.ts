import { operationStore } from '@urql/svelte'
import { AllPeopleDocument } from '_config/graphql-tags/graphql-tags-generated'

import { derived } from 'svelte/store'
import { term } from 'stores/search'

export const people: AllPeopleQueryStore = operationStore(AllPeopleDocument)

// interface OperationStore extends Readable<OperationStore>
// export const people: OperationStore<any, object, any> = operationStore(`
//     query {
//         allPeople {
//             people {
//                 name
//                 homeworld {
//                     name
//                 }
//                 species {
//                     name
//                 }
//                 gender
//                 id
//             }
//         }
//     }`)

export const filteredPeople = derived([term, people], ([$term, $people]) => {
    return $people?.data?.allPeople?.people?.filter(x =>
        $term.length > 0
            ? x.name.toString().toLowerCase().includes($term.toLowerCase()) ||
              x.gender.toString().toLowerCase().includes($term.toLowerCase()) ||
              x.id.toString().toLowerCase().includes($term.toLowerCase())
            : true
    )
})
