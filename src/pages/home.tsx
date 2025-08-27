import { motion } from "framer-motion";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  Code,
  BookOpen,
  Zap,
  Search,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Button from "../components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CounterStat from "../components/partials/counter-stat";
import Blob from "../components/ui/blob";
import { topicList } from "../lib/utils";
import { getRandomSort } from "../lib/random";
import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";

const features = [
  {
    name: "Interactive Quizzes",
    description:
      "Test your knowledge with our interactive coding quizzes and challenges.",
    icon: BookOpen,
  },
  {
    name: "Real-world Problems",
    description:
      "Solve real-world programming problems to enhance your skills.",
    icon: Code,
  },
  {
    name: "Quick Learning",
    description: "Learn and practice efficiently with our curated content.",
    icon: Zap,
  },
];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [topicsList, setTopicsList] = useState<null | string[]>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const concepts = useTypedSelector((state) => state.concept.concepts).slice(
    0,
    15
  );
  const navigate = useNavigate();

  useEffect(() => {
    setTopicsList(topicList.sort(getRandomSort));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (topic.trim()) {
      navigate(`/concept?topic=${encodeURIComponent(topic.trim())}`);
    }
  };

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
              <div className="text-center">
                <motion.h1
                  className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block">Master Programming</span>
                  <span className="block text-blue-600 dark:text-blue-400">
                    One Concept at a Time
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Transform your coding skills with our interactive platform
                  featuring quizzes, practice problems, and interview
                  preparation.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                  className="mt-8 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <form onSubmit={handleSearch} className="relative">
                    <div
                      className={`flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 transition-all duration-200 ${
                        isSearchFocused
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        placeholder="Search for a topic (e.g., React, Python, Algorithms)"
                        className="w-full px-6 py-4 text-gray-900 dark:text-white bg-transparent border-0 focus:ring-0 focus:outline-none"
                        required
                      />
                      <Button
                        type="submit"
                        variant="solid"
                        className="m-1 h-12 w-12 flex-shrink-0"
                        aria-label="Search"
                      >
                        <Search className="h-5 w-5" />
                      </Button>
                    </div>
                  </form>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {topicsList?.slice(0, 5).map((topic, index) => (
                      <motion.button
                        key={topic}
                        onClick={() => setTopic(topic)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-3 py-1.5 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        {topic}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <div className="grid place-items-center mt-10 w-full">
                  <CounterStat />
                </div>

                <div className="mt-10 flex justify-center gap-4">
                  <Link to="/quiz">
                    <Button
                      variant="solid"
                      className="group px-8 py-3 text-base font-medium rounded-lg"
                    >
                      Start Practicing
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/concept">
                    <Button
                      variant="outline"
                      className="px-8 py-3 text-base font-medium rounded-lg"
                    >
                      Explore Concepts
                    </Button>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Blob className="absolute top-0 right-0 -z-10 w-full h-full opacity-20" />
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to master programming
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Concepts Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Popular Concepts to Practice
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Explore our collection of programming concepts and challenges
            </p>
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {concepts.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <QuestionCard
                  question={question.question}
                  answer={question.answer}
                  id={question.id}
                  key={question.id}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/concept"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Concepts
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to improve your skills?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join thousands of developers who have already improved their coding
            skills with our platform.
          </p>
          <Link
            to="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Get started for free
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}
