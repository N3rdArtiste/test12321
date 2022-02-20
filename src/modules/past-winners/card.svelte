<script type="ts">
    import { getDirectusAssetLink } from 'helpers/string'

    import type { PastWinnersPageQuery } from '_config/typeDefs/graphql-generated'

    export let data: ArrayElement<PastWinnersPageQuery['past_winners']>
</script>

<img src="{getDirectusAssetLink(data?.image?.filename_disk)}/" alt={data?.image?.description} />
<h2>{data?.name}</h2>
<p>{data?.short_description}</p>
