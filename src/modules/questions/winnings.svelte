<script lang="ts">
    export let data: DataPayload

    import Tabs from 'components/tabs.svelte'
    import { tab } from 'stores/app'

    let questions: DataBody[] = data.about_page.multi_level_questions[0].question.body
    let pageTile: string = data.about_page.multi_level_questions[0].question.title

    let tabTitles = questions.map(item => {
        return item.multi_level_question_items.level_1_title
    })
    let content = questions.map(item => {
        return item.multi_level_question_items
    })

    console.log('--data2--', tabTitles, content)
</script>

<section>
    <h1>{pageTile}</h1>

    <Tabs {tabTitles} {content} let:retData let:index>
        <div class:active={$tab == index + 1}>
            <h2>{retData.level_2_title}</h2>
            <p class="subTitle"><strong>{retData.level_2_subtext}</strong></p>
            <p class="otherP">{retData.level_3_text}</p>
            <!-- <span>{retData.level_3_links}</span> -->
        </div>
    </Tabs>
</section>

<input type="number" bind:value={$tab} />

<style lang="scss">
    input {
        position: fixed;
        bottom: 1rem;
    }
    section {
        display: grid;
        grid-template-rows: 5rem 1fr;

        div {
            display: grid;
        }
    }
</style>
