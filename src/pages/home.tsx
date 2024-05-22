import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CiSearch } from "react-icons/ci";
import Button from "../components/ui/button";

export default function Home() {


  const sortedQuestions = useTypedSelector((state) => state.topic.topics);

  return (
    <AnimatedPage>

      <section className="p-12 flex items-center justify-center">
        <div className="border flex items-center justify-between rounded px-2 w-1/2 md:w-1/3 gap-2 p-1 focus-within:border-blue-600">
          <input type="text" placeholder="Rust, Golang, React" className="p-2 rounded outline-none" />

          <Button>
            <CiSearch className="h-4 w-4" />
          </Button>
        </div>
      </section>
      <div className="p-4 flex flex-col items-center justify-center relative">
        <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore questions to practice</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {sortedQuestions.map((question) => (
            <>
              <QuestionCard question={question.question} answer={question.answer} id={question.id} key={question.id} />
            </>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
