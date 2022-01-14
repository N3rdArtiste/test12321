/* SystemJS module definition */
declare var module: NodeModule
interface NodeModule {
    id: string
}

/* Declare global window */
declare var window: Window
interface Window {
    env: any
}
