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
                    <div className="mt-6 flex justify-center">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                className={`px-3 py-2 rounded-md mx-1 ${pageNumber === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </AnimatedPage>
    );
}