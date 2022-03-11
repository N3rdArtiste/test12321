<script type="ts">
    import { goto } from '$app/navigation'

    import Arrow from 'components/buttons/arrow.svelte'

    import { blur } from 'svelte/transition'

    export let question: Question_Titles

    const levelFirst = question.body?.map(element => {
        return {
            id: element?.multi_level_question_items?.id,
            title: element?.multi_level_question_items?.level_1_title,
        }
    })
    const levelSecond = question.body?.map(element => {
        return {
            id: element?.multi_level_question_items?.id,
            title: element?.multi_level_question_items?.level_2_title,
            subtext: element?.multi_level_question_items?.level_2_subtext,
            text: element?.multi_level_question_items?.level_3_text,
            links: element?.multi_level_question_items?.level_3_links,
        }
    })

    let activeId = (question.body ?? [])[0]?.multi_level_question_items?.id
</script>

<div class="container">
    <div class="level-1">
        {#each levelFirst ?? [] as item}
            <p
                class:activeLabel={activeId === item.id}
                on:click={() => {
                    activeId = item.id
                }}
            >
                {item.title}
            </p>
        {/each}
    </div>
    {#each levelSecond ?? [] as item}
        {#if activeId === item.id}
            <div class="level-2" transition:blur>
                <div class="level-2-subItem-1">
                    <h2>{item.title}</h2>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <p><strong>{item.subtext}</strong></p>
                </div>
                <div class="level-2-subItem-2">
                    {@html item.text}
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <div>
                        {#each item.links ?? [] as link}
                            <div>
                                <Arrow
                                    small={true}
                                    label={link?.multi_level_question_item_links?.label ?? ''}
                                    onClick={() => {
                                        goto(link?.multi_level_question_item_links?.url ?? '')
                                    }}
                                />
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
    {/each}
</div>

<style lang="scss">
    .container {
        display: grid;
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        gap: 2rem 1rem;
        grid-auto-flow: row;
        align-items: flex-start;
    }

    .level-1 {
        display: grid;
        grid-auto-rows: 1fr;
        grid-auto-flow: row;
        grid-area: 1 / 1 / 2 / 9;
        & > p {
            cursor: pointer;
        }
    }

    .level-2 {
        display: grid;
        grid-template-columns: repeat(1fr);
        column-gap: var(--column-gap);
        row-gap: 2rem;
        grid-auto-flow: row;
        grid-area: 2 / 1 / 3 / 9;
    }
    .activeLabel {
        font-weight: 900;
    }
    span {
        display: block;
    }
    @media (min-width: 1200px) {
        .container {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 1fr;
            gap: 0 1.6rem;
        }

        .level-1 {
            grid-area: 1 / 1 / 2 / 4;
        }

        .level-2 {
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            grid-template-rows: 1fr;
            row-gap: 0rem;
            grid-area: 1 / 4 / 2 / 13;
        }

        .level-2-subItem-1 {
            grid-area: 1 / 1 / 2 / 4;
        }

        .level-2-subItem-2 {
            grid-area: 1 / 4 / 2 / 10;
        }
    }
    .level-2-subItem-2 {
        & :global(a) {
            font-size: 2rem;
            line-height: 2.8rem;
            @media (min-width: 769px) {
                font-size: 2.2rem;
                line-height: 3rem;
            }
        }
    }
</style>
