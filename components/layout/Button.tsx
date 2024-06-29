import React from 'react'

interface ButtonProps{
    label: string,
    secondary?: boolean,
    fullWidth?: boolean,
    large?: boolean,
    onClick : () => void,
    disabled?: boolean,
    outline?: boolean
}

const Button:React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
    return(
        <button
        disabled={disabled}
        onClick={onClick} 
        className={
            `disabled:opacity-70 
            disabled:cursor-not-allowed 
            rounded-full
            font-semibold
            hover:opacity-10
            transition
            ease-linear
            border-2
            ${fullWidth ? 'w-full' : 'w-fit'}
            ${secondary ? 'bg-white' : 'bg-blue-500'}
            ${secondary ? 'text-stone-900' : 'text-white'}
            ${secondary ? 'border-stone-900' : 'border-blue-600'}
            ${large ? 'text-xl' : 'text-md'}
            ${large ? 'py-5' : 'py-4'}
            ${large ? 'py-3' : 'py-2'}
            ${outline ? 'bg-transparent': ''}
            ${outline ? 'text-white' : ''}
            ${outline ? 'outline-white' : ''}
            `
        }
        >
            {label}
        </button>
    )
}

export default Button;