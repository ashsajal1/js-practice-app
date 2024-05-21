import { createSlice } from "@reduxjs/toolkit";
import { QnaTypes } from "../../lib/qna";
import { generateRandomTopics } from "../../lib/random";

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
