import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizQuestionType } from "../../lib/quizzes/types";
import { generateRandomQuizzes } from "../../lib/random";

export interface QuizState {
  quizzes: QuizQuestionType[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  quizzes: [],
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getAllQuiz: (state) => {
      state.loading = true;
      state.error = null;
      state.quizzes = generateRandomQuizzes;
      state.loading = false;
    },
    getAllQuizByTopic: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      const topic = action.payload;
      state.quizzes = generateRandomQuizzes.filter((i) => i.topic === topic);
      state.loading = false;
    },
  },
});

export const { getAllQuiz, getAllQuizByTopic } = quizSlice.actions;
export default quizSlice.reducer;
