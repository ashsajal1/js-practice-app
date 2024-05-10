import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { QuizProps } from "../../lib/qna";

export default function QuizCard({ quiz, question }: { quiz: QuizProps, question: string }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [isRightAnswer, setIsRightAnswer] = useState(false)
    const navigate = useNavigate();
    const handleQuizSubmit = () => {
        if(selectedOption === quiz.answer) {
            setIsRightAnswer(true)
        }
        setHasSubmitted(true)
        setTimeout(() => {
            navigate('/result', {
                state: { question: question }
            })
        }, 2000 * 200);
        
    }

    if (hasSubmitted) {
        return (<>
        <div className={`p-4 rounded border shadow ${isRightAnswer ? 'bg-green-200':'bg-red-200'}`}>
            <p className="text-lg font-medium my-2">{quiz.question}</p>
            {quiz.options.map((i) => (
                <>
                    <p className={`p-2 border rounded mb-2 cursor-pointer select-none ${quiz.answer === i ? 'bg-green-600':''} ${selectedOption === quiz.answer && selectedOption === i ? 'bg-green-600' : ''} ${isRightAnswer && selectedOption !== i? 'border border-white text-black dark:text-white dark:border-gray-800':''} ${!isRightAnswer && selectedOption === i? 'bg-red-600':''} ${!isRightAnswer && selectedOption !== i? 'border border-white text-black dark:text-white dark:border-gray-800':''}`}>{i}</p>
                </>
            ))}
            <button onClick={handleQuizSubmit} className="btn w-full">Submit</button>
        </div>
        </>)
    }

    return (
        <div className="p-4 rounded border shadow dark:border-gray-600">
            <p className="text-lg font-medium my-2 dark:text-white">{quiz.question}</p>
            {quiz.options.map((i) => (
                <>
                    <p onClick={() => setSelectedOption(i)} className={`p-2 border rounded mb-2 cursor-pointer select-none dark:border-gray-800 dark:text-white ${selectedOption === i ? 'border-blue-700 dark:border-blue-700' : ''}`}>{i}</p>
                </>
            ))}
            <button onClick={handleQuizSubmit} className="btn w-full">Submit</button>
        </div>
    )
}
