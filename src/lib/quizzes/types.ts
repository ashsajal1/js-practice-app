export interface QuizQuestionType {
  id: number | string;
  question: string;
  code?: string;
  options?: string[];
  answer: string;
  hint?: string;
  type?: "practical" | "theoretical";
  topic: string;
  subTopic?: string;
  lang: string;
  explanation?: string;
  complexity?: "easy" | "normal" | "hard";
}
