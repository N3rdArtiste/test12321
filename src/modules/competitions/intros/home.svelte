<script lang="ts">
    import { goto } from '$app/navigation'

    export let data: HomePageQuery['home_page']

    import ButtonArrow from 'components/buttons/arrow.svelte'
</script>

<section>
    <i
        on:click={() => {
            goto('/enter')
        }}
    >
        {@html data?.enter_now_section_heading}
    </i>
    <p>
        {@html `
        <strong>${data?.enter_now_section_sub_heading}</strong>
        ${data?.enter_now_section_body}`}
    </p>
    <div>
        <ButtonArrow
            label={data?.enter_now_section_CTA_label ?? ''}
            onClick={() => {
                goto('/enter')
            }}
        />
    </div>
</section>

<style lang="scss">
    section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        grid-template-rows: auto 4.2rem auto 6.8rem auto;
        column-gap: var(--column-gap);
        max-width: var(--max-width);

        @media (min-width: 769px) {
            grid-template-rows: auto 2rem auto;
            grid-template-columns: minmax(21rem, 1fr) 1fr 1fr 1fr 1fr 1fr minmax(14rem, 1fr) 1fr 1fr 1fr 1fr 1fr;
            margin: 0 auto;
            justify-content: center;
            padding: 0 2rem;
        }
        & > i {
            grid-column: 2/7;
            grid-row: 1/2;

            cursor: pointer;

            &:hover {
                color: var(--color-accent);
            }
            @media (min-width: 769px) {
                grid-column: 1/6;
                grid-row: 1/4;
            }
        }
        & > p:nth-of-type(1) {
            grid-column: 2/8;
            grid-row: 3/4;

            & :global(p:nth-of-type(1)) {
                display: inline;
            }

            @media (min-width: 769px) {
                grid-column: 7/13;
                grid-row: 1/2;

                margin-top: 1.5rem;

                & :global(strong),
                :global(p) {
                    display: block;
                }
            }
        }

        & > div {
            grid-column: 2/8;
            grid-row: 5/6;

            width: 100%;
            @media (min-width: 769px) {
                grid-column: 7/13;
                grid-row: 3/4;

                padding: 0 !important;
            }
        }
    }
</style>
