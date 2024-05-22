import Counter from "../ui/counter";

export default function CounterStat() {
    return (
        <div className="flex items-center dark:text-white">
            <div className="flex flex-col gap-2 justify-center items-center p-4 shadow dark:shadow-white dark:shadow-sm">
                <Counter className="text-blue-700 text-2xl" value={129} />
                <span className="font-bold"><span className="text-blue-600">Concepts</span> to Practice</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center p-4 shadow dark:shadow-white dark:shadow-sm">
                <Counter className="text-blue-700 text-2xl" speed={20} value={201} />
                <span className="font-bold "><span className="text-blue-600">People</span> have used</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center p-4 shadow dark:shadow-white dark:shadow-sm">
                <Counter className="text-blue-700 text-2xl" speed={18} value={207} />
                <span className="font-bold"><span className="text-blue-600">Quizzes</span> to Play</span>
            </div>
        </div>
    )
}
