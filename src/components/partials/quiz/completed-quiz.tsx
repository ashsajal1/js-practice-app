import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, Info, Sparkles } from 'lucide-react';
import { QuizQuestionType } from '../../../lib/quizzes/types';
import { cn } from '../../../lib/cn';

interface CompletedQuizProps {
    currentQuestion: QuizQuestionType | null;
    isRightAnswer: boolean;
    selectedOption: string;
    handleNextQuestion: () => void;
}

const CompletedQuiz: React.FC<CompletedQuizProps> = ({
    currentQuestion,
    isRightAnswer,
    selectedOption,
    handleNextQuestion,
}) => {
    if (!currentQuestion) return null;

    const getOptionState = (option: string) => {
        if (option === currentQuestion.answer) return 'correct';
        if (option === selectedOption && !isRightAnswer) return 'incorrect';
        return '';
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl mx-auto p-4 md:p-6"
        >
            {/* Result Card */}
            <motion.div 
                className={cn(
                    "rounded-2xl overflow-hidden shadow-lg border",
                    isRightAnswer 
                        ? "bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-900/20"
                        : "bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/20"
                )}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                {/* Header */}
                <div className={cn(
                    "p-6 flex items-center gap-4",
                    isRightAnswer 
                        ? "bg-green-100 dark:bg-green-900/20"
                        : "bg-red-100 dark:bg-red-900/20"
                )}>
                    <div className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                        isRightAnswer 
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    )}>
                        {isRightAnswer ? (
                            <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
                        ) : (
                            <XCircle className="w-6 h-6" strokeWidth={2} />
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {isRightAnswer ? 'Correct!' : 'Incorrect'}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {isRightAnswer 
                                ? 'Great job! You got it right.' 
                                : 'Not quite right. Keep practicing!'}
                        </p>
                    </div>
                </div>

                {/* Question */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        {currentQuestion.question}
                    </h3>
                    
                    {/* Options */}
                    <div className="space-y-3">
                        {currentQuestion.options?.map((option, index) => {
                            const state = getOptionState(option);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (index * 0.05) }}
                                    className={cn(
                                        "p-4 rounded-lg border flex items-center justify-between",
                                        "transition-colors",
                                        state === 'correct' && "bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800/50",
                                        state === 'incorrect' && "bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800/50",
                                        !state && "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                    )}
                                >
                                    <span className={cn(
                                        "text-gray-900 dark:text-white",
                                        state === 'correct' && "font-medium",
                                        state === 'incorrect' && "line-through text-opacity-70"
                                    )}>
                                        {option}
                                    </span>
                                    {state === 'correct' && (
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    )}
                                    {state === 'incorrect' && (
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Explanation */}
                <AnimatePresence mode="wait">
                    {currentQuestion.explanation && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <Info className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                            Explanation
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {currentQuestion.explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Next Button */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
                    <motion.button
                        onClick={handleNextQuestion}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors",
                            isRightAnswer
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "bg-red-600 hover:bg-red-700 text-white"
                        )}
                    >
                        <span>Next Question</span>
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </motion.div>

            {/* Encouragement */}
            <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 text-sm font-medium rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span>Keep up the great work!</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CompletedQuiz;
