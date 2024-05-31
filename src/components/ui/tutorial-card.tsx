import Button from "./button";

export default function TutorialCard({ handleWatch, videoId }: { handleWatch: () => void, videoId: string }) {
  return (
    <div className="p-2 rounded border dark:border-gray-700 shadow min-w-[100px]">
      <h3 className="font-bold text-lg dark:text-white">Javascript Tutorial</h3>
      <div className={`w-full rounded bg-cover bg-[url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')] h-[120px] md:h-[200px]`}></div>
      <div onClick={handleWatch} className="mt-2">
        <Button className="w-full">Watch</Button>
      </div>
    </div>
  )
}
