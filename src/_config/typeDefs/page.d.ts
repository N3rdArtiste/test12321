declare interface Page {
    size: number
    totalElements: number
    totalPages: number
    number: number
}

declare interface PaginationOptions {
    length: number
    pageSize: number
    currentPage: number
    pageSizeOptions: number[]
    totalRecords: number
}

declare interface PageParams {
    page: number
    limit: number
    orderBy: QueryOrderBy[]
}

declare interface PageContent {
    title: string
    body: string
}

declare type PageToQueryParams = Merge<
    Omit<PageParams, 'page'>,
    {
        offset: number
        timezone: string
        dateFormat: string
    }
>
