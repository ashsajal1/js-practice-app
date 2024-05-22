import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { renderAnswer } from "../lib/renderAnswer";
import NotFoundCard from "../components/ui/not-found-card";
import QuizCard from "../components/ui/quiz-card";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import AnimatedPage from "../components/ui/animated-page";
import { useDispatch } from "react-redux";
import { getTopicById } from "../features/topic/topicSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function Practice() {
  const [char, setChar] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const { questionId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentTopic } = useTypedSelector((state) => state.topic);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      if (block instanceof HTMLElement) {
        hljs.highlightBlock(block);
      }
    });
  }, [isLoading]);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        await dispatch(getTopicById(questionId || ""));
        setIsLoading(false);
      } catch (err) {
        if (typeof err === 'string') {
            setError(err);
          } else if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
          setIsLoading(false);
      }
    };
    fetchTopic();
  }, [dispatch, questionId]);

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChar(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTopic?.quiz) {
      setShowQuiz(true);
    } else {
      navigate("/result", {
        state: { question: currentTopic?.question },
      });
    }
  };

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>Error</>;
  }

  if (!currentTopic) {
    return <NotFoundCard content="Question" />;
  }

  return (
    <AnimatedPage>
      <div className={`p-12 ${currentTopic.code ? "" : "h-screen"}`}>
        <div className={`${showQuiz ? "hidden" : ""}`}>
          <div data-aos="fade-right" className="dark:text-white mb-2">
            {currentTopic.question}
          </div>
          <div
            data-aos="fade-right"
            className="select-none font-bold md:text-2xl text-xl border dark:border-gray-800 rounded flex-wrap flex p-2 g-text"
          >
            {renderAnswer(currentTopic.answer, char)}
          </div>

          <form data-aos="fade-right" onSubmit={handleSubmit}>
            <textarea
              onChange={handlePromptChange}
              rows={6}
              placeholder="Enter the answer below"
              className="p-2 mt-4 w-full rounded border outline-none focus:ring-1 ring-blue-200 focus:border-none dark:bg-black dark:border-gray-600 dark:text-white"
            />
            <button className="mt-2 btn w-full" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className={`${showQuiz ? "" : "hidden"}`}>
          {currentTopic.quiz && (
            <QuizCard question={currentTopic.question} quiz={currentTopic.quiz} />
          )}
        </div>

        {currentTopic.code && (
          <>
            <h3 className="mt-6 text-xl font-extralight text-left border-b dark:border-b-gray-800 pb-2 dark:text-white">
              Code example
            </h3>
            <pre className="border p-2 rounded mt-4">
              <code className="text-black text-wrap dark:text-white">{currentTopic.code}</code>
            </pre>
          </>
        )}
      </div>
    </AnimatedPage>
  );
}