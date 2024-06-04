import React, { useRef, useEffect } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { QuizQuestionType } from '../../../lib/quizzes/types';
import Button from '../../ui/button';
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

    useEffect(() => {
        if (preRef.current && currentQuestion?.code) {
            hljs.highlightElement(preRef.current);
        }
    }, [currentQuestion?.code]);

    return (
        <>
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
            {currentQuestion && (
                <div className='grid place-items-center px-4 md:p-4 md:mb-24 pb-24'>
                    <div className="w-full md:w-1/2 border dark:border-gray-800 p-6 md:p-4 rounded">
                        <div className='flex justify-between items-start'>
                            <p className='dark:text-white'>{currentQuestion.question}</p>
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
                                <span className='text-sm'>{currentQuestion.type}</span>
                            </p>

                            <p className='py-2 text-sm font-extralight dark:text-white'>
                                <span className='font-bold'>Language :</span>
                                <span> {currentQuestion.lang}</span>
                            </p>

                            {currentQuestion.topic && (
                                <p className='py-2 text-sm font-extralight dark:text-white'>
                                    <span className='font-bold'>Topic :</span>
                                    <span> {currentQuestion.topic}</span>
                                </p>
                            )}

                            {currentQuestion.complexity && (
                                <p className='py-2 text-sm font-extralight dark:text-white'>
                                    <span className='font-bold'>Complexity :</span>
                                    <span> {currentQuestion.complexity}</span>
                                </p>
                            )}
                        </div>
                        <pre ref={preRef} className={`text-wrap p-2 ${currentQuestion.code ? '' : 'hidden'}`}><code>{currentQuestion.code}</code></pre>
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
                </div>
            )}
        </>
    );
};

export default QuizQuestion;
