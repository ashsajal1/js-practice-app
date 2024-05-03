import { useState, useMemo } from "react";
import QuestionCard from "../components/ui/question-card";
import { QnaTypes, qna } from "../lib/qna";
import { getRandomSort } from "../lib/random";
import Blob from "../components/ui/blob";

export default function Home() {
  const [sortedQuestions, setSortedQuestions] = useState<QnaTypes[]>([]);

  useMemo(() => {
    const sortedQna = qna.slice(0, 15).sort(getRandomSort);
    setSortedQuestions(sortedQna);
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center relative">
      <Blob />
      <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore questions to practice</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {sortedQuestions.map((question) => (
          <QuestionCard question={question.question} answer={question.answer} id={question.id} key={question.id} />
        ))}
      </div>
    </div>
  );
}
