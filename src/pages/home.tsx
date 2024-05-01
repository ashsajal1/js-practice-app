import QuestionCard from "../components/question-card";
import { qna } from "../lib/qna";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore questions to practice</h1>
      <div className="flex flex-wrap items-start gap-3">
        {qna.map(i => (
          <QuestionCard question={i.question} answer={i.answer} id={i.id} key={i.id} />
        ))}
        
      </div>
    </div>
  )
}
