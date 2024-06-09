import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QuizQuestionType } from '../../../lib/quizzes/types';

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
    return (
        <div className='grid place-items-center pt-12 px-4 md:p-12 pb-24'>
            <div className="w-full md:w-1/2 border dark:border-gray-800 p-6 md:p-4 rounded">
                <div className={`p-4 rounded border shadow ${isRightAnswer ? 'bg-green-200' : 'bg-red-200'}`}>
                    <p className="text-lg text-darkColor font-medium my-2">{currentQuestion?.question}</p>
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
                    {currentQuestion?.explanation && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className='my-6 border-t pt-4 dark:text-darkText dark:border-t-gray-700'
                        >
                            <span className='font-bold text-blue-600'>Explanation :</span> {currentQuestion.explanation}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CompletedQuiz;
