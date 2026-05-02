import { useState, useEffect } from 'react';
import type { UserAnswer } from '../types';
import { getGrade } from '../utils';

interface ResultsPageProps {
  answers: UserAnswer[];
  onReboot: () => void;
  onBackToDashboard: () => void;
}

export default function ResultsPage({ answers, onReboot, onBackToDashboard }: ResultsPageProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);

  const total = answers.length;
  const correct = answers.filter(a => a.isCorrect).length;
  const wrong = answers.filter(a => !a.isCorrect);
  const grade = getGrade(correct, total);
  const pct = Math.round((correct / total) * 100);

  useEffect(() => {
    let current = 0;
    const target = pct;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        setTimeout(() => setShowDetails(true), 500);
      }
      setAnimatedScore(current);
    }, 40);
    return () => clearInterval(interval);
  }, [pct]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
    }}>
      {/* Grade Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        animation: 'slide-up 0.6s ease-out',
      }}>
        {/* Grade Letter */}
        <div style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: 'clamp(4rem, 15vw, 8rem)',
          fontWeight: 900,
          color: grade.color,
          textShadow: `0 0 40px ${grade.color}88, 0 0 80px ${grade.color}44`,
          lineHeight: 1,
          animation: 'float 3s ease-in-out infinite',
        }}>
          {grade.level}
        </div>

        {/* Grade Title */}
        <div style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          fontWeight: 700,
          color: grade.color,
          marginTop: '0.5rem',
          letterSpacing: '4px',
          textShadow: `0 0 10px ${grade.color}66`,
        }}>
          {grade.title}
        </div>

        {/* Subtitle */}
        <div style={{
          fontFamily: '"Noto Sans TC", sans-serif',
          fontSize: '14px',
          color: '#aaa',
          marginTop: '0.5rem',
        }}>
          {grade.subtitle}
        </div>
      </div>

      {/* Score Panel */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: 'rgba(26, 26, 26, 0.9)',
        border: `1px solid ${grade.color}44`,
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        marginBottom: '2rem',
        animation: 'slide-up 0.6s ease-out 0.2s both',
        boxShadow: `0 0 30px ${grade.color}15`,
      }}>
        {/* Animated Score */}
        <div style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: '3rem',
          fontWeight: 900,
          color: '#E0E0E0',
          animation: 'count-up-glow 1s ease-out',
        }}>
          {animatedScore}
          <span style={{ fontSize: '1.5rem', color: '#888' }}>%</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginTop: '1rem',
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '14px',
        }}>
          <div>
            <span style={{ color: '#00FF41' }}>✓ </span>
            <span style={{ color: '#aaa' }}>{correct} 答對</span>
          </div>
          <div>
            <span style={{ color: '#FF003C' }}>✕ </span>
            <span style={{ color: '#aaa' }}>{wrong.length} 答錯</span>
          </div>
          <div>
            <span style={{ color: '#888' }}>Σ </span>
            <span style={{ color: '#aaa' }}>{total} 總題數</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        animation: 'slide-up 0.6s ease-out 0.4s both',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <ActionButton
          id="btn-reboot"
          label="⟳ 重新挑戰"
          color="#00F0FF"
          onClick={onReboot}
        />
        <ActionButton
          id="btn-back-dashboard"
          label="◁ 返回主控台"
          color="#888"
          onClick={onBackToDashboard}
        />
      </div>

      {/* Error Analysis */}
      {showDetails && wrong.length > 0 && (
        <div style={{
          width: '100%',
          maxWidth: '750px',
          animation: 'slide-up 0.5s ease-out',
        }}>
          <h2 style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: '1rem',
            fontWeight: 700,
            color: '#FF003C',
            marginBottom: '1rem',
            letterSpacing: '2px',
          }}>
            ▸ ERROR LOG — 錯題解析
          </h2>

          {wrong.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(26, 26, 26, 0.9)',
                border: '1px solid #333',
                borderLeft: '3px solid #FF003C',
                borderRadius: '6px',
                padding: '1.5rem',
                marginBottom: '1rem',
                animation: `slide-up 0.4s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Question */}
              <div style={{
                fontFamily: '"Noto Sans TC", sans-serif',
                fontSize: '15px',
                color: '#E0E0E0',
                lineHeight: '1.7',
                marginBottom: '1rem',
              }}>
                <span style={{
                  fontFamily: '"Share Tech Mono", monospace',
                  color: '#FF003C',
                  fontSize: '12px',
                  marginRight: '8px',
                }}>
                  Q{String(item.questionIndex + 1).padStart(2, '0')}
                </span>
                {item.question.question}
              </div>

              {/* Your Answer vs Correct */}
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginBottom: '1rem',
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: '13px',
                flexWrap: 'wrap',
              }}>
                <div>
                  <span style={{ color: '#FF003C' }}>你的回答: </span>
                  <span style={{ color: '#FF003C' }}>{item.userAnswer}</span>
                </div>
                <div>
                  <span style={{ color: '#00FF41' }}>正確答案: </span>
                  <span style={{ color: '#00FF41' }}>{item.question.answer}</span>
                </div>
              </div>

              {/* Explanation */}
              <div style={{
                fontFamily: '"Noto Sans TC", sans-serif',
                fontSize: '14px',
                color: '#aaa',
                lineHeight: '1.7',
                padding: '12px',
                background: 'rgba(0, 240, 255, 0.03)',
                borderRadius: '4px',
                borderLeft: '2px solid #00F0FF44',
              }}>
                💡 {item.question.explanation}
              </div>
            </div>
          ))}
        </div>
      )}

      {showDetails && wrong.length === 0 && (
        <div style={{
          textAlign: 'center',
          animation: 'slide-up 0.5s ease-out',
          fontFamily: '"Share Tech Mono", monospace',
          color: '#00FF41',
          fontSize: '14px',
          padding: '2rem',
        }}>
          {'>'} 完美表現 — 未偵測到任何錯誤 {'<'}
        </div>
      )}
    </div>
  );
}

function ActionButton({ id, label, color, onClick }: {
  id: string; label: string; color: string; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      id={id}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '12px 28px',
        fontFamily: '"Orbitron", sans-serif',
        fontSize: '13px',
        fontWeight: 700,
        color: hovered ? '#0D0D0D' : color,
        background: hovered ? color : 'transparent',
        border: `1px solid ${color}`,
        borderRadius: '4px',
        cursor: 'pointer',
        letterSpacing: '2px',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 0 15px ${color}88` : 'none',
      }}
    >
      {label}
    </button>
  );
}
