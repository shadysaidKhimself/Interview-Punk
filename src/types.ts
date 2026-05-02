export interface GameQuestion {
  id: string;
  type: 'TF' | 'MCQ';
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface FAQItem {
  category: string;
  question: string;
  tips: string;
}

export interface ChecklistItem {
  phase: string;
  task: string;
  checked: boolean;
}

export interface UserAnswer {
  questionIndex: number;
  question: GameQuestion;
  userAnswer: string;
  isCorrect: boolean;
}

export type GradeLevel = 'S' | 'A' | 'B' | 'C';

export interface GradeInfo {
  level: GradeLevel;
  title: string;
  subtitle: string;
  color: string;
}

export type AppView = 'landing' | 'dashboard' | 'game' | 'faq' | 'checklist' | 'results';
