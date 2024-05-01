import { Link } from 'react-router-dom'

export default function QuestionCard({ question, answer, id }: { question: string, answer: string, id: number }) {
    return (
        <div className="flex flex-col rounded p-4 border w-full md:w-[300px]">
            <p className='font-bold'>{question}</p>
            <p className='font-light'>{answer}</p>
            <div className='mt-4'>
                <Link to={`/q/${id.toString()}`} className='btn'>Practice</Link>
            </div>
        </div>
    )
}
