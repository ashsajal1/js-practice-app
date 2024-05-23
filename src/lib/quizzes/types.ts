export interface QuizQuestionType {
    id: number;
    question: string;
    code?: string;
    options?: string[];
    answer: string;
    hint?: string;
    type?: "practical" | "theoretical" | null;
    topic: string;
    lang: string;
  }