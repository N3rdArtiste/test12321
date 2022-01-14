declare type Merge<T, U> = Omit<T, keyof U> & U

declare interface ObjectValue<T = any> {
    [key: string]: T
}
