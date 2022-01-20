<script context="module" lang="ts">
    import { graphqlUrl } from 'constants/graphql'
    // @ts-ignore
    export async function load({ fetch }) {
        const res = await fetch(graphqlUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                        allFilms {
                            films {
                                title
                                id
                            }
                        }
                    }`,
            }),
        })

        if (res.ok) {
            const { data } = await res.json()
            return {
                props: {
                    allFilms: data.allFilms.films,
                },
            }
        }
        return {
            status: res.status,
            error: new Error(`Error fetching GraphQL data`),
        }
    }
</script>

<script lang="ts">
    import { minMaxRange } from 'helpers/integers'
    import { films } from 'stores/films'

    // export let allFilms: Film[]
    export let allFilms
    $films = allFilms
</script>

<svelte:head>
    <title>films</title>
</svelte:head>

<section class="films">
    <ul>
        {#each $films as item (item.id)}
            <li>
                <img src={`sw/films/${minMaxRange(2, 7)}-full.jpg`} alt="" />
                <h4>{item.title}</h4>
            </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    section {
        display: grid;

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            grid-gap: 0.5rem;
            padding: 0;
            margin: 3rem 1rem;

            li {
                display: grid;

                margin: 0 0 0.5rem 0;
                padding: 0.5rem;
                background-color: white;
                border-radius: 8px;
                filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
                transform: translate(-1px, -1px);
                transition: filter 0.2s, transform 0.2s;

                & > img {
                    width: 100%;
                }
            }
        }
    }
</style>
