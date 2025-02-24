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
import { cssAnimationConcepts } from "./concepts/css-animation";
import { ethicalHackingConcepts } from "./concepts/ethical-hacking";
import { linuxConcepts } from "./concepts/linux";
import { serverConcepts } from "./concepts/server";
import { dataCenterConcepts } from "./concepts/data-center";
import { devopsConcepts } from "./concepts/devops";

export function getRandomSort() {
  return Math.random() - 0.5;
}

export const generateRandomConcepts = (): QnaTypes[] => {
  const randomTopics = qna
    .concat(
      rustConcepts,
      golangConcepts,
      reactConcepts,
      vue3Concepts,
      cssConcepts,
      cssAnimationConcepts,
      ethicalHackingConcepts,
      linuxConcepts,
      serverConcepts,
      dataCenterConcepts,
      devopsConcepts
    )
    .slice()
    .sort(getRandomSort);
  return randomTopics;
};

export const generateRandomQuizzes = quizQuestions
  .concat(
    golangQuizQuestions,
    rustQuizQuestions,
    dotnetQuizQuestions,
    tailwindcssQuizzes
  )
  .sort(getRandomSort);
