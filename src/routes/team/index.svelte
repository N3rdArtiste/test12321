<script lang="ts">
    import { scale } from 'svelte/transition'
    import { flip } from 'svelte/animate'

    import { operationStore, query } from '@urql/svelte'

    let ourTeam: PageContent
    let teamMembers: TeamMember[]

    const team = operationStore(`
        query {
            our_team{
                title
                body
            }
            team_members{
                id
                name
                title
                bio
            }
        }`)

    query(team)

    $: if ($team && $team.data) {
        assignContent()
        console.log('--$team--', $team.data)
    }

    function assignContent() {
        ourTeam = $team.data.our_team
        teamMembers = $team.data.team_members
    }
</script>

<svelte:head>
    <title>teams</title>
</svelte:head>

<div class="teams">
    {#if $team.fetching}
        <p>Loading...</p>
    {:else if $team.error}
        <p>Oh no... {$team.error.message}</p>
    {:else}
        <h1>{ourTeam.title}</h1>
        <p>{ourTeam.body}</p>

        <section>
            {#each teamMembers as teamMember (teamMember.id)}
                <div class="teamMember" transition:scale|local={{ start: 0.7 }} animate:flip={{ duration: 200 }}>
                    <h4>{teamMember.name}</h4>
                    <h3>{teamMember.title}</h3>
                    <p>{teamMember.bio}</p>
                </div>
            {:else}
                this is fine
            {/each}
        </section>
    {/if}
</div>

<style lang="scss">
    .teams {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
        line-height: 1;

        section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0.5rem;

            .teamMember {
                display: grid;

                margin: 0 0 0.5rem 0;
                padding: 0.5rem;
                background-color: white;
                border-radius: 8px;
                filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
                transform: translate(-1px, -1px);
                transition: filter 0.2s, transform 0.2s;
            }
        }
    }
</style>
