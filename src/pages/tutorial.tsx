import TutorialCard from "../components/ui/tutorial-card";

export default function Tutorial() {
    return (
        <div className="p-4">
            <h1 className="text-2xl g-text font-bold text-center py-2 border-b border-b-blue-600 mb-4">Explore Video Tutorials</h1>

            <section className="grid grid-cols-3 gap-2">
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
            </section>
        </div>
    )
}
