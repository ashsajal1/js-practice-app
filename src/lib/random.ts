import { golangConcepts } from "./concepts/golang";
import { reactConcepts } from "./concepts/react";
import { rustConcepts } from "./concepts/rust";
import { QnaTypes, qna } from "./concepts/javascript";
import { quizQuestions } from "./quizzes/javascript";

export function getRandomSort() {
  return Math.random() - 0.5;
}

export const generateRandomConcepts = (): QnaTypes[] => {
  const randomTopics = qna
    .concat(rustConcepts, golangConcepts, reactConcepts)
    .slice()
    .sort(getRandomSort);
  return randomTopics;
};

export const generateRandomQuizzes = quizQuestions.sort(getRandomSort)