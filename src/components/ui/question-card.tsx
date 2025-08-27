import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, HelpCircle } from 'lucide-react';

export default function QuestionCard({ question, answer, id }: { question: string, answer: string, id: number | string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="group relative flex flex-col h-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-500/30"
        >
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-400 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Question */}
            <div className="flex items-start gap-3 mb-3">
                <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 flex-1">
                    {question}
                </h3>
            </div>
            
            {/* Answer preview */}
            <div className="flex gap-3">
                <div className="p-1.5 text-gray-400">
                    <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 flex-grow">
                    {answer}
                </p>
            </div>
            
            {/* Action button */}
            <div className="mt-auto">
                <Link 
                    to={`/practice?id=${id.toString()}`} 
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-300"
                >
                    Practice Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
