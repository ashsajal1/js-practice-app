import { ChangeEvent, useState } from "react"
import { QnaTypes, qna } from "../lib/qna";
import { useNavigate, useParams } from 'react-router-dom'
import { renderAnswer } from "../lib/renderAnswer";
import NotFoundCard from "../components/ui/not-found-card";
import QuizCard from "../components/ui/quiz-card";

export default function Practice() {
    const [char, setChar] = useState('');
    const [showQuiz, setShowQuiz] = useState(false)
    const { questionId } = useParams()
    const navigate = useNavigate()
    let context: QnaTypes | undefined;
    if (questionId) {
        context = qna.filter(i => i.id === parseInt(questionId))[0]
    }

    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChar(e.target.value)
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (context?.quiz) {
            setShowQuiz(true)
        } else {
            navigate('/result', {
                state: { question: context?.question }
            })
        }
    }


    if (context === undefined) {
        return <NotFoundCard content='Question' />
    }

    return (
        <div className="p-12 h-screen">
            <div className={`${showQuiz ? 'hidden' : ''}`}>
                <div data-aos='fade-right' className="dark:text-white mb-2">{context.question}</div>
                <div data-aos='fade-right' className="select-none font-bold md:text-2xl text-xl border dark:border-gray-800 rounded flex-wrap flex p-2 g-text">
                    {renderAnswer(context.answer, char)}
                </div>

                <form data-aos='fade-right' onSubmit={handleSubmit}>
                    <textarea onChange={handlePromptChange} rows={6} placeholder="Enter the answer below" className="p-2 mt-4 w-full rounded border outline-none focus:ring-1 ring-blue-200 focus:border-none dark:bg-black dark:border-gray-600 dark:text-white" />
                    <button className="mt-2 btn w-full" type="submit">Submit</button>
                </form>
            </div>

            <div className={`${showQuiz ? '' : 'hidden'}`}>
                {context?.quiz && (
                    <QuizCard question={context.question} quiz={context.quiz} />
                )
                }
            </div>

        </div>
    )
}
