type ErrorPageType = 'AppError' | 'HttpError' | 'InternalServerError' | 'BadRequest' | 'Forbidden' | 'NotFound'

type SomeError = Error & { frame?: string } & { loc?: object }

declare interface ErrorPayload {
    status: number
    error: SomeError
}

interface ErrorPageInfo {
    code: string
    message: string
}
