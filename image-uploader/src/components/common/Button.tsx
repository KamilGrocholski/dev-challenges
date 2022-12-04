interface ButtonProps {
    text: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    type?: HTMLButtonElement['type']
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick
}) => {
    return (
        <button 
            className='rounded-md bg-blue-500 px-3 py-2 text-center'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button