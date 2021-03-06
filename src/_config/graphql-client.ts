import { createClient, dedupExchange, fetchExchange } from '@urql/svelte'
import { browser } from '$app/env'
import { cacheExchange } from '@urql/exchange-graphcache'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'
import { requestPolicyExchange } from '@urql/exchange-request-policy'

export const client = (directusURL: string) =>
    createClient({
        url: directusURL + '/graphql',
        requestPolicy: 'network-only',
        exchanges: [
            dedupExchange,
            requestPolicyExchange({}),
            cacheExchange({
                keys: {
                    past_winners_aggregated: () => null,
                    judges_aggregated: () => null,
                    inspiration_articles_aggregated: () => null,
                },
                resolvers: {
                    Query: {
                        past_winners_by_id: (parent, args) => ({ __typename: 'past_winners', id: args.id }),
                    },
                },
                // storage: browser
                //     ? makeDefaultStorage({
                //           idbName: 'yia-v1',
                //       })
                //     : undefined,
            }),
            fetchExchange,
        ],
    })
