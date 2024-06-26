import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { renderAnswer } from "../lib/renderAnswer";
import NotFoundCard from "../components/ui/not-found-card";
import QuizCard from "../components/ui/quiz-card";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import AnimatedPage from "../components/ui/animated-page";
import { useDispatch } from "react-redux";
import { getConceptById } from "../features/concept/conceptSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useLocation } from 'react-router-dom';
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useTextToSpeech } from "../hooks/useTextToSpeech";
import Button from "../components/ui/button";
import PageSeo from "../components/seo/interview-page-seo";

export default function Practice() {
  const [char, setChar] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { speak, stop } = useTextToSpeech()

  const searchParams = new URLSearchParams(location.search);
  const conceptId = searchParams.get('id') || '';
  // console.log(searchParams, conceptId)

  const { currentConcept } = useTypedSelector((state) => state.concept);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      if (block instanceof HTMLElement) {
        hljs.highlightElement(block);
      }
    });
  }, [isLoading]);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        await dispatch(getConceptById(conceptId));
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
  }, [dispatch, conceptId]);


  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChar(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentConcept?.quiz) {
      setShowQuiz(true);
    } else {
      navigate("/result", {
        state: { question: currentConcept?.question, topic: currentConcept?.topic },
      });
    }
  };

  if (isLoading) {
    return <div className="w-full p-12">
      <div className="w-full h-6 rounded animate-pulse bg-gray-100"></div>
      <div className="w-full h-20 rounded animate-pulse bg-gray-100 mt-6"></div>
      <div className="w-full h-40 rounded animate-pulse bg-gray-100 mt-6"></div>
      <div className="w-full h-12 rounded animate-pulse bg-gray-100 mt-6"></div>
    </div>
  }

  if (error) {
    return <h1 className="p-24 mt-12 text-red-600">An unexpected error occurred!</h1>
  }

  if (!currentConcept) {
    return <NotFoundCard content="Question" />;
  }

  return (
    <AnimatedPage>
      <PageSeo title={`Practice ${currentConcept.question}`} description={`${currentConcept.question} + ' : ' + ${currentConcept.answer}`} />
      <div className={`p-12 ${currentConcept.code ? "" : "h-screen"}`}>
        <div className={`${showQuiz ? "hidden" : ""}`}>
          <div data-aos="fade-right" className="dark:text-white mb-2 flex items-center gap-2">
            {currentConcept.question}
          </div>
          <div
            data-aos="fade-right"
            className="select-none font-bold md:text-2xl text-xl border dark:border-gray-800 rounded flex-wrap flex p-2 g-text"
          >
            {renderAnswer(currentConcept.answer, char)}
          </div>

          <form data-aos="fade-right" onSubmit={handleSubmit}>
            <textarea
              value={char}
              onChange={handlePromptChange}
              rows={6}
              placeholder="Enter the answer below"
              className="p-2 mt-4 w-full rounded border outline-none focus:ring-1 ring-blue-600 focus:border-none dark:bg-darkColor dark:border-gray-600 dark:text-white"
            />

            <button className="mt-2 btn w-full" type="submit">
              Submit
            </button>

          </form>
        </div>

        <div className={`${showQuiz ? "" : "hidden"}`}>
          {currentConcept.quiz && (
            <QuizCard topic={currentConcept.topic} uniqueKey={currentConcept.id} question={currentConcept.question} quiz={currentConcept.quiz} />
          )}
        </div>
        <div className="flex items-center mt-2 justify-between gap-2">
          <Button onClick={() => { speak(currentConcept.answer) }} className="w-full flex items-center gap-2" variant="outline">
            <HiSpeakerWave className="h-5 w-5" />
            Listen
          </Button>
          <Button onClick={() => stop()} className="w-full flex items-center gap-2" variant="outline">
            <HiSpeakerXMark className="h-5 w-5" />
            Stop Listening
          </Button>
        </div>

        {currentConcept.code && (
          <>
            <h3 className="mt-6 text-xl font-extralight text-left border-b dark:border-b-gray-800 pb-2 dark:text-white">
              Code example
            </h3>
            <pre className="border p-2 rounded mt-4">
              <code className="text-black text-wrap dark:text-white">{currentConcept.code}</code>
            </pre>
          </>
        )}
      </div>
    </AnimatedPage>
  );
}