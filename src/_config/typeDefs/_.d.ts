/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
namespace App {
    interface Locals {}

    interface Platform {}

    interface Session {
        directusURL: string
    }

    interface Stuff {
        getOperationStore: (queryDocument: DocumentNode, variables?: Object) => Promise<OperationStore>
    }
}

type Load = import('@sveltejs/kit').Load
type OperationStore = import('@urql/svelte').OperationStore
type Client = import('@urql/svelte').Client
type GetSession = import('@sveltejs/kit').GetSession
