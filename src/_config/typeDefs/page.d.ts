interface Page {
    size: number
    totalElements: number
    totalPages: number
    number: number
}

interface PaginationOptions {
    length: number
    pageSize: number
    currentPage: number
    pageSizeOptions: number[]
    totalRecords: number
}

interface PageParams {
    page: number
    limit: number
    orderBy: QueryOrderBy[]
}

interface PageContent {
    title: string
    body: string
}

type PageToQueryParams = Merge<
    Omit<PageParams, 'page'>,
    {
        offset: number
        timezone: string
        dateFormat: string
    }
>
