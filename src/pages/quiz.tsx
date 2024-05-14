// import QuizQuestion from "../components/ui/quiz-question";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { useEffect } from "react";
import { quizQuestions } from '../lib/quiz';

export default function Quiz() {
    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            if (block instanceof HTMLElement) {
                hljs.highlightBlock(block);
            }
        });
    }, []);

    return (
        <>
            {quizQuestions.map(quiz => (
                <div>
                    <div className="w-full md:w-1/3 border p-6 md:p-4 rounded">
                        <p>{quiz.question}</p>

                        {quiz.code && <pre><code>{quiz.code}</code></pre>}

                        <div>
                            {quiz.options?.map(i => <div className="p-2 rounded border my-1">{i}</div>)}
                        </div>

                        <div className="btn">Submit</div>
                    </div>
                </div>
            ))}
        </>
    )
}
