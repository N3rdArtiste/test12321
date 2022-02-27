<div><hr /></div>

<style lang="scss">
    div {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        justify-content: center;
        column-gap: var(--column-gap);

        @media (min-width: 769px) {
            grid-template-columns: minmax(12.2rem, 1fr) repeat(11, 1fr);
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 0 2rem;
        }
    }
    hr {
        grid-column: 2/8;
        background: var(--color-secondary);
        height: 0.15rem;
        border: none;
        @media (min-width: 769px) {
            grid-column: 1/13;
        }
    }
</style>
