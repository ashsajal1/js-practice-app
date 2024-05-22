import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function Concept() {


  const sortedQuestions = useTypedSelector((state) => state.topic.topics);

  return (
    <AnimatedPage>
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
