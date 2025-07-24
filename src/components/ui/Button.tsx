import type {ReactNode} from "react";

interface ButtonProps {
    callback?: () => void,
    className?: string,
    children: ReactNode
}

const Button = ({children, callback, className}: ButtonProps) => {
    return (
        <div onClick={callback ?? (() => {})} className={`text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white ${className ?? ''}`}>{children}</div>
    );
};

export default Button;