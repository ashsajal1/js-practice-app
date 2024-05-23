import { combineReducers } from "@reduxjs/toolkit";
import topicReducer, { ConceptState } from "../features/concept/conceptSlice";
import quizReducer, { QuizState } from "../features/quiz/quizSlice";

const rootReducer = combineReducers({
  concept: topicReducer,
  quiz: quizReducer,
});

export type RootState = {
  concept: ConceptState;
  quiz: QuizState;
};

export default rootReducer;
