<script lang="ts">
    export let src: string

    import { getInlineSvg } from 'helpers/markup'
</script>

{#await getInlineSvg(src) then svgCode}
    {@html svgCode}
{/await}
