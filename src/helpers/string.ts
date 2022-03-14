export const getDirectusAssetLink = (directusURL: string, filename_disk: string | null | undefined): string => {
    if (!filename_disk) return ''
    return `${directusURL}/assets/${filename_disk}`
}
