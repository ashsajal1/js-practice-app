import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Code, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { QuizQuestionType } from '../../../lib/quizzes/types';
import { cn } from '../../../lib/cn';

interface QuizQuestionProps {
    currentQuestion: QuizQuestionType | null;
    selectedOption: string;
    topics: string[];
    currentTopics: string[];
    isTooltipVisible: boolean;
    toggleTopic: (topic: string) => void;
    toggleTooltip: () => void;
    handleOptionClick: (option: string) => void;
    handleSubmit: () => void;
    setIsTooltipVisible: (isVisible: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
    currentQuestion,
    selectedOption,
    topics,
    currentTopics,
    isTooltipVisible,
    toggleTopic,
    toggleTooltip,
    handleOptionClick,
    handleSubmit,
    setIsTooltipVisible,
}) => {
    const preRef = useRef<HTMLPreElement>(null);
    const [isCodeExpanded, setIsCodeExpanded] = useState(false);

    useEffect(() => {
        if (preRef.current && currentQuestion?.code) {
            hljs.highlightElement(preRef.current);
        }
    }, [currentQuestion?.code]);

    if (!currentQuestion) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            {/* Topic Selection */}
            <div 
                onClick={() => setIsTooltipVisible(false)} 
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6"
            >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Select Topic</h2>
                <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                        <motion.button
                            key={topic}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleTopic(topic);
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                                currentTopics.includes(topic)
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                            )}
                        >
                            {topic}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Question Card */}
            <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                {/* Question Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {currentQuestion.question}
                        </h3>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleTooltip();
                            }}
                            className="text-gray-400 hover:text-blue-500 transition-colors p-1 -mt-1 -mr-1"
                            aria-label="Hint"
                        >
                            <Info className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <AnimatePresence>
                        {isTooltipVisible && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 overflow-hidden"
                            >
                                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm p-3 rounded-lg">
                                    <p>{currentQuestion.hint || 'No hint available for this question.'}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                            <Code className="w-4 h-4" />
                            <span>{currentQuestion.type}</span>
                        </div>
                        {currentQuestion.lang && (
                            <div className="flex items-center gap-1">
                                <Code className="w-4 h-4" />
                                <span>{currentQuestion.lang}</span>
                            </div>
                        )}
                        {currentQuestion.topic && (
                            <div className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full text-xs">
                                {currentQuestion.topic}
                            </div>
                        )}
                        {currentQuestion.complexity && (
                            <div className="flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                <span className="capitalize">{currentQuestion.complexity.toLowerCase()}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Code Block */}
                {currentQuestion.code && (
                    <div className="relative">
                        <div className="bg-gray-900 p-4 overflow-x-auto">
                            <pre ref={preRef} className="text-sm">
                                <code className="language-javascript">{currentQuestion.code}</code>
                            </pre>
                        </div>
                        <button
                            onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                            className="absolute bottom-2 right-2 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded"
                        >
                            {isCodeExpanded ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                )}

                {/* Options */}
                <div className="p-6 space-y-3">
                    {currentQuestion.options?.map((option, index) => {
                        const isSelected = selectedOption === option;
                        return (
                            <motion.div
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={cn(
                                    "p-4 rounded-lg border transition-all cursor-pointer",
                                    "flex items-center gap-3",
                                    isSelected
                                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                        : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700",
                                    "group"
                                )}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors",
                                    isSelected 
                                        ? "border-blue-500 bg-blue-500 text-white" 
                                        : "border-gray-300 dark:border-gray-600 group-hover:border-blue-400"
                                )}>
                                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <span className="text-gray-800 dark:text-gray-200">{option}</span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Submit Button */}
                <div className="px-6 pb-6">
                    <motion.button
                        onClick={handleSubmit}
                        disabled={!selectedOption}
                        whileHover={selectedOption ? { scale: 1.01 } : {}}
                        whileTap={selectedOption ? { scale: 0.99 } : {}}
                        className={cn(
                            "w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                            selectedOption
                                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        )}
                    >
                        {selectedOption ? (
                            <>
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Submit Answer</span>
                            </>
                        ) : (
                            <>
                                <Clock className="w-5 h-5" />
                                <span>Select an option to continue</span>
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default QuizQuestion;
