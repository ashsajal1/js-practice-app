import { quizQuestions } from "../../lib/quizzes/javascript"

export default function QuizQuestion() {
    const question = quizQuestions[0];
    return (
        <div className="w-full md:w-1/3 border p-6 md:p-4 rounded">
            <p>{question.question}</p>

            {question.code && <pre><code>{question.code}</code></pre>}

            <div>
                {question.options?.map(i => <div className="p-2 rounded border my-1">{i}</div>)}
            </div>

            <div className="btn">Submit</div>
        </div>
    )
}
