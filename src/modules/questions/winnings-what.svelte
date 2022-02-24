<script lang="ts">
    export let question: Question_Titles

    import Drawer from 'components/drawer.svelte'
    import Tabs from 'components/tabs.svelte'
    import { tab } from 'stores/app'

    let { title, body } = question

    let tabTitles = body!.map(item => {
        return item?.multi_level_question_items?.level_1_title ?? ''
    })

    let content = body!.flatMap(item => {
        return item?.multi_level_question_items ?? []
    })
</script>

<Drawer title={title ?? ''}>
    <Tabs {tabTitles} {content} let:returnData let:index>
        <div class="tabContent" class:active={$tab == index + 1}>
            <h2>{returnData?.level_2_title}</h2>

            <p><strong>{returnData.level_2_subtext}</strong></p>

            <b>
                {@html returnData.level_3_text}
            </b>
        </div>
    </Tabs>
</Drawer>

<style lang="scss">
    div {
        strong {
            line-height: 1.2;
        }
    }
</style>
