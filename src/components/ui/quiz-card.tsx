import { QuizProps } from "../../lib/qna";

export default function QuizCard({ quiz, handleSubmit }: { quiz: QuizProps, handleSubmit: () => void }) {
    return (
        <div className="p-4 rounded border shadow">
            <p className="text-lg font-medium my-2">{quiz.question}</p>
            {quiz.options.map((i) => (
                <>
                    <p className="p-2 border rounded mb-2">{i}</p>
                </>
            ))}
            <button onClick={handleSubmit} className="btn w-full">Submit</button>
        </div>
    )
}
