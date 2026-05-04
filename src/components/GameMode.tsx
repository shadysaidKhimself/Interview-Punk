import { useState, useMemo } from 'react';
import type { GameQuestion, UserAnswer } from '../types';
import { selectQuestions } from '../utils';

interface GameModeProps {
  questions: GameQuestion[];
  onFinish: (answers: UserAnswer[]) => void;
  onBack: () => void;
}

const QUESTION_COUNT = 20;

export default function GameMode({ questions, onFinish, onBack }: GameModeProps) {
  const selectedQuestions = useMemo(
    () => selectQuestions(questions, QUESTION_COUNT),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const total = selectedQuestions.length;
  const current = selectedQuestions[currentIndex];
  const progress = currentIndex / total;
  const filledBlocks = Math.round(progress * 20);

  const handleAnswer = (answer: string) => {
    const userAnswer: UserAnswer = {
      questionIndex: currentIndex,
      question: current,
      userAnswer: answer,
      isCorrect: answer === current.answer,
    };

    const newAnswers = [...answers, userAnswer];

    if (currentIndex + 1 >= total) {
      onFinish(newAnswers);
    } else {
      setAnswers(newAnswers);
      setCurrentIndex(prev => prev + 1);
      setHoveredOption(null);
    }
  };

  const progressBar = '▓'.repeat(filledBlocks) + '░'.repeat(20 - filledBlocks);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.5rem 1rem',
    }}>
      {/* Top Bar */}
      <div style={{
        width: '100%',
        maxWidth: '750px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        animation: 'fade-in 0.4s ease-out',
      }}>
        <button
          id="btn-game-back"
          onClick={onBack}
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '13px',
            color: '#888',
            background: 'none',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '6px 16px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF003C'; e.currentTarget.style.color = '#FF003C'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888'; }}
        >
          ✕ 中斷模擬
        </button>

        <div style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '12px',
          color: '#00F0FF',
          letterSpacing: '1px',
        }}>
          邏輯驗證程序
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        maxWidth: '750px',
        marginBottom: '2rem',
        animation: 'fade-in 0.4s ease-out',
      }}>
        <div style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '14px',
          color: '#00F0FF',
          marginBottom: '8px',
          letterSpacing: '1px',
        }}>
          [{progressBar}] {String(currentIndex + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </div>
        <div style={{
          width: '100%',
          height: '4px',
          background: '#1A1A1A',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${((currentIndex) / total) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00F0FF, #00FF41)',
            borderRadius: '2px',
            transition: 'width 0.4s ease',
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
          }} />
        </div>
      </div>

      {/* Question Card */}
      <div
        key={current.id}
        style={{
          width: '100%',
          maxWidth: '750px',
          background: 'rgba(26, 26, 26, 0.9)',
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '2rem',
          animation: 'slide-in-right 0.35s ease-out',
        }}
      >
        {/* Category & Type Tag */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '1.2rem',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '11px',
            color: '#00FF41',
            background: 'rgba(0, 255, 65, 0.1)',
            border: '1px solid rgba(0, 255, 65, 0.3)',
            borderRadius: '3px',
            padding: '3px 10px',
            letterSpacing: '1px',
          }}>
            {current.category}
          </span>
          <span style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '11px',
            color: '#FFE600',
            background: 'rgba(255, 230, 0, 0.1)',
            border: '1px solid rgba(255, 230, 0, 0.3)',
            borderRadius: '3px',
            padding: '3px 10px',
            letterSpacing: '1px',
          }}>
            {current.type === 'TF' ? '是非題' : '選擇題'}
          </span>
        </div>

        {/* Question */}
        <h2 style={{
          fontFamily: '"Noto Sans TC", sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          fontWeight: 500,
          color: '#E0E0E0',
          lineHeight: '1.8',
          margin: '0 0 2rem',
        }}>
          {current.question}
        </h2>

        {/* Options */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {current.options.map((option, idx) => {
            const optionValue = current.type === 'TF' ? option : option.charAt(0);
            const isHovered = hoveredOption === optionValue;
            return (
              <button
                key={`${current.id}-opt-${idx}`}
                id={`btn-option-${current.id}-${idx}`}
                onClick={() => handleAnswer(optionValue)}
                onMouseEnter={() => setHoveredOption(optionValue)}
                onMouseLeave={() => setHoveredOption(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 20px',
                  background: isHovered ? 'rgba(0, 240, 255, 0.08)' : 'rgba(13, 13, 13, 0.6)',
                  border: `1px solid ${isHovered ? '#00F0FF' : '#333'}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  boxShadow: isHovered ? '0 0 15px rgba(0, 240, 255, 0.15)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: isHovered ? '#00F0FF' : '#888',
                  minWidth: '28px',
                  transition: 'color 0.2s',
                }}>
                  {current.type === 'TF' ? (option === 'O' ? '◯' : '✕') : option.charAt(0)}
                </span>
                <span style={{
                  fontFamily: '"Noto Sans TC", sans-serif',
                  fontSize: '15px',
                  color: isHovered ? '#E0E0E0' : '#aaa',
                  transition: 'color 0.2s',
                  lineHeight: '1.6',
                }}>
                  {current.type === 'TF'
                    ? (option === 'O' ? '是的，正確' : '不，這是錯的')
                    : option.slice(3)
                  }
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
