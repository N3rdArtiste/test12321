<script lang="ts">
    export let label: string = ''
    export let darkBackground = true
    export let onClick: () => void
</script>

<button class="buttonArrow" on:click={onClick} class:darkBackground>
    <span>{label}</span>

    <b class="arrowContainer">
        <div />
    </b>
</button>

<style lang="scss">
    button {
        display: grid;
        grid-template-columns: max-content 1fr;

        width: 100%;
        padding-right: 0.2rem;
        cursor: pointer;

        & > span {
            font-size: 3rem;
            line-height: 4rem;
            font-weight: 900;

            @media only screen and (min-width: 48.1rem) {
                font-size: 4rem;
                line-height: 5rem;
            }
        }

        .arrowContainer {
            width: 10rem;

            div {
                transition: width 300ms ease-out;

                background: var(--color-secondary);
                top: 2.1rem;
                left: 2rem;
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

            &:not(.darkBackground) {
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
