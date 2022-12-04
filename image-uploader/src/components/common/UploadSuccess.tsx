import { useContext } from "react"
import { UploadContext } from "../../context/UploadContext"
import { useClipboard } from "../../hooks/useClipboard"
import Button from "./Button"

const UploadSuccess: React.FC = ({

}) => {
    const {
        uploadedResultUrl,
        isUploadError
    } = useContext(UploadContext)

    const {
        write: copyToClipboard
    } = useClipboard()

    const handleClipboardCopy = async () => await copyToClipboard(uploadedResultUrl as string)

    return (
        <div className='flex flex-col space-y-3 items-center'>
            <img 
                src={uploadedResultUrl}
                width={500}
                height={250}
            />
            <Button 
                text='Copy'
                onClick={handleClipboardCopy}
            />
        </div>
    )
}

export default UploadSuccess