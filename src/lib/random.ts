import { golangConcepts } from "./concepts/golang";
import { rustConcepts } from "./concepts/rust";
import { QnaTypes, qna } from "./qna";

export function getRandomSort() {
  return Math.random() - 0.5;
}

export const generateRandomTopics = (): QnaTypes[] => {
  const randomTopics = qna
    .concat(rustConcepts, golangConcepts)
    .slice()
    .sort(getRandomSort);
  return randomTopics;
};
