import { useContext } from "react"
import { UploadContext } from "../../context/UploadContext"
import ImagePreview from "../common/ImagePreview"
import ImageUploadingLoader from "../common/ImageUploadingLoader"
import UploadSuccess from "../common/UploadSuccess"

const ImageUploadScreen = () => {
    const {
        isUploading,
        isUploaded
    } = useContext(UploadContext)

    return (
        <div className='w-full h-full items-center flex flex-col'>

            {!isUploading ?
            <ImageUploadingLoader /> :
            
            isUploaded ?
            <UploadSuccess /> :
            
            <ImagePreview />}

        </div>
    )
}

export default ImageUploadScreen