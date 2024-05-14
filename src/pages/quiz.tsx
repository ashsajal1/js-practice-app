// import QuizQuestion from "../components/ui/quiz-question";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect, useState } from "react";
import { QuizQuestionType, quizQuestions } from '../lib/quiz';

export default function Quiz() {
    const [currentQuestinIndex, setCurrentQuestinIndex] = useState(0);
    const [curretnQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null)
    const [isCompletedCurrentQuiz, setIsCompletedCurrentQuiz] = useState(false)
    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            if (block instanceof HTMLElement) {
                hljs.highlightBlock(block);
            }
        });
    }, []);

    useEffect(() => {
        setCurrentQuestion(quizQuestions[currentQuestinIndex])
    }, [currentQuestinIndex]);

    if (isCompletedCurrentQuiz) {
        return <>
            <h1>You have completed {currentQuestinIndex + 1} question!</h1>
            <div className='btn' onClick={() => {setCurrentQuestinIndex(prevIndex => prevIndex + 1); setIsCompletedCurrentQuiz(false)}}>Practice next</div>
        </>
    }

    return (
        <>
            <div>
                <div className="w-full md:w-1/3 border p-6 md:p-4 rounded">
                    <p>{curretnQuestion?.question}</p>

                    {curretnQuestion?.code && <pre><code>{curretnQuestion.code}</code></pre>}

                    <div>
                        {curretnQuestion?.options?.map(i => <div className="p-2 rounded border my-1">{i}</div>)}
                    </div>

                    <div onClick={() => { setIsCompletedCurrentQuiz(true) }} className="btn">Submit</div>
                </div>
            </div>
        </>
    )
}
