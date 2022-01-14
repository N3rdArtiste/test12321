declare type ErrorPageType = 'AppError' | 'HttpError' | 'InternalServerError' | 'BadRequest' | 'Forbidden' | 'NotFound'
declare interface ErrorPageInfo {
    code: string
    message: string
}
