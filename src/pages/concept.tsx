import QuestionCard from "../components/ui/question-card";
import AnimatedPage from "../components/ui/animated-page";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Concept() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);

    const questions = useTypedSelector((state) => state.topic.topics);
    const totalQuestions = questions.length;
    const questionsPerPage = 15;
    const totalPages = Math.ceil(totalQuestions / questionsPerPage);

    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const displayedQuestions = questions.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        navigate(`/concept?page=${newPage}`);
    };

    return (
        <AnimatedPage>
            <div className="p-4 flex flex-col items-center justify-center relative">
                <h1 className="g-text font-extrabold text-3xl text-center pb-6">Explore questions to practice</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {displayedQuestions.map((question) => (
                        <QuestionCard question={question.question} answer={question.answer} id={question.id} key={question.id} />
                    ))}
                </div>
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
            </div>
        </AnimatedPage>
    );
}