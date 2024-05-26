import { useEffect, useRef, useState } from 'react';
import Message from '../components/ui/message';
import { AnimatePresence, motion } from "framer-motion";
import Button from '../components/ui/button';
import { getRandomSort } from '../lib/random';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useDispatch } from 'react-redux';
import { getAllQuiz } from '../features/quiz/quizSlice';
import { useTypedSelector } from '../hooks/useTypedSelector';
import useSearchParams from '../hooks/useSearchParams';
import { QuizQuestionType } from '../lib/quizzes/types';

type MessageType = {
    user: string;
    text: string;
    options?: string[];
    answered?: boolean;
    code?: string;
};

export default function Interview() {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isBotWriting, setIsBotWriting] = useState(false);
    const [selectedQuizzes, setSelectedQuizzes] = useState<QuizQuestionType[]>([]);
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const { speak } = useTextToSpeech();
    const dispatch = useDispatch();

    const { getParam } = useSearchParams();
    const lang = getParam('lang');

    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);

    const { quizzes, loading } = useTypedSelector((state) => state.quiz);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].user === "Robot") {
            speak(messages[messages.length - 1].text);
        }
    }, [messages, speak]);

    const startQuiz = () => {
        if (quizzes.length > 0) {
            let filteredQuizzes = [...quizzes];

            if (lang) {
                filteredQuizzes = quizzes.filter((quiz) => quiz.lang.toLowerCase() === lang.toLowerCase());
            }

            if (filteredQuizzes.length === 0) {
                setMessages([{ user: 'Robot', text: `No questions found for language ${lang}. Please select another language.` }]);
                return;
            }
            
            // Limit the number of questions to 5
            const shuffledQuizzes = filteredQuizzes.sort(getRandomSort).slice(0, 5);
            setSelectedQuizzes(shuffledQuizzes);
            const firstQuestion = shuffledQuizzes[0];
            

            setMessages([
                {
                    user: 'Robot',
                    text: firstQuestion.question,
                    options: firstQuestion.options,
                    answered: false,
                    code: firstQuestion.code,
                },
            ]);
            setCurrentQuestionIndex(0);
            setScore(0);
        }
    };

    const handleOptionSelect = (index: number) => {
        if (isBotWriting) return;

        const currentQuestion = selectedQuizzes[currentQuestionIndex];
        const selectedOption = currentQuestion.options ? currentQuestion.options[index] : "";
        const isCorrect = selectedOption === currentQuestion.answer;
        const feedback = isCorrect ? "Correct!" : `Incorrect. The correct answer was "${currentQuestion.answer}"`;
        speak(feedback);
        const newScore = isCorrect ? score + 1 : score;
        const isLastQuestion = currentQuestionIndex === selectedQuizzes.length - 1;

        const updatedMessages = messages.map((message, idx) => (idx === messages.length - 1 ? { ...message, answered: true } : message));

        const newMessages = [
            ...updatedMessages,
            { user: 'User', text: `Option ${index + 1}: ${selectedOption}` },
        ];

        setMessages(newMessages);
        setIsBotWriting(true);

        setTimeout(() => {
            const botMessages: MessageType[] = [{ user: 'Robot', text: feedback }];

            if (isLastQuestion) {
                botMessages.push({ user: 'Robot', text: `Interview finished! Your score: ${newScore}/${selectedQuizzes.length}` });
            } else {
                const nextQuestion = selectedQuizzes[currentQuestionIndex + 1];
                botMessages.push({
                    user: 'Robot',
                    text: nextQuestion.question,
                    options: nextQuestion.options,
                    answered: false,
                    code: nextQuestion.code,
                });
            }

            setMessages([...newMessages, ...botMessages]);
            setScore(newScore);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setIsBotWriting(false);
        }, 1000);
    };

    if (loading) {
        return (
            <div>
                <div>Loading</div>
            </div>
        );
    }

    return (
        <div className="p-4 w-full">
            <div className="mb-4 flex flex-col gap-2 w-full">
                {messages.map((message, index) => (
                    <div key={index} className={`flex w-full ${message.user === 'User' ? 'justify-end my-6' : 'justify-start'}`}>
                        <div className={`flex gap-2 w-full md:w-3/4 ${message.user === 'User' ? 'items-end' : 'items-start'}`}>
                            {message.user === 'Robot' && (
                                <img className="[40px] h-[40px] rounded-full contain-content" src="/image/interviewer.jpg" alt="interviewer" />
                            )}
                            <div ref={lastMessageRef} className="w-full">
                                <Message className={`${message.user === 'Robot' ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-none' : 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white border-none'}`} text={message.text} />
                                {message.code && <pre className="bg-gray-200 text-wrap p-2 mt-2">{message.code}</pre>}

                                <AnimatePresence>
                                    {message.options && !message.answered && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="flex gap-2 flex-wrap"
                                        >
                                            {message.options.map((option, optionIndex) => (
                                                <Button
                                                    variant="outline"
                                                    key={optionIndex}
                                                    className="border p-2 mt-2"
                                                    onClick={() => handleOptionSelect(optionIndex)}
                                                >
                                                    {option}
                                                </Button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {message.user === 'User' && (
                                <img className="[40px] h-[40px] rounded-full" src="/image/user.jpg" alt="user" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full py-24">
                {messages.length === 0 && <Button className="p-4 ml-2" onClick={startQuiz}>Start Interview</Button>}
            </div>
        </div>
    );
}
