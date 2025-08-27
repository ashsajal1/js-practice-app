import { motion } from 'framer-motion';
import { BookOpen, Bookmark, Search, Zap } from 'lucide-react';

export default function NoQuestion() {
    return (
        <motion.div 
            className="w-full max-w-2xl mx-auto p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-blue-500" />
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    No Questions Found
                </h1>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                    We couldn't find any questions matching your current topic selection. Try selecting different topics or check back later for updates.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <motion.div 
                        className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-left"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                            <Bookmark className="w-5 h-5 text-blue-500" />
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Select Topics</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Choose from a variety of topics to find questions that match your interests.</p>
                    </motion.div>
                    
                    <motion.div 
                        className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-left"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3">
                            <Search className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Search Questions</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Use the search feature to find specific questions or concepts.</p>
                    </motion.div>
                    
                    <motion.div 
                        className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-left"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5 text-yellow-500" />
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Get Started</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Start practicing with our curated collection of coding challenges.</p>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Need help? <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Contact support</a>
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
