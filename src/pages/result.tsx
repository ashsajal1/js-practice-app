import { Link, useLocation } from "react-router-dom";
import SocialMedia from "../components/ui/social-media";
import SuggestedCard from "../components/ui/suggested-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getRandomSort } from "../lib/random";

export default function Result() {
    const location = useLocation();
    let content;
    // console.log(location.state)
    const concepts = useTypedSelector(state => state.concept.concepts.filter(i => i.topic === location.state.topic).slice(0,10).sort(getRandomSort))
    if (location.state?.question) {
        const question = location.state?.question;
        content = <>
            <h1 className="g-text font-extralight text-3xl p-6 text-center">You have completed "{question}" question.</h1>

            <SocialMedia question={question} />
        </>
    } else {
        content = <>
            <h1 className="p-4 text-center text-2xl dark:text-white">You didn't complete the question.</h1>
            <div className="flex items-center justify-center">
                <Link className="btn" to='/'>Start practicing</Link>
            </div>
        </>
    }
    return (
        <AnimatedPage>
            <div className="h-screen m-auto">
                {content}

                <div className="p-4">
                    <p className="my-2 font-bold g-text">Suggested</p>
                    <div className="flex items-center justify-between w-auto gap-2 overflow-x-scroll scrollbar-thumb-blue-700 scrollbar-thin scrollbar-w-1">
                        {concepts.map(i => (
                            <SuggestedCard key={i.id} id={i.id} question={i.question} answer={i.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}
