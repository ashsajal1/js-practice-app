import { useEffect, useRef, useState } from "react";
import Message from "../components/ui/message";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/ui/button";
import { getRandomSort } from "../lib/random";
import { useTextToSpeech } from "../hooks/useTextToSpeech";
import { useDispatch } from "react-redux";
import { getAllQuiz } from "../features/quiz/quizSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
import useSearchParams from "../hooks/useSearchParams";
import { QuizQuestionType } from "../lib/quizzes/types";
import { HiRefresh } from "react-icons/hi";
import PageSeo from "../components/seo/interview-page-seo";

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
  const [langTopic, setLangTopic] = useState("javascript");
  const [isBotWriting, setIsBotWriting] = useState(false);
  const [selectedQuizzes, setSelectedQuizzes] = useState<QuizQuestionType[]>(
    []
  );
  const [defaultLang, setDefaultLang] = useState([
    { value: "javascript", label: "Javascript" },
    { value: "golang", label: "Golang" },
    { value: "react", label: "React" },
    { value: "dotnet", label: "Dotnet" },
    { value: "tailwindcss", label: "TailwindCSS" },
  ]);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex === selectedQuizzes.length - 1) {
      setIsLastQuestion(true);
    }
  }, [currentQuestionIndex, selectedQuizzes.length]);

  const lastMessageRef = useRef<HTMLDivElement>(null);
  const { speak } = useTextToSpeech();
  const dispatch = useDispatch();

  const { getParam } = useSearchParams();
  const lang = getParam("lang");

  useEffect(() => {
    if (lang) {
      const langLower = lang.toLowerCase();
      setLangTopic(langLower);
      const langExists = defaultLang.some(
        (option) => option.value === langLower
      );
      if (!langExists) {
        setDefaultLang((prev) => [...prev, { value: langLower, label: lang }]);
      }
    }
  }, [lang, defaultLang]);

  useEffect(() => {
    dispatch(getAllQuiz());
  }, [dispatch]);

  const { quizzes, loading } = useTypedSelector((state) => state.quiz);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].user === "Robot") {
      speak(messages[messages.length - 1].text);
    }
  }, [messages, speak]);

  const startQuiz = () => {
    if (quizzes.length > 0) {
      let filteredQuizzes = [...quizzes];
      filteredQuizzes = quizzes.filter(
        (quiz) =>
          quiz.lang.toLowerCase().includes(langTopic.toLowerCase()) ||
          quiz.topic.toLowerCase().includes(langTopic.toLowerCase())
      );

      if (filteredQuizzes.length === 0) {
        setMessages([
          {
            user: "Robot",
            text: `No questions found for language ${langTopic}. Please select another language.`,
          },
        ]);
        return;
      }

      // Limit the number of questions to 5
      const shuffledQuizzes = filteredQuizzes.sort(getRandomSort).slice(0, 5);
      setSelectedQuizzes(shuffledQuizzes);
      const firstQuestion = shuffledQuizzes[0];

      setMessages([
        {
          user: "Robot",
          text: firstQuestion.question,
          options: firstQuestion.options,
          answered: false,
          code: firstQuestion.code,
        },
      ]);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const handleOptionSelect = (index: number) => {
    if (isBotWriting) return;

    const currentQuestion = selectedQuizzes[currentQuestionIndex];
    const selectedOption = currentQuestion.options
      ? currentQuestion.options[index]
      : "";
    const isCorrect = selectedOption === currentQuestion.answer;
    const feedback = isCorrect
      ? "Correct!"
      : `Incorrect. The correct answer was "${currentQuestion.answer}"`;
    speak(feedback);
    const newScore = isCorrect ? score + 1 : score;

    const updatedMessages = messages.map((message, idx) =>
      idx === messages.length - 1 ? { ...message, answered: true } : message
    );

    const newMessages = [
      ...updatedMessages,
      { user: "User", text: `Option ${index + 1}: ${selectedOption}` },
    ];

    setMessages(newMessages);
    setIsBotWriting(true);

    setTimeout(() => {
      const botMessages: MessageType[] = [{ user: "Robot", text: feedback }];

      if (isLastQuestion) {
        botMessages.push({
          user: "Robot",
          text: `Interview finished! Your score: ${newScore}/${selectedQuizzes.length}`,
        });
      } else {
        const nextQuestion = selectedQuizzes[currentQuestionIndex + 1];
        botMessages.push({
          user: "Robot",
          text: nextQuestion.question,
          options: nextQuestion.options,
          answered: false,
          code: nextQuestion.code,
        });
      }

      setMessages([...newMessages, ...botMessages]);
      setScore(newScore);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsBotWriting(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }

  return (
    <div className="p-4 w-full">
      <PageSeo title="Programming Interview Practice | Rust, JavaScript, Go, React, Vue, and More" />
      <div className="mb-4 flex flex-col gap-2 w-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex w-full ${
              message.user === "User" ? "justify-end my-6" : "justify-start"
            }`}
          >
            <div
              className={`flex gap-3 w-full md:w-3/4 ${
                message.user === "User" ? "flex-row-reverse" : ""
              }`}
            >
              <img
                className={`w-10 h-10 flex-shrink-0 rounded-full object-cover ${
                  message.user === "User"
                    ? "ml-3 bg-blue-500"
                    : "mr-3 bg-gray-300"
                }`}
                src={message.user === "User" ? "/image/user.jpg" : "/image/interviewer.jpg"}
                alt={message.user === "User" ? "User" : "Interviewer"}
              />
              <div ref={lastMessageRef} className="flex-1">
                <div className={`flex ${message.user === "User" ? "justify-end" : "justify-start"}`}>
                  <Message
                    className={`${
                      message.user === "Robot"
                        ? "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-none"
                        : "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white border-none"
                    }`}
                    text={message.text}
                  />
                </div>
                {message.code && (
                  <div className={`mt-2 ${message.user === "User" ? "text-right" : "text-left"}`}>
                    <pre className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-wrap p-3 rounded-lg inline-block max-w-full overflow-x-auto">
                      {message.code}
                    </pre>
                  </div>
                )}

                <AnimatePresence>
                  {message.options && !message.answered && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`flex gap-2 flex-wrap mt-2 ${
                        message.user === "User" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.options.map((option, optionIndex) => (
                        <Button
                          variant="outline"
                          key={optionIndex}
                          className="px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => handleOptionSelect(optionIndex)}
                        >
                          {option}
                        </Button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
        {isLastQuestion && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 5,
            }}
            className={`py-2 w-full flex items-center justify-center`}
          >
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="w-full md:w-1/3 gap-2"
            >
              <HiRefresh />
              Restart
            </Button>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="flex flex-col items-center justify-center w-full min-h-[60vh] px-4"
          >
            <motion.div 
              className="w-full max-w-md space-y-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <select 
                  value={langTopic} 
                  onChange={(e) => setLangTopic(e.target.value)} 
                  className="w-full p-4 text-lg bg-white dark:bg-darkColor border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 cursor-pointer appearance-none pl-5 pr-12"
                  title="Select programming language"
                >
                  {defaultLang.map((option, index) => (
                    <motion.option 
                      key={option.value} 
                      value={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-2 dark:bg-darkColor dark:text-white"
                    >
                      {option.label}
                    </motion.option>
                  ))}
                </select>
                <motion.div 
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.div>
              
              <div className="w-full space-y-4">
                <Button 
                  onClick={startQuiz} 
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Start Interview
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Multiple Choice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Answer technical questions with multiple choice options</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Code Challenges</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Solve real-world coding problems in your chosen language</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Instant Feedback</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Get immediate scoring and detailed explanations</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Select a language and start practicing for your next interview!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
