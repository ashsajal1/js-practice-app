import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizProps } from "../../lib/qna";
import Timer from "./timer";
import { cn } from "../../lib/cn";

// define submissionTimeout variable to hold the timeout ID
let submissionTimeout: ReturnType<typeof setTimeout>;

export default function QuizCard({ quiz, question, uniqueKey }: { quiz: QuizProps, question: string, uniqueKey: string | number }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const navigate = useNavigate();

    const handleConfirm = () => {
        clearTimeout(submissionTimeout); // clear the previous timeout
        navigate('/result', {
            state: { question: question }
        });
    };

    const handleQuizSubmit = () => {
        if (selectedOption === quiz.answer) {
            setIsRightAnswer(true);
        }
        setHasSubmitted(true);
        // clear any existing timeout before setting a new one
        clearTimeout(submissionTimeout);
        submissionTimeout = setTimeout(() => {
            navigate('/result', {
                state: { question: question }
            });
        }, 5000);
    };

    if (hasSubmitted) {
        return (
            <div key={uniqueKey} className={`p-4 rounded border shadow ${isRightAnswer ? 'bg-green-200' : 'bg-red-200'}`}>
                <p className="text-lg font-medium my-2">{quiz.question}</p>
                {quiz.options.map((i) => (
                    <p key={i} className={cn(`p-2 text-black border rounded mb-2 cursor-pointer select-none ${quiz.answer === i ? 'bg-green-600' : ''} ${selectedOption === quiz.answer && selectedOption === i ? 'bg-green-600' : ''} ${isRightAnswer && selectedOption !== i ? 'border border-black text-black dark:border-gray-800' : ''} ${!isRightAnswer && selectedOption === i ? 'bg-red-600' : ''} ${!isRightAnswer && selectedOption !== i ? 'border border-white text-black dark:border-gray-800' : ''}`)}>{i}</p>
                ))}
                <div onClick={handleConfirm} className="btn w-full">Confirm or <Timer />/5</div>
            </div>
        );
    }

    return (
        <div key={uniqueKey} className="p-4 rounded border shadow dark:border-gray-600">
            <p className="text-lg font-medium my-2 dark:text-white">{quiz.question}</p>
            {quiz.options.map((i) => (
                <p key={i} onClick={() => setSelectedOption(i)} className={cn(`p-2 border rounded mb-2 cursor-pointer select-none dark:border-gray-800 dark:text-white ${selectedOption === i ? 'border-blue-700 dark:border-blue-800' : ''}`)}>{i}</p>
            ))}
            <button onClick={handleQuizSubmit} className="btn w-full">Submit</button>
        </div>
    );
}
