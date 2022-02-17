type Merge<T, U> = Omit<T, keyof U> & U

interface ObjectValue<T = any> {
    [key: string]: T
}

type StandardData = Array<{ src: string; alt: string; href: string }> | undefined

interface SomeObject {
    [key: string]: any
}
