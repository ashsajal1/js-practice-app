import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock } from "lucide-react";
import { QuizProps } from "../../lib/concepts/javascript";
import Timer from "./timer";
import { cn } from "../../lib/cn";
import useAudio from "../../hooks/useAudio";

// define submissionTimeout variable to hold the timeout ID
let submissionTimeout: ReturnType<typeof setTimeout>;

const optionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.3
        }
    }),
    selected: {
        scale: 1.02,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", stiffness: 400, damping: 17 }
    }
};

export default function QuizCard({ quiz, question, uniqueKey, topic }: { quiz: QuizProps, question: string, uniqueKey: string | number, topic: string }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const navigate = useNavigate();
    const { playOptionTone, playSubmitTone } = useAudio();

    const handleConfirm = () => {
        clearTimeout(submissionTimeout);
        navigate('/result', {
            state: { question, topic }
        });
    };

    const handleQuizSubmit = () => {
        if (!selectedOption) return;
        
        playSubmitTone();
        const isCorrect = selectedOption === quiz.answer;
        setIsRightAnswer(isCorrect);
        setHasSubmitted(true);
        
        clearTimeout(submissionTimeout);
        submissionTimeout = setTimeout(() => {
            navigate('/result', { state: { question, topic } });
        }, 5000);
    };

    const handleOptionSelect = (option: string) => {
        if (hasSubmitted) return;
        playOptionTone();
        setSelectedOption(option);
    };

    const getOptionState = (option: string) => {
        if (!hasSubmitted) return '';
        if (option === quiz.answer) return 'correct';
        if (option === selectedOption && option !== quiz.answer) return 'incorrect';
        return '';
    };

    if (hasSubmitted) {
        return (
            <motion.div 
                key={uniqueKey} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`p-6 rounded-2xl shadow-lg transition-colors duration-300 ${
                    isRightAnswer 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                }`}
            >
                <div className="flex items-center gap-3 mb-4">
                    {isRightAnswer ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                        <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {isRightAnswer ? 'Correct!' : 'Incorrect'}
                    </h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">{quiz.question}</p>
                
                <div className="space-y-3 mb-6">
                    {quiz.options.map((option, index) => {
                        const state = getOptionState(option);
                        return (
                            <motion.div
                                key={option}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={optionVariants}
                                className={cn(
                                    "p-4 rounded-xl border transition-all duration-200 flex items-center justify-between",
                                    state === 'correct' && 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700',
                                    state === 'incorrect' && 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700',
                                    !state && 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
                                    'text-gray-900 dark:text-gray-100'
                                )}
                            >
                                <span>{option}</span>
                                {state === 'correct' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                {state === 'incorrect' && option === selectedOption && (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.button
                    onClick={handleConfirm}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                        "w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2",
                        isRightAnswer 
                            ? 'bg-green-500 hover:bg-green-600 text-white' 
                            : 'bg-red-500 hover:bg-red-600 text-white'
                    )}
                >
                    <Clock className="w-4 h-4" />
                    <span>Continue in <Timer />/5</span>
                </motion.button>
            </motion.div>
        );
    }

    return (
        <motion.div 
            key={uniqueKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
        >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quiz Time!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{quiz.question}</p>
            
            <div className="space-y-3 mb-6">
                {quiz.options.map((option, index) => (
                    <motion.div
                        key={option}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={optionVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOptionSelect(option)}
                        className={cn(
                            "p-4 rounded-xl border cursor-pointer transition-all duration-200",
                            selectedOption === option 
                                ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700' 
                                : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600',
                            'hover:bg-gray-50 dark:hover:bg-gray-700/50',
                            'text-gray-900 dark:text-gray-100'
                        )}
                    >
                        {option}
                    </motion.div>
                ))}
            </div>

            <motion.button
                onClick={handleQuizSubmit}
                disabled={!selectedOption}
                whileHover={{ scale: selectedOption ? 1.02 : 1 }}
                whileTap={{ scale: selectedOption ? 0.98 : 1 }}
                className={cn(
                    "w-full py-3 px-6 rounded-xl font-medium transition-colors",
                    selectedOption 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed',
                    'disabled:opacity-70'
                )}
            >
                {selectedOption ? 'Submit Answer' : 'Select an option to continue'}
            </motion.button>
        </motion.div>
    );
}
