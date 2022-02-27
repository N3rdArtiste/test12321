<script lang="ts">
    export let label: string = ''
    export let accentHover = true
    export let arrowRight = false
    export let onClick: () => void
</script>

<button class="arrowButton" on:click={onClick} class:accentHover class:arrowRight>
    {#if label.length}
        <span>{label}</span>
    {/if}

    <b class="arrowContainer">
        <div />
    </b>
</button>

<style lang="scss">
    button {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: 1fr auto;
        padding-right: 0.2rem;
        cursor: pointer;
        text-align: left;

        span {
            font-size: 3rem;
            line-height: 4rem;
            font-weight: 900;

            @media (min-width: 48.1rem) {
                font-size: 4rem;
                line-height: 5rem;
            }
        }

        &.arrowRight {
            width: 100%;
            b {
                justify-self: end;
            }
        }

        .arrowContainer {
            display: grid;
            height: 3.2rem;
            width: 6.3rem;
            align-self: center;
            align-content: center;

            div {
                transition: width 300ms ease-out;
                background: var(--color-secondary);
                height: 0.2rem;
                width: 2.8rem;
                position: relative;
                cursor: pointer;

                &:before,
                &:after {
                    content: '';
                    background: var(--color-secondary);
                    position: absolute;
                    height: 0.2rem;
                    width: 1.5rem;
                }

                &:before {
                    right: -0.4rem;
                    bottom: -0.5rem;
                    transform: rotate(-45deg);
                }

                &:after {
                    right: -0.4rem;
                    top: -0.5rem;
                    transform: rotate(45deg);
                }
            }
        }

        &:hover {
            color: var(--color-accent);

            .arrowContainer div {
                width: 6rem;
                background: var(--color-accent);

                &:before,
                &:after {
                    background: var(--color-accent);
                }

                &:hover {
                    width: 6rem;
                }
            }

            &:not(.accentHover) {
                color: var(--color-secondary);

                .arrowContainer div {
                    background: var(--color-secondary);

                    &:before,
                    &:after {
                        background: var(--color-secondary);
                    }
                }
            }
        }
    }
</style>
