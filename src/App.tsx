type QnaTypes = { id: number, question: string, answer: string }

export default function App() {
  const qna: QnaTypes[] = [
    {
      id: 1,
      question: "What is promise in Javascript?",
      answer: "A promise in JavaScript represents the eventual completion or failure of an asynchronous operation, encapsulating its result."
    }
  ]
  return (
    <div className="p-12 border rounded">
      {qna.map((item) => (
        <div key={item.id}>
          <div>{item.question}</div>
          <div className="select-none font-bold md:text-2xl text-xl">{item.answer}</div>

          <textarea rows={12} placeholder="Enter the answer below" className="p-2 mt-4 w-full rounded border outline-none focus:ring ring-blue-200 focus:border-none" />
        </div>

      ))}
    </div>
  )
}
