import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function QuestionCard({ question, answer, id }: { question: string, answer: string, id: number | string }) {
    return (
        <>
            <motion.div
                data-aos='fade-up'
                className="flex flex-col rounded p-4 border dark:border-gray-700 w-full md:min-w-[350px] md:max-w-[430px] bg-white dark:bg-darkColor dark:text-darkText">
                <p className='font-bold'>{question.slice(0, 40)} {question.length > 40 ? '...' : ''}</p>
                <p className='font-light'>{answer.slice(0, 80)}...</p>
                <div className='mt-4'>
                    <Link to={`/practice?id=${id.toString()}`} className='btn'>Practice</Link>
                </div>
            </motion.div>
        </>
    )
}
