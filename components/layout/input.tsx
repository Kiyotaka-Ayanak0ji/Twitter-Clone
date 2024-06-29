interface InputProps{
    placeholder: string,
    value?: string,
    type?: string,
    disabled: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
    return(
        <input 
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            className="w-full 
            p-4
            bg-black
            border-2
            text-lg
            border-neutral-800
            rounded-md
            outline-none
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-800
            disabled:opacity-70
            disabled:cursor-not-allowed"
        />
    );
}

export default Input;

