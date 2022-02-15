<script lang="ts">
    export let data: HomepageQuery['home_page']

    import ArrowButton from 'components/arrow-button/arrowButton.svelte'
    import { getDirectusAssetLink } from 'helpers/directus.helpers'
    import { getInlineSvg } from 'helpers/get-inline-svg'
    import type { HomepageQuery } from '_config/typeDefs/graphql-generated'
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
    <div>Video goes here</div>
    <div>
        {#await getInlineSvg(getDirectusAssetLink(data?.hero_section_right_side_svg?.filename_disk)) then svgCode}
            {@html svgCode}
        {/await}
    </div>
    <h1>{data?.innovator_section_heading}</h1>
    <p>{@html data?.innovator_section_body}</p>
    <img src={getDirectusAssetLink(data?.innovator_section_image?.filename_disk)} alt={data?.innovator_section_image?.description} />
    <div>
        <ArrowButton
            label={data?.innovator_section_CTA_label ?? ''}
            onClick={() => {
                console.log('clicked')
            }}
        />
    </div>
</section>

<style lang="scss">
    @import 'homepage.styles.scss';
</style>
