import { useNavigate } from "react-router-dom";
import TutorialCard from "../components/ui/tutorial-card";

export default function Tutorial() {
    const navigate = useNavigate()
    const handleWatch = () => {
        navigate(`/watch?id=BVUTkSAf-6w`)
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl g-text font-bold text-center py-2 border-b border-b-blue-600 mb-4">Explore Video Tutorials</h1>

            <section className="grid grid-cols-3 gap-2">
                <TutorialCard videoId="BVUTkSAf-6w" handleWatch={handleWatch} />
            </section>
        </div>
    )
}
