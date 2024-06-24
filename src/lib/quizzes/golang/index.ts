import { QuizQuestionType } from "../types";
import { golangConcurrencyQuestions } from "./concurrency";
import { golangUnCategorizedQuizQuestions } from "./uncategorized";

export const golangQuizQuestions: QuizQuestionType[] = [
  ...golangUnCategorizedQuizQuestions,
  ...golangConcurrencyQuestions,
];
