import { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "ghost" | "outline" | "danger" | "danger-outline";
}

export default function Button({ children, variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {

    const { className } = props;

    const buttonStyles = "p-2 rounded text-white flex items-center justify-center cursor-pointer select-none";
    const solidStyle = 'bg-gradient-to-br from-blue-600 to-blue-900 hover:to-blue-950 active:ring text-white dark:text-white'
    const ghostStyle = "text-white hover:bg-slate-50 dark:hover:bg-gray-800"
    const outlineStyle = "border border-blue-600 dark:border-blue-800 text-blue-600 hover:bg-blue-100 hover:text-blue-700 bg-opacity-90 backdrop-blur-xl"
    const dangerStyle = 'bg-red-600 hover:bg-red-700';
    const dangerOutlineStyle = 'border bg-white dark:bg-black border-red-600 text-red-600 hover:bg-red-200 hover:text-red';

    return (
        <button
            {...props}
            className={cn(buttonStyles, className, {[solidStyle]:variant==='solid', [dangerStyle]: variant === 'danger', [dangerOutlineStyle]: variant === 'danger-outline', [ghostStyle]: variant === "ghost", [outlineStyle]: variant === "outline" })}
        >
            {children}
        </button>
    );
}