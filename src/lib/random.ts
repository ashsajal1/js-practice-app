import { QnaTypes, qna } from "./qna";

export function getRandomSort() {
  return Math.random() - 0.5;
}

export const generateRandomTopics = (): QnaTypes[] => {
  const randomTopics = qna.slice().sort(getRandomSort);
  return randomTopics;
};
