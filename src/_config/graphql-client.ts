import { createClient, dedupExchange, fetchExchange } from '@urql/svelte'
import { browser } from '$app/env'
import { cacheExchange } from '@urql/exchange-graphcache'
import { graphqlUrl } from '_config/constants/graphql'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'

export const client = createClient({
    url: graphqlUrl,
    exchanges: [
        dedupExchange,
        cacheExchange({
            resolvers: {
                Query: {
                    judges_by_id: (parent, args) => ({ __typename: 'judges', id: args.id }),
                },
            },
            // storage: browser
            //     ? makeDefaultStorage({
            //           idbName: 'graphcache-v1', // The name of the IndexedDB database
            //           maxAge: 100, // The maximum age of the persisted data in days
            //       })
            //     : undefined,
        }),
        fetchExchange,
    ],
})
