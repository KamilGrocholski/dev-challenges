export const createObjectUrl = (file: File | undefined): string | undefined => {
    if (!file) return undefined
    return URL.createObjectURL(file)
}