import { cn } from "../../lib/cn";

export default function Blob({ ...props }) {
    const { className } = props
    return (
        <>
            <div {...props} className={cn("h-[400px] w-[400px] backdrop-blur-3xl blur-3xl bg-gradient-to-br from-blue-100 to-blue-200 rounded-full absolute -z-10", className)}></div>

        </>
    )
}
