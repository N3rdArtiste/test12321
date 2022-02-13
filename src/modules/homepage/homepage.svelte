<script context="module">
    // your script goes here
</script>

<script lang="ts">
    import ArrowButton from 'components/arrow-button/arrowButton.svelte'
</script>

<h1>hello world!</h1>

<ArrowButton
    onClick={() => {
        console.log('hello')
    }}
    label="Enter now"
/>

<style lang="scss">
    @import 'homepage.styles.scss';
</style>
