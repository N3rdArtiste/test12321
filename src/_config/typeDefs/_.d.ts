/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
    interface Locals {}

    interface Platform {}

    interface Session {}

    interface Stuff {
        getOperationStore: (queryDocument: DocumentNode, variables: Object | undefined) => Promise<OperationStore>
    }
}

type Load = import('@sveltejs/kit').Load
type OperationStore = import('@urql/svelte').OperationStore
type Client = import('@urql/svelte').Client
