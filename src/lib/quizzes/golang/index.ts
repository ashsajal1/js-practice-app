import { QuizQuestionType } from "../types";
import { golangAdvancedQuestions } from "./advance";
import { golangConcurrencyQuestions } from "./concurrency";
import { golangIOQuestions } from "./io";
import { golangUnCategorizedQuizQuestions } from "./uncategorized";

export const golangQuizQuestions: QuizQuestionType[] = [
  ...golangUnCategorizedQuizQuestions,
  ...golangConcurrencyQuestions,
  ...golangIOQuestions,
  ...golangAdvancedQuestions
];
