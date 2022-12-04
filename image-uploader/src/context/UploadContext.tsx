import { createContext, useState } from "react"
import { upload } from "../api/imageUpload"
import { createObjectUrl } from "../utils/createObjectUrl"

interface UploadContextState {
    currentImage: File | undefined
    isUploading: boolean
    isUploadError: boolean
    uploadError: string | undefined,
    isUploaded: boolean
    uploadedResultUrl: string | undefined
}

interface UploadContextActions {
    setCurrentImage: (file: File) => void
    setIsUploading: (bool: boolean) => void
    setIsUploadError: (bool: boolean) => void
    setUploadError: (error: string) => void 
    setIsUploaded: (bool: boolean) => void
    handleUpload: (file: File | undefined) => Promise<void>
    setUploadResultUrl: (url: string| undefined) => void 
    resetState: () => void
}

export const UploadContext = createContext<UploadContextState & UploadContextActions>({} as UploadContextActions & UploadContextState)

export const UploadProvider: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
    children
}) => {
    
    const [currentImage, setCurrentImage] = useState<File | undefined>(undefined)
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [isUploadError, setIsUploadError] = useState<boolean>(false)
    const [uploadError, setUploadError] = useState<string>('')
    const [isUploaded, setIsUploaded] = useState<boolean>(false)
    const [uploadedResultUrl, setUploadResultUrl] = useState<string | undefined>(undefined)

    const handleUpload = async (file: File | undefined) => {
        if (!file) return 
        const url = createObjectUrl(file)
        if (!url) return
        setIsUploading(true)
        const result = await upload(url)
        if (!result) {
            setIsUploadError(true)
        }
        setUploadResultUrl(result.url)
        setIsUploading(false)
        setIsUploaded(true)
    } 

    const resetState = () => {
        setCurrentImage(undefined)
        setIsUploading(false)
        setIsUploaded(false)
        setIsUploadError(false)
        setUploadError('')
        setUploadResultUrl(undefined)
    }

    return (
        <UploadContext.Provider value={{
            currentImage,
            setCurrentImage,
            isUploadError,
            uploadError,
            setIsUploadError,
            setUploadError,
            setIsUploading,
            isUploading,
            isUploaded,
            setIsUploaded,
            handleUpload,
            setUploadResultUrl,
            uploadedResultUrl,
            resetState
        }}>
            { children }
        </UploadContext.Provider>
    )
}