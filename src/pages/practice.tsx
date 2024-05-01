import { ChangeEvent, useState } from "react"
import { qna } from "../lib/qna";
import { useParams, Link } from 'react-router-dom'
import { renderAnswer } from "../lib/renderAnswer";

export default function Practice() {
    const [char, setChar] = useState('');
    const { questonId } = useParams()

    // console.log(questonId)
    let context;
    if (questonId) {
        context = qna.filter(i => i.id === parseInt(questonId))[0]
    }

    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChar(e.target.value)
    }

    if (context === undefined) {
        return <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-12 rounded border border-blue-700 border-dashed">
                <p className="font-bold text-4xl bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-transparent">404</p>
                <p className="bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-transparent">Question not found</p>

                <div className="flex items-center gap-2 mt-4">
                    <Link className="bg-gradient-to-br from-blue-600 to-blue-900 p-2 rounded text-white flex items-center justify-center hover:to-blue-950 active:ring cursor-pointer select-none" to={'/'}>Home</Link>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-2 rounded text-white flex items-center justify-center hover:to-blue-950 active:ring cursor-pointer select-none" onClick={() => { window.history.back() }}>Back</div>
                </div>
            </div>
        </div>
    }

    return (
        <div className="p-12 border rounded">
            <div>
                <div >{context.question}</div>
                <div className="select-none font-bold md:text-2xl text-xl border flex-wrap flex p-2">
                    {renderAnswer(context.answer, char)}
                </div>

                <textarea onChange={handlePromptChange} rows={6} placeholder="Enter the answer below" className="p-2 mt-4 w-full rounded border outline-none focus:ring ring-blue-200 focus:border-none" />
            </div>

        </div>
    )
}
