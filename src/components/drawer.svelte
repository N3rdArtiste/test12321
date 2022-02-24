<script lang="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'

    export let title: string

    let drawerOpen = false

    function handleClick() {
        drawerOpen = !drawerOpen
    }
</script>

<section>
    <div class="container">
        <hr />
        <div class="inner" class:open={drawerOpen}>
            <ArrowButton label={title} onClick={handleClick} />

            <b>
                <slot />
            </b>
        </div>
        <hr />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        column-gap: var(--column-gap);
        @media (min-width: 769px) {
            padding: 0 2rem;
            justify-content: center;
        }
    }
    hr {
        margin: 0 0 -0.2rem;
    }
    .container {
        grid-column: 2/8;
        @media (min-width: 769px) {
            grid-column: span 12;
        }
    }

    .inner {
        margin: 1rem 0;
        :global(button.arrowButton span) {
            font-size: 3.3rem;
            line-height: 7rem;
        }

        b {
            transition: none;

            position: relative;
            height: 0;
            overflow: hidden;
        }

        &.open {
            margin-bottom: 7rem;

            b {
                transition: all 500ms ease-in-out;

                height: 100%;
                padding: 2rem 0 1rem;
                margin-bottom: -7rem;
            }
        }
    }
</style>
