import { combineReducers } from "@reduxjs/toolkit";
import topicReducer, { ConceptState } from "../features/concept/conceptSlice";
import quizReducer, { QuizState } from "../features/quiz/quizSlice";
import voiceReducer, {VoiceState} from "../features/voice/voiceSlice";

const rootReducer = combineReducers({
  concept: topicReducer,
  quiz: quizReducer,
  voice: voiceReducer,
});

export type RootState = {
  concept: ConceptState;
  quiz: QuizState;
  voice: VoiceState
};

export default rootReducer;
