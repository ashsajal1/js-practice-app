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
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../components/ui/button';
import { getRandomSort } from '../lib/random';
import { CiCircleInfo, CiFaceMeh } from 'react-icons/ci';

export default function Quiz() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { quizzes, loading, error } = useTypedSelector((state) => state.quiz);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCompletedCurrentQuiz, setIsCompletedCurrentQuiz] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestionType[]>([]);
    const [currentTopics, setCurrentTopics] = useState<string[]>([]);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang') || '';

    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);

    useEffect(() => {
        setQuizQuestions(quizzes.filter(quiz => quiz.lang.toLowerCase().includes(lang.toLowerCase())));
    }, [quizzes, lang]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    useEffect(() => {
        if (preRef.current && currentQuestion?.code) {
            hljs.highlightElement(preRef.current);
        }
    }, [currentQuestion?.code]);

    const playTone = useCallback((frequency: number) => {
        const audioContext = audioContextRef.current;
        if (audioContext) {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    }, []);

    const playSubmitTone = useCallback(() => {
        playTone(880);
    }, [playTone]);

    const playOptionTone = useCallback(() => {
        playTone(440);
    }, [playTone]);

    const handleNextQuestion = useCallback(() => {
        playSubmitTone()
        setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % quizQuestions.length);
        setIsCompletedCurrentQuiz(false);
        setIsRightAnswer(false);
        setSelectedOption('');
    }, [playSubmitTone, quizQuestions.length]);

    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Create a single AudioContext instance
        if (audioContextRef.current === null) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return () => {
            // Cleanup AudioContext on component unmount
            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (currentTopics && currentTopics.length > 0) {
            const newQuiz = quizzes.filter(quiz => {
                return currentTopics.some(topic => quiz.topic.includes(topic) || quiz.lang.toLowerCase().includes(topic.toLowerCase()));
            });

            // console.log(newQuiz);

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
                <div className='grid place-items-center pt-12 px-4 md:p-12 pb-24'>
                    <div className="w-full md:w-1/2 border dark:border-gray-800 p-6 md:p-4 rounded">
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
                        <AnimatePresence mode='wait'>
                            {
                                currentQuestion.explanation &&
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className='my-6 border-t pt-4 dark:text-white dark:border-t-gray-700'><span className='font-bold text-blue-600'>Explanation :</span> {currentQuestion.explanation}</motion.div>

                            }
                        </AnimatePresence>
                    </div>

                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div onClick={() => setIsTooltipVisible(false)} className='p-4 flex flex-col items-center gap-4 w-full'>
                <h2 className='dark:text-white font-bold text-xl'>Select Topic : </h2>
                <div className='flex items-center gap-2 overflow-x-scroll w-full scrollbar-thumb-blue-600 scrollbar-track-blue-600'>
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
                                    <p className='text-sm dark:text-white'>{currentQuestion.hint}</p>
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
                            <span> {currentQuestion.lang}</span>
                        </p>

                        {currentQuestion.topic && <p className='py-2 text-sm font-extralight dark:text-white'>
                            <span className='font-bold'>Topic :</span>
                            <span> {currentQuestion.topic}</span>
                        </p>}

                        {currentQuestion.complexity && <p className='py-2 text-sm font-extralight dark:text-white'>
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

            {quizQuestions.length === 0 && <div className='flex items-center flex-col justify-center m-12 dark:text-gray-600'>
                <h1 className='text-xl font-extralight'>
                    No question found. Select Topic!
                </h1>
                <span className='mt-6'>
                    <CiFaceMeh className='h-12 w-12' />
                </span>
            </div>}
        </AnimatedPage>
    );
}
