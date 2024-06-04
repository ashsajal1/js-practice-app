import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from '../lib/cn';
import AnimatedPage from '../components/ui/animated-page';
import { QuizQuestionType } from '../lib/quizzes/types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAllQuiz } from '../features/quiz/quizSlice';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/button';
import { getRandomSort } from '../lib/random';
import { CiCircleInfo } from 'react-icons/ci';
import NoQuestion from '../components/partials/no-question';
import useAudio from '../hooks/useAudio';
import CompletedQuiz from '../components/partials/completed-quiz';

export default function Quiz() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { quizzes, loading, error } = useTypedSelector((state) => state.quiz);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null);
    const [isCompletedCurrentQuiz, setIsCompletedCurrentQuiz] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestionType[]>([]);
    const [currentTopics, setCurrentTopics] = useState<string[]>([]);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang') || '';
    const { playOptionTone, playSubmitTone } = useAudio();

    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);

    useEffect(() => {
        setQuizQuestions(quizzes.filter(quiz => quiz.lang.toLowerCase().includes(lang.toLowerCase())));
    }, [quizzes, lang]);

    useEffect(() => {
        setCurrentQuestion(quizQuestions[currentQuestionIndex] || null);
    }, [quizQuestions, currentQuestionIndex]);

    useEffect(() => {
        if (preRef.current && currentQuestion?.code) {
            hljs.highlightElement(preRef.current);
        }
    }, [currentQuestion?.code]);

    const handleNextQuestion = useCallback(() => {
        playSubmitTone();
        setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % quizQuestions.length);
        setIsCompletedCurrentQuiz(false);
        setIsRightAnswer(false);
        setSelectedOption('');
    }, [playSubmitTone, quizQuestions.length]);

    useEffect(() => {
        if (currentTopics && currentTopics.length > 0) {
            const newQuiz = quizzes.filter(quiz => {
                return currentTopics.some(topic => quiz.topic.includes(topic) || quiz.lang.toLowerCase().includes(topic.toLowerCase()));
            });

            setQuizQuestions(newQuiz.sort(getRandomSort));
        }
    }, [currentTopics, quizzes]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        playOptionTone();
    };

    const handleSubmit = useCallback(() => {
        setIsCompletedCurrentQuiz(true);
        setIsRightAnswer(currentQuestion?.answer === selectedOption);
        playSubmitTone();
    }, [currentQuestion?.answer, playSubmitTone, selectedOption]);

    const topics = ['Golang', 'Rust', 'Dotnet', 'React', 'Javascript', 'Angular'];

    const toggleTopic = (topic: string) => {
        setCurrentTopics(prevTopics =>
            prevTopics.includes(topic) ? prevTopics.filter(t => t !== topic) : [...prevTopics, topic]
        );
    };

    const toggleTooltip = () => {
        setIsTooltipVisible(prev => !prev);
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
                <CompletedQuiz
                    currentQuestion={currentQuestion}
                    isRightAnswer={isRightAnswer}
                    selectedOption={selectedOption}
                    handleNextQuestion={handleNextQuestion}
                />
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div onClick={() => setIsTooltipVisible(false)} className='p-4 flex flex-col items-center gap-4 w-full'>
                <h2 className='dark:text-white font-bold text-xl'>Select Topic : </h2>
                <div className='flex items-center gap-2 overflow-x-scroll w-full scrollbar-thumb-blue-600 scrollbar-track-blue-600 md:justify-center justify-start'>
                    {topics.map(topic => (
                        <Button
                            key={topic}
                            onClick={() => toggleTopic(topic)}
                            variant={`${currentTopics.includes(topic) ? 'solid' : 'outline'}`}
                        >
                            {topic}
                        </Button>
                    ))}
                </div>
            </div>
            {quizQuestions.length > 0 && <div className='grid place-items-center px-4 md:p-4 md:mb-24 pb-24'>
                <div className="w-full md:w-1/2 border dark:border-gray-800 p-6 md:p-4 rounded">
                    <div className='flex justify-between items-start'>
                        <p className='dark:text-white'>{currentQuestion?.question}</p>
                        <div className='relative'>
                            <CiCircleInfo onClick={toggleTooltip} className='cursor-pointer dark:text-gray-600' />
                            {isTooltipVisible && (
                                <div className='absolute w-[180px] bottom-6 right-0 mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-lg'>
                                    <p className='text-sm dark:text-white'>{currentQuestion?.hint}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <p className='py-2 text-sm font-extralight dark:text-white'>
                            <span className='font-bold'>Type : </span>
                            <span className='text-sm'>{currentQuestion?.type}</span>
                        </p>

                        <p className='py-2 text-sm font-extralight dark:text-white'>
                            <span className='font-bold'>Language :</span>
                            <span> {currentQuestion?.lang}</span>
                        </p>

                        {currentQuestion?.topic && <p className='py-2 text-sm font-extralight dark:text-white'>
                            <span className='font-bold'>Topic :</span>
                            <span> {currentQuestion.topic}</span>
                        </p>}

                        {currentQuestion?.complexity && <p className='py-2 text-sm font-extralight dark:text-white'>
                            <span className='font-bold'>Complexity :</span>
                            <span> {currentQuestion.complexity}</span>
                        </p>}
                    </div>
                    <pre ref={preRef} className={`text-wrap p-2 ${currentQuestion?.code ? '' : 'hidden'}`}><code>{currentQuestion?.code}</code></pre>
                    <div>
                        {currentQuestion?.options?.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={cn(`p-2 dark:text-white select-none cursor-pointer rounded border my-1 dark:border-gray-800 
                                    ${selectedOption === option ? 'border-blue-600 dark:border-blue-600' : ''}`)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    <div onClick={handleSubmit} className="btn">Submit</div>
                </div>
            </div>}

            {quizQuestions.length === 0 && <NoQuestion />}
        </AnimatedPage>
    );
}
