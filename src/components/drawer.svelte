<script lang="ts">
    import ArrowButton from 'components/buttons/arrow.svelte'

    export let title: string

    let drawerOpen = false

    function handleClick() {
        drawerOpen = !drawerOpen
    }
</script>

<hr />
<div class:open={drawerOpen}>
    <ArrowButton label={title} onClick={handleClick} />

    <b>
        <slot />
    </b>
</div>
<hr />

<style lang="scss">
    hr {
        margin: 0 0 -0.2rem;
    }

    div {
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
