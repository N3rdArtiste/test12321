<script type="ts">
    import { goto } from '$app/navigation'
    import { isAuthenticated } from '_auth/store'
    import { isLoading } from 'stores/ui'

    import { navAuth } from '_config/constants/menus'
    // import { navDrawerOpen } from 'stores/ui'

    function handleClick(path: string) {
        // goto(path)
        location.href = `${location.origin}${path}`
    }
</script>

<!-- <ul class:hide={!$navDrawerOpen} class="authNav"> -->
<ul class="authNav">
    {#each $isAuthenticated ? navAuth.authenticated : navAuth.unauthenticated as { label, path }}
        <li on:click={() => handleClick(path)}>{label}</li>
    {/each}
</ul>

<style lang="scss">
    .authNav {
        position: absolute;
        top: -0.8rem;
        right: 10rem;
        left: initial;
        bottom: initial;
        list-style: none;

        /* @media (min-width: 768px) {
            right: 12rem;
        } */

        li {
            cursor: pointer;
            float: left;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            font-weight: 200;

            &:not(:first-child)::before {
                content: '';
                border-left: 0.15rem var(--color-secondary) solid;
                height: 1.5rem;
                position: absolute;
                transform: translate(-2rem, -0.2rem);
            }
        }
    }
</style>
