<script lang="ts">
    export let src: string
    const getInlineSvg = (svgLink: string): Promise<string> => {
        return fetch(svgLink)
            .then(res => {
                return res.text()
            })
            .then(svgCode => {
                return svgCode
            })
    }
</script>

{#await getInlineSvg(src) then svgCode}
    {@html svgCode}
{/await}
