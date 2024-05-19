import { useState } from 'react';
import Message from '../components/ui/message';

export default function Interview() {
    const [messages, setMessages] = useState<{ user: string; text: string; options?: string[] }[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const quizQuestions = [
        {
            text: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctOption: 2
        },
        {
            text: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctOption: 1
        }
    ];

    const startQuiz = () => {
        if (quizQuestions.length > 0) {
            const firstQuestion = quizQuestions[0];
            setMessages([{ user: 'Robot', text: firstQuestion.text, options: firstQuestion.options }]);
            setCurrentQuestionIndex(0);
            setScore(0);
        }
    };

    const handleOptionSelect = (index: number) => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const isCorrect = index === currentQuestion.correctOption;
        const feedback = isCorrect ? "Correct!" : `Incorrect. The correct answer was "${currentQuestion.options[currentQuestion.correctOption]}"`;
        const newScore = isCorrect ? score + 1 : score;
        const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

        const newMessages = [
            ...messages,
            { user: 'User', text: `Option ${index + 1}: ${currentQuestion.options[index]}` },
            { user: 'Robot', text: feedback }
        ];

        if (isLastQuestion) {
            newMessages.push({ user: 'Robot', text: `Quiz finished! Your score: ${newScore}/${quizQuestions.length}` });
        } else {
            const nextQuestion = quizQuestions[currentQuestionIndex + 1];
            newMessages.push({ user: 'Robot', text: nextQuestion.text, options: nextQuestion.options });
        }

        setMessages(newMessages);
        setScore(newScore);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="p-4 w-full">
            <div className="mb-4 flex flex-col gap-2 w-full">
                {messages.map((message, index) => (
                    <div key={index} className={`flex w-full ${message.user === 'User' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-2 w-3/4 ${message.user === 'User' ? 'items-end' : 'items-start'}`}>
                            {message.user === 'Robot' && (
                                <div className="flex items-center justify-center w-[40px] h-[40px] p-1 bg-black rounded-full"></div>
                            )}
                            <div className="w-full">
                                <Message text={message.text} />
                                {message.options && (
                                    <div className="flex gap-2 flex-wrap">
                                        {message.options.map((option, optionIndex) => (
                                            <button
                                                key={optionIndex}
                                                className="border p-2 mt-2"
                                                onClick={() => handleOptionSelect(optionIndex)}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {message.user === 'User' && (
                                <div className="w-[40px] h-[40px] p-1 bg-black rounded-full"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex">
                {messages.length === 0 && <button className="border p-2 ml-2" onClick={startQuiz}>Start Quiz</button>}
            </div>
        </div>
    );
}
