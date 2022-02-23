<script lang="ts">
    export let question: Question_Text_Area

    import Drawer from 'components/drawer.svelte'

    let { title, body } = question
</script>

<Drawer title={title ?? ''}>
    <b>
        {@html body}
    </b>
</Drawer>

<style lang="scss">
    b {
        padding-bottom: 2rem;
    }
</style>
