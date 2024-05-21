import { QnaTypes } from "../lib/qna";

interface TopicState {
  topics: QnaTypes[];
}


interface RootState {
  topic: TopicState;
}

export default RootState;
