import { useNavigate } from "react-router-dom";
import TutorialCard from "../components/ui/tutorial-card";
import { jsTutorials } from "../lib/tutorials/js";

export default function Tutorial() {
    const navigate = useNavigate()
    const handleWatch = (id: string) => {
        navigate(`/watch?id=${id}`)
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl g-text font-bold text-center py-2 border-b border-b-blue-600 mb-4">Explore Video Tutorials</h1>

            <section className="grid grid-cols-3 gap-2">
                {jsTutorials.map(video => (
                    <TutorialCard videoId={video.videoId} handleWatch={() => handleWatch(video.videoId)} />
                ))}

            </section>
        </div>
    )
}
