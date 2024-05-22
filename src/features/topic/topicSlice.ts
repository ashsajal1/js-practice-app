import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QnaTypes } from "../../lib/qna";
import { generateRandomTopics } from "../../lib/random";

interface TopicState {
  topics: QnaTypes[];
  currentTopic: QnaTypes | null;
}

const initialState: TopicState = {
  topics: [],
  currentTopic: null,
};

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    getRandomTopics: (state) => {
      const randomTopics = generateRandomTopics();
      state.topics = randomTopics;
    },
    getTopicById: (state, action: PayloadAction<string>) => {
      const topicId = action.payload;
      const foundTopic = state.topics.find((topic) => topic.id === parseInt(topicId));
      state.currentTopic = foundTopic || null;
    },
  },
});

export const { getRandomTopics, getTopicById } = topicSlice.actions;

export default topicSlice.reducer;