import { Link } from 'react-router-dom'

export default function QuestionCard({ question, answer, id }: { question: string, answer: string, id: number }) {
    return (
        <div  data-aos='fade-up' className="flex flex-col rounded p-4 border dark:border-gray-700 w-full md:min-w-[300px] md:max-w-[435px] bg-white dark:bg-black dark:text-white">
            <p className='font-bold'>{question.slice(0, 45)} {question.length > 45 ? '...' : ''}</p>
            <p className='font-light'>{answer.slice(0, 100)}...</p>
            <div className='mt-4'>
                <Link to={`/q/${id.toString()}`} className='btn'>Practice</Link>
            </div>
        </div>
    )
}
