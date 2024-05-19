import { useState } from 'react';
import Message from '../components/ui/message';
import { quizQuestions } from '../lib/quiz'

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

    const startQuiz = () => {
        if (quizQuestions.length > 0) {
            const firstQuestion = quizQuestions[0];
            setMessages([{ user: 'Robot', text: firstQuestion.question, options: firstQuestion.options, answered: false, code: firstQuestion.code }]);
            setCurrentQuestionIndex(0);
            setScore(0);
        }
    };

    const handleOptionSelect = (index: number) => {
        if (isBotWriting) return;

        const currentQuestion = quizQuestions[currentQuestionIndex];
        const selectedOption = currentQuestion.options ? currentQuestion.options[index] : "";
        const isCorrect = selectedOption === currentQuestion.answer;
        const feedback = isCorrect ? "Correct!" : `Incorrect. The correct answer was "${currentQuestion.answer}"`;
        const newScore = isCorrect ? score + 1 : score;
        const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

        const updatedMessages = messages.map((message, idx) => (
            idx === messages.length - 1 ? { ...message, answered: true } : message
        ));

        const newMessages = [
            ...updatedMessages,
            { user: 'User', text: `Option ${index + 1}: ${selectedOption}` },
        ];

        setMessages(newMessages);
        setIsBotWriting(true);

        setTimeout(() => {
            const botMessages: MessageType[] = [
                { user: 'Robot', text: feedback }
            ];

            if (isLastQuestion) {
                botMessages.push({ user: 'Robot', text: `Quiz finished! Your score: ${newScore}/${quizQuestions.length}` });
            } else {
                const nextQuestion = quizQuestions[currentQuestionIndex + 1];
                botMessages.push({ user: 'Robot', text: nextQuestion.question, options: nextQuestion.options, answered: false, code: nextQuestion.code });
            }

            setMessages([...newMessages, ...botMessages]);
            setScore(newScore);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsBotWriting(false);
        }, 1000);
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
                                {message.code && <pre className="bg-gray-200 p-2 mt-2">{message.code}</pre>}
                                {message.options && !message.answered && (
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
