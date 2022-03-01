<script type="ts">
    import { isAuthenticated } from '_auth/store'

    import { navAuth } from '_config/constants/menus'
    import { goToStaticPage } from 'helpers/url'
</script>

<ul class="authNav">
    {#each $isAuthenticated ? navAuth.authenticated : navAuth.unauthenticated as { label, path }}
        <li on:click={() => goToStaticPage(path)} class="small">{label}</li>
    {/each}
</ul>

<style lang="scss">
    ul {
        display: grid;
        justify-content: start;
        list-style-type: none;
        grid-auto-flow: column;
        column-gap: 1rem;
        align-content: end;
        align-items: center;
        height: 100%;

        @media (min-width: 769px) {
            justify-content: end;
        }
        & > li {
            cursor: pointer;
            float: left;

            &:not(:first-child)::before {
                content: '';
                border-left: 0.15rem var(--color-secondary) solid;
                padding-right: 1rem;
                height: 1rem;
            }
        }
    }
</style>
