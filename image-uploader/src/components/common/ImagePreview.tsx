import { DragEvent, MouseEvent, FormEvent, useRef, useState, useContext } from "react"
import { upload } from "../../api/imageUpload"
import { UploadContext } from "../../context/UploadContext"
import { createObjectUrl } from "../../utils/createObjectUrl"
import Button from "./Button"

const ImagePreview: React.FC = () => {
    const { 
        currentImage, 
        setCurrentImage,
        handleUpload
    } = useContext(UploadContext)

    const inputFileRef = useRef<HTMLInputElement | null>(null)
    const [isDragOver, setIsDragOver] = useState<boolean>(false)

    // Handles onDragEnter, onDragLeave, onDragOver
    const handleOnDrag = (e: DragEvent<HTMLDivElement | HTMLFormElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragOver(true)
        } else if (e.type === 'dragleave') {
            setIsDragOver(false)
        }
    }

    // Set currentImage and isDragOver:false
    const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(false)
        handleSetCurrentImage(e.dataTransfer.files)
    }

    // Clicking 'Choose a file' button simulates by ref input:file click
    const handleChooseFile = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!inputFileRef.current) {
            throw new Error("Couldn't invoke input-file-upload by clicking!")
        }
        inputFileRef.current.click()
    }

    // Checks whether files and files[0] exist and, if so, sets currentImage
    const handleSetCurrentImage = (files: FileList | null) => {
        if (!files || !files[0]) return 
        setCurrentImage(files[0])
    }

    // Set currentImage by choosing a file
    const handleInputFileOnChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        handleSetCurrentImage(e.currentTarget.files)
    }

    const handleUploadDecorative = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleUpload(currentImage)
    }

    return (
        <div 
            className='border border-dashed rounded-md'
        >
            <form
                onSubmit={handleUploadDecorative}
                id='form-file-upload'
                onDragEnter={handleOnDrag}
            >
                <input 
                    ref={inputFileRef}
                    onChange={handleInputFileOnChange}
                    type='file'
                    id='input-file-upload'
                    className='hidden-input'
                    accept="image/*"
                />
                <label 
                    htmlFor="input-file-upload"
                >
                    <div className='flex flex-col space-y-3 items-center'>
                        <h1>Upload your image</h1>
                        <h2>File should be Jpeg, Png...</h2>
                        {currentImage ? 
                        <Button 
                            text='Upload'
                            type='submit'
                        /> :
                        null}
                        <div className={ `flex flex-col space-y-3 p-3 items-center ${isDragOver ? 'bg-blue-500/20' : 'bg-gray-800'}` }>
                            <div 
                                className={ `flex flex-col space-y-3 items-center`}
                                onDrop={handleOnDrop}
                                onDragEnter={handleOnDrag}
                                onDragLeave={handleOnDrag}
                                onDragOver={handleOnDrag}
                            >
                                <img 
                                    src={createObjectUrl(currentImage)}
                                    width={500}
                                    height={250}
                                />
                            </div>
                            <p>Drag & Drop your image here</p>
                        </div>
                        
                        <div className='flex flex-col space-y-3 items-center justify-center p-3'>
                            <p>Or</p>
                            <Button 
                                text='Choose a file'
                                onClick={handleChooseFile}
                            />
                        </div>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default ImagePreview