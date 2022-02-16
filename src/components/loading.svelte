<script lang="ts">
    export let text: string
</script>

<h2 class="loading">
    {text ?? 'loading'}
    <i>.</i>
    <i>.</i>
    <i>.</i>
</h2>

<style lang="scss">
    @keyframes fadeInOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    h2.loading {
        align-self: center;
        justify-self: center;
        text-align: center;
        color: var(--info-75);
        padding: 0 2rem 0 0;
        white-space: nowrap;
        font-weight: 100;

        i {
            font-weight: 600;
            font-family: serif;
            margin: 0 0.05rem 0 -0.4rem;

            animation-duration: 1000ms;
            animation-name: fadeInOut;
            animation-iteration-count: infinite;
            animation-direction: alternate;

            &:nth-child(1) {
                opacity: 1;
                animation-delay: 0s;
            }

            &:nth-child(2) {
                opacity: 0.5;
                animation-delay: 500ms;
            }

            &:nth-child(3) {
                opacity: 0.3;
                animation-delay: 1s;
            }
        }
    }
</style>
