import { combineReducers } from "@reduxjs/toolkit";
import topicReducer, { ConceptState } from "../features/concept/conceptSlice";

const rootReducer = combineReducers({
  concept: topicReducer,
});

export type RootState = {
  concept: ConceptState;
};

export default rootReducer;