type MultiLevelList = Array<{
    id: string
    name: string
    multiLevelList?: MultiLevelList
}>
