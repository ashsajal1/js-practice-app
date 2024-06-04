import { CiFaceMeh } from "react-icons/ci";

export default function NoQuestion() {
    return (
        <div className='flex items-center flex-col justify-center m-12 dark:text-gray-600'>
            <h1 className='text-xl font-extralight'>
                No question found. Select Topic!
            </h1>
            <span className='mt-6'>
                <CiFaceMeh className='h-12 w-12' />
            </span>
        </div>
    )
}
