export const useClipboard = () => {
    const write = async (text: string) => {
        if (!navigator.clipboard) return document.execCommand('copy', true, text)

        return await navigator.clipboard.writeText(text)
    }

    const read = async () => {
        if (!navigator.clipboard) return 
        return await navigator.clipboard.readText()
    }

    return {
        write,
        read
    }
}