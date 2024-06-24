import { QuizQuestionType } from "../types";
import { rustBasicQuizQuestions } from "./basic";
import { rustHardQuizQuestions } from "./hard";

export const rustQuizQuestions: QuizQuestionType[] = [...rustHardQuizQuestions, ...rustBasicQuizQuestions];