import { Link } from "react-router-dom";

export default function SuggestedCard({ id, question, answer }: { id: number | string, question: string, answer: string }) {
    return (
        <Link data-aos='fade-up' to={`/practice?id=${id.toString()}`} className="flex flex-col rounded border text-sm p-2 min-w-[280px] h-[90px]  md:w-[380px] bg-white dark:bg-darkColor dark:border-gray-700 dark:text-white">
            <p className="font-bold">{question.slice(0, 50)}</p>
            <p>{answer.slice(0, 50)}</p>
        </Link>
    )
}
