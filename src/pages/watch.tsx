import useSearchParams from "../hooks/useSearchParams"

export default function Watch() {
    const searchParams = useSearchParams()
    const id = searchParams.getParam('id')
    if(!id) {
        return (
            <div className="grid place-items-center p-24">
                <h1 className="text-xl font-bold">Video not found!</h1>
            </div>
        )
    }
    return (
        <div
            className="w-full p-6">
            <iframe
                className="md:w-1/2 w-full rounded h-[340px]"
                src={`https://www.youtube.com/embed/${id}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YT video"
            ></iframe>
        </div>
    )
}
