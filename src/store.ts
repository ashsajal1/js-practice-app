import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./features/topic/topicSlice";

const store = configureStore({
  reducer: {
    topic: topicReducer,
  },
});

export default store;