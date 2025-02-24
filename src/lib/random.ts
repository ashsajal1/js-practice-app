import { golangConcepts } from "./concepts/golang";
import { reactConcepts } from "./concepts/react";
import { rustConcepts } from "./concepts/rust";
import { QnaTypes, qna } from "./concepts/javascript";
import { quizQuestions } from "./quizzes/javascript";
import { golangQuizQuestions } from "./quizzes/golang";
import { rustQuizQuestions } from "./quizzes/rust";
import { dotnetQuizQuestions } from "./quizzes/dotnet";
import { tailwindcssQuizzes } from "./quizzes/tailwindcss";
import { vue3Concepts } from "./concepts/vue3";
import { cssConcepts } from "./concepts/css";

export function getRandomSort() {
  return Math.random() - 0.5;
}

export const generateRandomConcepts = (): QnaTypes[] => {
  const randomTopics = qna
    .concat(rustConcepts, golangConcepts, reactConcepts, vue3Concepts, cssConcepts)
    .slice()
    .sort(getRandomSort);
  return randomTopics;
};

export const generateRandomQuizzes = quizQuestions.concat(golangQuizQuestions, rustQuizQuestions, dotnetQuizQuestions, tailwindcssQuizzes).sort(getRandomSort);
