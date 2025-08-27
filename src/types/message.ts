export interface Message {
  user: string;
  text: string;
  options?: string[];
  answered?: boolean;
  code?: string;
  isCorrect?: boolean;
  explanation?: string;
}

export type QuizQuestionType = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  code?: string;
  lang: string;
  topic: string;
};
