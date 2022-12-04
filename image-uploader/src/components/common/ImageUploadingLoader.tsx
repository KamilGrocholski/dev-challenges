const ImageUploadingLoader = () => {
    return (
        <div
            className='w-64 px-8 py-12 flex flex-col space-y-3'
        >
            <p className='font-semibold text-xl text-center'>Uploading...</p>
            <div className='w-24 h-2 rounded-md flex items-center flex-col'>
                <div className='w-24 h-full bg-blue-500 rounded-md animate-bounce-horizontal'></div>
            </div>
        </div>
    )
}

export default ImageUploadingLoader