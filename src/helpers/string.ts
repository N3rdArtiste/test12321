import { directusURL } from '_config/constants/directus'

export const getDirectusAssetLink = (filename_disk: string | null | undefined): string => {
    if (!filename_disk) return ''
    return `${directusURL}/assets/${filename_disk}`
}
