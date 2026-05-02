import type { GameQuestion, GradeInfo, GradeLevel } from './types';

/** Fisher-Yates Shuffle Algorithm */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/** Select N random questions from the pool */
export function selectQuestions(pool: GameQuestion[], count: number): GameQuestion[] {
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/** Calculate grade based on correct percentage */
export function getGrade(correct: number, total: number): GradeInfo {
  const pct = (correct / total) * 100;

  const grades: Record<GradeLevel, GradeInfo> = {
    S: { level: 'S', title: 'SYSTEM OVERRIDE', subtitle: '完美駭入 — 你已掌握面試的核心系統', color: '#00F0FF' },
    A: { level: 'A', title: 'ACCESS GRANTED', subtitle: '權限核准 — 你的準備度令人印象深刻', color: '#00FF41' },
    B: { level: 'B', title: 'FIREWALL DETECTED', subtitle: '遭遇防火牆 — 部分觀念需要強化升級', color: '#FFE600' },
    C: { level: 'C', title: 'CONNECTION LOST', subtitle: '連線中斷 — 建議重新裝備後再次挑戰', color: '#FF003C' },
  };

  if (pct >= 90) return grades.S;
  if (pct >= 70) return grades.A;
  if (pct >= 50) return grades.B;
  return grades.C;
}
