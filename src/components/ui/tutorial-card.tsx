import Button from "./button";

export default function TutorialCard() {
    return (
        <div className="p-2 rounded border dark:border-gray-700 shadow min-w-[40px]">
            <h3 className="font-bold text-lg dark:text-white">Javascript Tutorial</h3>
            <div className="w-full bg-gray-600 h-[120px]"></div>
            <div className="mt-2">
                <Button className="w-full">Watch</Button>
            </div>
        </div>
    )
}
