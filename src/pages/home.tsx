import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CiSearch } from "react-icons/ci";
import Button from "../components/ui/button";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopicBadge from "../components/ui/topic-badge";
import CounterStat from "../components/partials/counter-stat";

export default function Home() {
  const [topic, setTopic] = useState('all');
  const questions = useTypedSelector((state) => state.topic.topics);
  const navigate = useNavigate();

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/concept?topic=${topic}`);
  };

  return (
    <AnimatedPage>
      <section className="p-12 flex flex-col gap-6 items-center justify-center">
        <form onSubmit={handleSearch} className="border dark:border-gray-700 flex items-center justify-between rounded px-2  md:w-1/3 gap-2 p-1 focus-within:border-blue-600">
          <input
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            placeholder="Rust, Golang, React"
            className="p-2 dark:bg-black dark:text-white rounded outline-none"
          />

          <Button>
            <CiSearch className="h-4 w-4" />
          </Button>

        </form>

        <div className="flex gap-2 items-center">
          <TopicBadge topic="javascript" />
          <TopicBadge topic="react" />
          <TopicBadge topic="rust" />
          <TopicBadge topic="golang" />
        </div>

        <CounterStat />
      </section>

      <div className="p-4 flex flex-col items-center justify-center relative">
        <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore questions to practice</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {questions.map((question) => (
            <QuestionCard
              question={question.question}
              answer={question.answer}
              id={question.id}
              key={question.id}
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}