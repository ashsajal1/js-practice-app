import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect, useRef, useState, useCallback } from "react";
import AnimatedPage from '../components/ui/animated-page';
import { QuizQuestionType } from '../lib/quizzes/types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAllQuiz } from '../features/quiz/quizSlice';
import { useLocation } from 'react-router-dom';
import { getRandomSort } from '../lib/random';
import NoQuestion from '../components/partials/quiz/no-question';
import useAudio from '../hooks/useAudio';
import CompletedQuiz from '../components/partials/quiz/completed-quiz';
import QuizQuestion from '../components/partials/quiz/quiz-question';

export default function Quiz() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { quizzes, loading, error } = useTypedSelector((state) => state.quiz);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null);
    const [isCompletedCurrentQuiz, setIsCompletedCurrentQuiz] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestionType[]>([]);
    const [currentTopics, setCurrentTopics] = useState<string[]>([]);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang') || '';
    const { playOptionTone, playSubmitTone } = useAudio();

    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        dispatch(getAllQuiz());
    }, [dispatch]);

    useEffect(() => {
        setQuizQuestions(quizzes.filter(quiz => quiz.lang.toLowerCase().includes(lang.toLowerCase())));
    }, [quizzes, lang]);

    useEffect(() => {
        setCurrentQuestion(quizQuestions[currentQuestionIndex] || null);
    }, [quizQuestions, currentQuestionIndex]);

    useEffect(() => {
        if (preRef.current && currentQuestion?.code) {
            hljs.highlightElement(preRef.current);
        }
    }, [currentQuestion?.code]);

    const handleNextQuestion = useCallback(() => {
        playSubmitTone();
        setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % quizQuestions.length);
        setIsCompletedCurrentQuiz(false);
        setIsRightAnswer(false);
        setSelectedOption('');
    }, [playSubmitTone, quizQuestions.length]);

    useEffect(() => {
        if (currentTopics && currentTopics.length > 0) {
            const newQuiz = quizzes.filter(quiz => {
                return currentTopics.some(topic => quiz.topic.toLowerCase().includes(topic.toLowerCase()) || quiz.lang.toLowerCase().includes(topic.toLowerCase()));
            });

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

    const topics = ['Golang', 'Rust', 'Dotnet', 'React', 'Javascript', 'Angular', "TailwindCss"];

    const toggleTopic = (topic: string) => {
        setCurrentTopics(prevTopics =>
            prevTopics.includes(topic)
                ? prevTopics.filter(t => t !== topic)
                : [...prevTopics, topic]
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
                <CompletedQuiz
                    currentQuestion={currentQuestion}
                    isRightAnswer={isRightAnswer}
                    selectedOption={selectedOption}
                    handleNextQuestion={handleNextQuestion}
                />
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <QuizQuestion
                currentQuestion={currentQuestion}
                selectedOption={selectedOption}
                topics={topics}
                currentTopics={currentTopics}
                isTooltipVisible={isTooltipVisible}
                toggleTopic={toggleTopic}
                toggleTooltip={toggleTooltip}
                handleOptionClick={handleOptionClick}
                handleSubmit={handleSubmit}
                setIsTooltipVisible={setIsTooltipVisible}
            />

            {quizQuestions.length === 0 && <NoQuestion />}
        </AnimatedPage>
    );
}
