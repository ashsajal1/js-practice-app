import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect, useRef, useState } from "react";
import { cn } from '../lib/cn';
import AnimatedPage from '../components/ui/animated-page';
import { QuizQuestionType } from '../lib/quizzes/types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAllQuiz } from '../features/quiz/quizSlice';
import { useLocation } from 'react-router-dom';

export default function Quiz() {
    const location = useLocation();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes, loading, error } = useTypedSelector((state) => state.quiz);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null);
    const [isCompletedCurrentQuiz, setIsCompletedCurrentQuiz] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang') || '';
    const quizQuestions = quizzes.filter(quiz => quiz.lang.toLowerCase().includes(lang.toLowerCase()))

    const preRef = useRef<HTMLPreElement>(null);

    // console.log(lang)

    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);

    useEffect(() => {
        if (preRef.current) {
          hljs.highlightElement(preRef.current);
        }
      }, [currentQuestionIndex, currentQuestion?.code]);

    // console.log(quizQuestions)

    useEffect(() => {
        if (quizQuestions.length > currentQuestionIndex) {
            setCurrentQuestion(quizQuestions[currentQuestionIndex]);
        } else {
            setCurrentQuestionIndex(0);
            setCurrentQuestion(quizQuestions[0]);
        }
    }, [currentQuestionIndex, quizQuestions]);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setIsCompletedCurrentQuiz(false);
        setIsRightAnswer(false);
        setSelectedOption('');
    };

    const handleSubmit = () => {
        setIsCompletedCurrentQuiz(true);
        setIsRightAnswer(currentQuestion?.answer === selectedOption);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isCompletedCurrentQuiz) {
        return (
            <AnimatedPage>
                <div className='grid place-items-center pt-12 px-4 md:p-12 pb-24'>
                    <div className="w-full md:w-1/3 border dark:border-gray-800 p-6 md:p-4 rounded">
                        <div className={`p-4 rounded border shadow ${isRightAnswer ? 'bg-green-200' : 'bg-red-200'}`}>
                            <p className="text-lg font-medium my-2">{currentQuestion?.question}</p>
                            {currentQuestion?.options?.map((option, index) => (
                                <p
                                    key={index}
                                    className={`p-2 text-black border border-black rounded mb-2 cursor-pointer select-none
                                        ${currentQuestion.answer === option ? 'bg-green-600' : ''}
                                        ${selectedOption === currentQuestion.answer && selectedOption === option ? 'bg-green-600' : ''}
                                        ${!isRightAnswer && selectedOption === option ? 'bg-red-600' : ''}`}
                                >
                                    {option}
                                </p>
                            ))}
                        </div>
                        <div className='btn mt-2' onClick={handleNextQuestion}>Practice next</div>
                    </div>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div className='grid place-items-center pt-12 px-4 md:p-12 pb-24'>
                <div className="w-full md:w-1/3 border dark:border-gray-800 p-6 md:p-4 rounded">
                    <p className='dark:text-white'>{currentQuestion?.question}</p>
                    <p className='py-2 text-sm font-extralight dark:text-white'>
                        Type: <span className='text-sm bg-blue-300 rounded p-1 text-blue-600'>{currentQuestion?.type}</span>
                    </p>
                    <pre ref={preRef} className={`text-wrap ${currentQuestion?.code? '':'hidden'}`}><code>{currentQuestion?.code}</code></pre>
                    <div>
                        {currentQuestion?.options?.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedOption(option)}
                                className={cn(`p-2 dark:text-white select-none cursor-pointer rounded border my-1 dark:border-gray-800 
                                    ${selectedOption === option ? 'border-blue-600 dark:border-blue-600' : ''}`)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    <div onClick={handleSubmit} className="btn">Submit</div>
                </div>
            </div>
        </AnimatedPage>
    );
}