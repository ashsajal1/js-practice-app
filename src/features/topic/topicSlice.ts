import { createSlice } from "@reduxjs/toolkit";
import { QnaTypes, qna } from "../../lib/qna";
import { getRandomSort } from "../../lib/random";

interface TopicState {
  topics: QnaTypes[];
}

const initialState: TopicState = {
  topics: [],
};

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    getRandomTopics: (state) => {
      const randomTopics = generateRandomTopics();
      state.topics = randomTopics;
    },
  },
});

export const { getRandomTopics } = topicSlice.actions;

export default topicSlice.reducer;

const generateRandomTopics = (): QnaTypes[] => {
  const randomTopics = qna.slice().sort(getRandomSort);
  return randomTopics;
};
