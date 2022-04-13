import { dev } from '$app/env'

export const getSession: GetSession = () => {
    return {
        directusURL: (dev ? import.meta.env.VITE_DIRECTUS_URL : process.env.DIRECTUSURL) as string,
    }
}
