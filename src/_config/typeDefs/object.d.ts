type Merge<T, U> = Omit<T, keyof U> & U

interface ObjectValue<T = any> {
    [key: string]: T
}

interface SomeObject {
    [key: string]: any
}
