import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TopicBadge from "../components/ui/topic-badge";
import Button from "../components/ui/button";
import { ArrowDownLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import { HiMiniXMark } from "react-icons/hi2";
import PageSeo from "../components/seo/interview-page-seo";

export default function Concept() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const topic = searchParams.get('topic') || 'all'

    const concepts = useTypedSelector((state) => state.concept.concepts);
    const filteredConcepts = topic === 'all' ? concepts : concepts.filter((concept) => concept.topic.toLowerCase().includes(topic.toLowerCase()));
    const totalQuestions = filteredConcepts.length;
    const questionsPerPage = 15;
    const totalPages = Math.ceil(totalQuestions / questionsPerPage);

    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const displayedQuestions = filteredConcepts.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        navigate(`/concept?page=${newPage}&topic=${topic}`);
    };

    return (
        <AnimatedPage>
            <PageSeo title="Explore and Practice Programming Concepts" description="Dive into a comprehensive guide designed to help you master key programming concepts. From basic data types and control flow to advanced topics like asynchronous programming and memory management, explore detailed explanations and practical exercises to enhance your coding skills." />

            <div className="p-4 flex flex-col items-center justify-center relative">

                {(topic.length > 0 && topic !== 'all') && <div className="p-2 rounded w-full border dark:border-gray-700 shadow dark:shadow my-3 flex items-center justify-between">
                    <p className="dark:text-white">Showing results for : <span className="text-blue-600">{topic}</span></p>

                    <HiMiniXMark onClick={() => { history.back() }} className="h-6 w-6 dark:text-white" />
                </div>}

                {filteredConcepts.length !== 0 && <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore concepts to practice</h1>}

                {totalQuestions === 0 ? (
                    <>
                        <div className="mb-4 flex flex-col items-center justify-center">
                            <div className="text-center text-gray-500">No questions found for the topic "{topic}". Instead search by topic:</div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <TopicBadge topic="javascript" />
                                <TopicBadge topic="react" />
                                <TopicBadge topic="rust" />
                                <TopicBadge topic="golang" />
                            </div>

                            <div className="flex items-center mt-4 gap-2">

                                <Button onClick={() => window.history.back()} variant="outline" className="gap-2">
                                    <ArrowDownLeftIcon className="h-5 w-5" />
                                    Back
                                </Button>

                                <Link to='/'>
                                    <Button className="gap-2">
                                        <HomeIcon className="h-5 w-5" />
                                        Go to home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </>

                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {displayedQuestions.map((question) => (
                            <QuestionCard question={question.question} answer={question.answer} id={question.id} key={question.id} />
                        ))}
                    </div>
                )}
                {totalQuestions > 0 && (
                    <div className="mt-8 flex flex-col items-center justify-center w-full">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Showing <span className="font-medium">{startIndex + 1}-{Math.min(endIndex, totalQuestions)}</span> of <span className="font-medium">{totalQuestions}</span> questions
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={page === 1}
                                className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="First page"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                                className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Previous page"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (page <= 3) {
                                    pageNum = i + 1;
                                } else if (page >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = page - 2 + i;
                                }
                                
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-md mx-0.5 transition-colors ${
                                            pageNum === page
                                                ? 'bg-blue-600 text-white font-medium shadow-md'
                                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                        aria-current={pageNum === page ? 'page' : undefined}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPages}
                                className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Next page"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                disabled={page === totalPages}
                                className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Last page"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {totalPages > 5 && (
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Page {page} of {totalPages}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </AnimatedPage>
    );
}