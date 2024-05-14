// import QuizQuestion from "../components/ui/quiz-question";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect, useState } from "react";
import { QuizQuestionType, quizQuestions } from '../lib/quiz';

export default function Quiz() {
    const [currentQuestinIndex, setCurrentQuestinIndex] = useState(0);
    const [curretnQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null)
    const [isCompletedCurrentQuiz, setIsCompletedCurrentQuiz] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            if (block instanceof HTMLElement) {
                hljs.highlightBlock(block);
            }
        });
    }, []);

    useEffect(() => {
        if(quizQuestions.length > currentQuestinIndex + 1) {
            setCurrentQuestion(quizQuestions[currentQuestinIndex])
        } else {
            setCurrentQuestinIndex(0)
            setCurrentQuestion(quizQuestions[0])
        }
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
                    <p className='py-2 text-sm font-extralight'>Type : <span className='text-sm bg-blue-300 rounded p-1 text-blue-600'>{curretnQuestion?.type}</span></p>

                    {curretnQuestion?.code && <pre><code>{curretnQuestion.code}</code></pre>}

                    <div>
                        {curretnQuestion?.options?.map(i => <div onClick={() => setSelectedOption(i)} className={`p-2 select-none cursor-pointer rounded border my-1 ${selectedOption === i ? 'border-blue-600':''}`}>{i}</div>)}
                    </div>

                    <div onClick={() => { setIsCompletedCurrentQuiz(true) }} className="btn">Submit</div>
                </div>
            </div>
        </>
    )
}
