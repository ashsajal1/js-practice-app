import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizQuestionType } from "../../lib/quizzes/types";
import { generateRandomQuizzes } from "../../lib/random";

export interface QuizState {
  quiz: QuizQuestionType[];
}

const initialState: QuizState = {
  quiz: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getAllQuiz: (state) => {
      state.quiz = generateRandomQuizzes;
    },
    getAllQuizByTopic: (state, action: PayloadAction<string>) => {
      const topic = action.payload;
      state.quiz = generateRandomQuizzes.filter((i) => i.topic === topic);
    },
  },
});

export const { getAllQuiz } = quizSlice.actions;
export default quizSlice.reducer;
