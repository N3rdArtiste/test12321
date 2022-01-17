/* SystemJS module definition */
declare let module: NodeModule
interface NodeModule {
    id: string
}

/* Declare global window */
declare let window: Window
interface Window {
    env: any
}
