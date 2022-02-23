/* SystemJS module definition */
let module: NodeModule
interface NodeModule {
    id: string
}

/* global window */
let window: Window
interface Window {
    env: any
    app_id?: string
    distribution_key?: string
}
