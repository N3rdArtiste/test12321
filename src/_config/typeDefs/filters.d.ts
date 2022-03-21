type MultiLevelList = Array<{
    id?: string
    name: string
    collapsible?: boolean
    multiLevelList?: MultiLevelList
}>
