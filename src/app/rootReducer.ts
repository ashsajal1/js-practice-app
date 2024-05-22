import { combineReducers } from "@reduxjs/toolkit";
import topicReducer, { TopicState } from "../features/topic/topicSlice";

const rootReducer = combineReducers({
  topic: topicReducer,
});

export type RootState = {
  topic: TopicState;
};

export default rootReducer;