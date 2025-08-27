import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { renderAnswer } from "../lib/renderAnswer";
import NotFoundCard from "../components/ui/not-found-card";
import QuizCard from "../components/ui/quiz-card";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import AnimatedPage from "../components/ui/animated-page";
import { useDispatch } from "react-redux";
import { getConceptById } from "../features/concept/conceptSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useLocation } from 'react-router-dom';
import { HiSpeakerWave, HiSpeakerXMark, HiOutlineLightBulb } from "react-icons/hi2";
import { useTextToSpeech } from "../hooks/useTextToSpeech";
import Button from "../components/ui/button";
import PageSeo from "../components/seo/interview-page-seo";
import { motion, AnimatePresence } from "framer-motion";

export default function Practice() {
  const [char, setChar] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { speak, stop } = useTextToSpeech()

  const searchParams = new URLSearchParams(location.search);
  const conceptId = searchParams.get('id') || '';
  // console.log(searchParams, conceptId)

  const { currentConcept } = useTypedSelector((state) => state.concept);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      if (block instanceof HTMLElement) {
        hljs.highlightElement(block);
      }
    });
  }, [isLoading]);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        await dispatch(getConceptById(conceptId));
        setIsLoading(false);
      } catch (err) {
        if (typeof err === 'string') {
          setError(err);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setIsLoading(false);
      }
    };
    fetchTopic();
  }, [dispatch, conceptId]);


  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChar(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentConcept?.quiz) {
      setShowQuiz(true);
    } else {
      navigate("/result", {
        state: { question: currentConcept?.question, topic: currentConcept?.topic },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="w-full p-4 md:p-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            ))}
          </div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-8"></div>
          <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse mt-6"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We couldn't load the practice content. Please try again later.</p>
          <Button 
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Retry
          </Button>
        </div>
      </div>
    )
  }

  if (!currentConcept) {
    return <NotFoundCard content="Question" />;
  }

  return (
    <AnimatedPage>
      <PageSeo 
        title={`Practice: ${currentConcept.question}`} 
        description={`${currentConcept.question} : ${currentConcept.answer.substring(0, 150)}...`} 
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showQuiz ? (
              <motion.div
                key="practice-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <HiOutlineLightBulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Practice Question
                    </h1>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 break-words">
                      {currentConcept.question}
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-x-auto">
                      <div className="prose dark:prose-invert max-w-none break-words whitespace-pre-wrap">
                        {renderAnswer(currentConcept.answer, char)}
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="answer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your answer
                      </label>
                      <motion.textarea
                        id="answer"
                        value={char}
                        onChange={handlePromptChange}
                        rows={5}
                        placeholder="Type your answer here..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none min-h-[120px]"
                        whileFocus={{ 
                          boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                          scale: 1.005
                        }}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Submit Answer
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => speak(currentConcept.answer)}
                          className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                        >
                          <HiSpeakerWave className="h-5 w-5 mr-2" />
                          Listen
                        </Button>
                        <Button 
                          onClick={stop}
                          className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                        >
                          <HiSpeakerXMark className="h-5 w-5 mr-2" />
                          Stop
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>

                {currentConcept.code && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Code Example
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
                        {currentConcept.topic}
                      </span>
                    </div>
                    <pre className="rounded-lg overflow-x-auto bg-gray-900 p-4">
                      <code className="language-javascript text-sm">
                        {currentConcept.code}
                      </code>
                    </pre>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="quiz-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                {currentConcept.quiz && (
                  <QuizCard 
                    topic={currentConcept.topic} 
                    uniqueKey={currentConcept.id} 
                    question={currentConcept.question} 
                    quiz={currentConcept.quiz} 
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  );
}