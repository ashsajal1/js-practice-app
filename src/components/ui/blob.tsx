import { cn } from "../../lib/cn";

export default function Blob({ ...props }) {
    const { className } = props
    return (
        <>
            <div {...props} className={cn("h-[400px] w-[400px] blur-3xl bg-gradient-to-br from-blue-50 to-blue-100 rounded-full absolute -z-10 dark:hidden", className)}></div>

        </>
    )
}
