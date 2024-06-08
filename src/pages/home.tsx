import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CiSearch } from "react-icons/ci";
import Button from "../components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopicBadge from "../components/ui/topic-badge";
import CounterStat from "../components/partials/counter-stat";
import Blob from "../components/ui/blob";
import { topicList } from "../lib/utils";
import { getRandomSort } from "../lib/random";

export default function Home() {
  const [topic, setTopic] = useState('');
  const [topicsList, setTopicsList] = useState<null | string[]>(null);
  const concepts = useTypedSelector((state) => state.concept.concepts).slice(0, 15);
  const navigate = useNavigate();
  
  useEffect(() => {
    setTopicsList(topicList.sort(getRandomSort))
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/concept?topic=${topic}`);
  };

  return (
    <AnimatedPage>
      <div>
        <section className="p-12 z-10 flex flex-col gap-6 items-center justify-center">
          <form onSubmit={handleSearch} className="border dark:bg-darkColor bg-white dark:border-gray-700 flex items-center justify-between rounded px-2  md:w-1/3 gap-2 p-1 focus-within:border-blue-600">
            <input
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
              type="text"
              placeholder="Rust, Golang, React"
              className="p-2 dark:bg-darkColor dark:text-darkText rounded outline-none"
              required
            />

            <Button>
              <CiSearch className="h-4 w-4" />
            </Button>

          </form>

          <div className="flex gap-2 items-center">
            {topicsList?.slice(0, 4).map(topic =>
              <TopicBadge onClick={() => setTopic(topic)} topic={topic} />
            )}
          </div>

          <CounterStat />

        </section>
        <Blob className='top-0 w-full -z-10' />
      </div>

      <div className="p-4 flex flex-col items-center justify-center relative">
        <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore concepts to practice</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {concepts.map((question) => (
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