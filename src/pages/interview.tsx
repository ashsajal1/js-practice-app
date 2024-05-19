import { useState } from 'react';
import Message from '../components/ui/message';

export default function Interview() {
    const [messages, setMessages] = useState<{ user: string; text: string; options?: string[]; correctOption?: number }[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<{ text: string; options: string[]; correctOption: number } | null>(null);

    // Initial quiz questions (can be fetched from an API or defined elsewhere)
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
            setCurrentQuestion(firstQuestion);
            setMessages([{ user: 'Robot', text: firstQuestion.text, options: firstQuestion.options, correctOption: firstQuestion.correctOption }]);
        }
    };

    const handleOptionSelect = (index: number) => {
        if (currentQuestion) {
            const isCorrect = index === currentQuestion.correctOption;
            const feedback = isCorrect ? "Correct!" : `Incorrect. The correct answer was "${currentQuestion.options[currentQuestion.correctOption]}"`;
            const newMessages = [
                ...messages,
                { user: 'User', text: `Option ${index + 1}: ${currentQuestion.options[index]}` },
                { user: 'Robot', text: feedback }
            ];
            setMessages(newMessages);

            // Move to the next question
            const nextQuestionIndex = quizQuestions.indexOf(currentQuestion) + 1;
            if (nextQuestionIndex < quizQuestions.length) {
                const nextQuestion = quizQuestions[nextQuestionIndex];
                setTimeout(() => {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { user: 'Robot', text: nextQuestion.text, options: nextQuestion.options, correctOption: nextQuestion.correctOption }
                    ]);
                    setCurrentQuestion(nextQuestion);
                }, 1000);
            } else {
                setTimeout(() => {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { user: 'Robot', text: "Quiz finished!" }
                    ]);
                    setCurrentQuestion(null);
                }, 1000);
            }
        }
    };

    return (
        <div className="p-4 w-full">
            <div className="mb-4 flex flex-col gap-2 w-full">
                {messages.map((message, index) => (
                    <div key={index} className={`flex w-full ${message.user === 'User' ? 'justify-end' : 'justify-start'}`}>
                        <div className='flex gap-2 w-3/4'>
                            {message.user === 'Robot' && <div className='flex items-center justify-center w-[40px] h-[40px] p-1 bg-black rounded-full'></div>}
                            <Message text={message.text} />
                            {message.user === 'User' && <div className='w-[40px] h-[40px] p-1 bg-black rounded-full'></div>}
                        </div>
                        {message.options && (
                            <div className="flex flex-col gap-2">
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
                ))}
            </div>
            <div className="flex">
                {!currentQuestion && <button className="border p-2 ml-2" onClick={startQuiz}>Start Quiz</button>}
            </div>
        </div>
    );
}
