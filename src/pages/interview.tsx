import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HiRefresh, HiOutlineDocumentText, HiOutlineCode, HiOutlineLightningBolt } from "react-icons/hi";
import { MessageList } from "../components/interview/MessageList";
import { FeatureCard } from "../components/interview/FeatureCard";
import Button from "../components/ui/button";
import { getRandomSort } from "../lib/random";
import { useTextToSpeech } from "../hooks/useTextToSpeech";
import { getAllQuiz } from "../features/quiz/quizSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
import useSearchParams from "../hooks/useSearchParams";
import { QuizQuestionType } from "../lib/quizzes/types";
import PageSeo from "../components/seo/interview-page-seo";

// Type for the quiz slice in Redux store
interface AppState {
  quiz: {
    quizzes: QuizQuestionType[];
    loading: boolean;
  };
}

type MessageType = {
  user: string;
  text: string;
  options?: string[];
  answered?: boolean;
  code?: string;
  isCorrect?: boolean;
  explanation?: string;
};

export default function Interview() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [langTopic, setLangTopic] = useState("javascript");
  const [isBotWriting, setIsBotWriting] = useState(false);
  const [selectedQuizzes, setSelectedQuizzes] = useState<QuizQuestionType[]>([]);
  const [defaultLang, setDefaultLang] = useState([
    { value: "javascript", label: "Javascript" },
    { value: "golang", label: "Golang" },
    { value: "react", label: "React" },
    { value: "dotnet", label: "Dotnet" },
    { value: "tailwindcss", label: "TailwindCSS" },
  ]);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [interviewEnded, setInterviewEnded] = useState(false);

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

  const { quizzes, loading } = useTypedSelector((state: AppState) => state.quiz);


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

  const resetInterview = (): void => {
    setMessages([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setInterviewEnded(false);
    setIsLastQuestion(false);
  };

  const startQuiz = (): void => {
    if (quizzes.length > 0) {
      const filteredQuizzes = [...quizzes].filter((quiz) =>
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

  const handleOptionSelect = (optionIndex: number): void => {
    if (isBotWriting) return;

    const currentQuestion = selectedQuizzes[currentQuestionIndex];
    if (!currentQuestion) return;
    
    const selectedOption = currentQuestion.options?.[optionIndex] || "";
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
      { user: "User", text: `Option ${optionIndex + 1}: ${selectedOption}` },
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
        setInterviewEnded(true);
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
      <MessageList 
        messages={messages} 
        onOptionSelect={handleOptionSelect} 
        lastMessageRef={lastMessageRef} 
      />
      
      {interviewEnded && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="py-2 w-full flex items-center justify-center"
        >
          <Button
            onClick={resetInterview}
            variant="outline"
            className="w-full md:w-1/3 gap-2"
          >
            <HiRefresh />
            Restart
          </Button>
        </motion.div>
      )}
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
                  <FeatureCard
                    icon={<HiOutlineDocumentText className="h-6 w-6" />}
                    title="Multiple Choice"
                    description="Answer technical questions with multiple choice options"
                    iconBg="bg-blue-100 dark:bg-blue-900/30"
                    iconColor="text-blue-600 dark:text-blue-400"
                  />
                  
                  <FeatureCard
                    icon={<HiOutlineCode className="h-6 w-6" />}
                    title="Code Challenges"
                    description="Solve real-world coding problems in your chosen language"
                    iconBg="bg-green-100 dark:bg-green-900/30"
                    iconColor="text-green-600 dark:text-green-400"
                  />
                  
                  <FeatureCard
                    icon={<HiOutlineLightningBolt className="h-6 w-6" />}
                    title="Instant Feedback"
                    description="Get immediate scoring and detailed explanations"
                    iconBg="bg-purple-100 dark:bg-purple-900/30"
                    iconColor="text-purple-600 dark:text-purple-400"
                  />
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
