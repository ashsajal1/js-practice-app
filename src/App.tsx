import { ChangeEvent, useState } from "react"
import { qna } from "./lib/qna";

export default function App() {
  const [char, setChar] = useState('');
  const context = qna.filter(i => i.id === 2)[0]

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
        return <span key={i}>&nbsp;</span>;
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
        <div>
          <div >{context.question}</div>
          <div className="select-none font-bold md:text-2xl text-xl border flex-wrap flex p-2">
            {renderAnswer(context.answer)}
          </div>

          <textarea onChange={handlePromptChange} rows={6} placeholder="Enter the answer below" className="p-2 mt-4 w-full rounded border outline-none focus:ring ring-blue-200 focus:border-none" />
        </div>

    </div>
  )
}
