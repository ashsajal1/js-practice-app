import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useLocation, useNavigate } from 'react-router-dom';
import TopicBadge from "../components/ui/topic-badge";

export default function Concept() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const topic = searchParams.get('topic') || 'all';

    const questions = useTypedSelector((state) => state.topic.topics);
    const filteredQuestions = topic === 'all' ? questions : questions.filter((question) => question.topic.toLowerCase().includes(topic.toLowerCase()));
    const totalQuestions = filteredQuestions.length;
    const questionsPerPage = 15;
    const totalPages = Math.ceil(totalQuestions / questionsPerPage);

    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const displayedQuestions = filteredQuestions.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        navigate(`/concept?page=${newPage}&topic=${topic}`);
    };

    return (
        <AnimatedPage>
            <div className="p-4 flex flex-col items-center justify-center relative">
                <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore questions to practice</h1>

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