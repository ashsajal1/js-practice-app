import { ChangeEvent, useState } from "react"

type QnaTypes = { id: number, question: string, answer: string }
const qna: QnaTypes[] = [
  {
    id: 1,
    question: "What is promise in Javascript?",
    answer: "A promise in JavaScript represents the eventual completion or failure of an asynchronous operation, encapsulating its result."
  }
]

export default function App() {
  const [char, setChar] = useState('');
  // const [isStarted, setIsStarted] = useState(false);

  const renderChar = (index: number, answer: string) => {
    const letter = answer[index];
    const userEnteredLetter = char[index];
  
    if (userEnteredLetter === undefined) {
      return <span key={index}>{letter}</span>;
    } else if (letter !== userEnteredLetter) {
      return <span key={index} className="text-red-600">{letter}</span>;
    } else if (letter === userEnteredLetter) {
      return <span key={index} className="text-green-600">{letter}</span>;
    }
  };
  
  const renderAnswer = (answer: string) => {
    return answer.split('').map((_, i) => {
      if (answer[i] === ' ') {
        return <span key={i}>&nbsp;</span>; // Render space as a non-breaking space
      } else {
        return renderChar(i, answer);
      }
    });
  };
  


  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChar(e.target.value)
  }

  return (
    <div className="p-12 border rounded">
      {qna.map((item) => (
        <div key={item.id}>
          <div >{item.question}</div>
          <div className="select-none font-bold md:text-2xl text-xl border flex-wrap flex p-2">
            {/* {item.answer.split('').map((_, i) => renderChar(i, item.answer))} */}
            {renderAnswer(item.answer)}
          </div>

          <textarea onChange={handlePromptChange} rows={6} placeholder="Enter the answer below" className="p-2 mt-4 w-full rounded border outline-none focus:ring ring-blue-200 focus:border-none" />
        </div>

      ))}
    </div>
  )
}
