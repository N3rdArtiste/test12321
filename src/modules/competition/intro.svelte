<script lang="ts">
    export let data: HomepageQuery['home_page']

    import ArrowButton from 'components/arrow-button/arrowButton.svelte'
</script>

<section>
    <h1>{@html data?.enter_now_section_heading}</h1>
    <p>
        {@html `
        <strong>${data?.enter_now_section_sub_heading}</strong>
        ${data?.enter_now_section_body}`}
    </p>
    <div>
        <ArrowButton
            label={data?.enter_now_section_CTA_label ?? ''}
            onClick={() => {
                console.log('clicked')
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
        @media only screen and (min-width: 769px) {
            grid-template-rows: auto 2rem auto;
            justify-content: center;
            padding: 0 2rem;
        }
        & > h1:nth-of-type(1) {
            grid-column: 1/6;
            grid-row: 1/2;

            font-size: 6rem;
            line-height: 6rem;
            font-weight: 900;
            padding: 0 2rem;

            &:hover {
                color: var(--color-brand);
            }
            @media only screen and (min-width: 769px) {
                grid-column: 1/6;
                grid-row: 1/4;

                font-size: 8rem;
                line-height: 8rem;
            }
        }
        & > p:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 3/4;

            font-size: 2rem;
            line-height: 2.8rem;
            padding: 0 2rem;

            & :global(p:nth-of-type(1)) {
                display: inline;
            }

            @media only screen and (min-width: 769px) {
                grid-column: 7/13;
                grid-row: 1/2;

                font-size: 2.2rem;
                line-height: 3rem;
                margin-top: 1.5rem;

                & :global(strong),
                :global(p) {
                    display: block;
                }
            }
        }
        & > div:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 5/6;

            width: 100%;
            padding: 0 2rem;

            @media only screen and (min-width: 769px) {
                grid-column: 7/13;
                grid-row: 3/4;
            }
        }
        @media only screen and (min-width: 769px) {
            & > * {
                padding: 0 !important;
            }
        }
    }
</style>
