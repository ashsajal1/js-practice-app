import useSearchParams from "../hooks/useSearchParams"

export default function Watch() {
    const searchParams = useSearchParams()
    const id = searchParams.getParam('id')
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
