import SocialMedia from "../components/ui/social-media";
import SuggestedCard from "../components/ui/suggested-card";
import { qna } from "../lib/qna";

export default function Result() {
    return (
        <div className="h-screen m-auto">
            <h1 className="g-text font-extralight text-3xl pt-6 text-center">You have completed one Practice.</h1>


            <SocialMedia />

            <div className="p-4">
                <p className="my-2 font-bold g-text">Suggested</p>
                <div className="flex items-center justify-between w-auto gap-2 overflow-x-scroll">
                   {qna.map(i => (
                    <SuggestedCard key={i.id} id={i.id} question={i.question} answer={i.answer} />
                   ))}
                </div>
            </div>
        </div>
    )
}
