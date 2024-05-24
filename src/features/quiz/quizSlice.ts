import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizQuestionType } from "../../lib/quizzes/types";
import { generateRandomQuizzes } from "../../lib/random";

export interface QuizState {
  quizzes: QuizQuestionType[];
}

const initialState: QuizState = {
  quizzes: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getAllQuiz: (state) => {
      state.quizzes = generateRandomQuizzes;
    },
    getAllQuizByTopic: (state, action: PayloadAction<string>) => {
      const topic = action.payload;
      state.quizzes = generateRandomQuizzes.filter((i) => i.topic === topic);
    },
  },
});

export const { getAllQuiz, getAllQuizByTopic } = quizSlice.actions;
export default quizSlice.reducer;
