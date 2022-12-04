export const upload = async (imgUrl: string) => {
    await new Promise(resolve => setTimeout(resolve, 5000))
    const result = {
        url: imgUrl
    }
    
    return result
}