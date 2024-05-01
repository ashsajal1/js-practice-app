import { ChangeEvent, useState } from "react"
import { qna } from "../lib/qna";
import { useNavigate, useParams } from 'react-router-dom'
import { renderAnswer } from "../lib/renderAnswer";
import NotFoundCard from "../components/ui/not-found-card";

export default function Practice() {
    const [char, setChar] = useState('');
    const { questonId } = useParams()
    const navigate = useNavigate()
    let context;
    if (questonId) {
        context = qna.filter(i => i.id === parseInt(questonId))[0]
    }

    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChar(e.target.value)
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/result')
    }

    if (context === undefined) {
        return <NotFoundCard content='Question' />
    }

    return (
        <div className="p-12 border rounded">
            <div>
                <div>{context.question}</div>
                <div className="select-none font-bold md:text-2xl text-xl border flex-wrap flex p-2 g-text">
                    {renderAnswer(context.answer, char)}
                </div>

                <form onSubmit={handleSubmit}>
                    <textarea onChange={handlePromptChange} rows={6} placeholder="Enter the answer below" className="p-2 mt-4 w-full rounded border outline-none focus:ring ring-blue-200 focus:border-none" />

                    <button className="mt-2 btn w-full" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}
