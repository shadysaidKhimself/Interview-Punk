import { useState, useMemo } from 'react';
import type { ChecklistItem } from '../types';

interface ChecklistPageProps {
  items: ChecklistItem[];
  onBack: () => void;
}

export default function ChecklistPage({ items: initialItems, onBack }: ChecklistPageProps) {
  const [items, setItems] = useState<ChecklistItem[]>(
    initialItems.map(i => ({ ...i, checked: false }))
  );

  const phases = useMemo(() => {
    return Array.from(new Set(items.map(i => i.phase)));
  }, [items]);

  const toggleItem = (idx: number) => {
    setItems(prev => prev.map((item, i) =>
      i === idx ? { ...item, checked: !item.checked } : item
    ));
  };

  const totalChecked = items.filter(i => i.checked).length;
  const totalItems = items.length;
  const overallProgress = totalItems > 0 ? (totalChecked / totalItems) * 100 : 0;

  const phaseColors: Record<string, string> = {
    '面試前': '#00F0FF',
    '等待時': '#00FF41',
    '進入面試': '#FFE600',
    '面試過程': '#00F0FF',
    '互動與氣場': '#00FF41',
    '結尾與離開': '#FFE600',
    '面試後': '#FF003C',
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
    }}>
      {/* Header */}
      <div style={{
        width: '100%',
        maxWidth: '700px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        animation: 'fade-in 0.4s ease-out',
      }}>
        <button
          id="btn-checklist-back"
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
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#00F0FF'; e.currentTarget.style.color = '#00F0FF'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888'; }}
        >
          ◁ 返回
        </button>
        <h1 style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          fontWeight: 700,
          color: '#FFE600',
          letterSpacing: '3px',
          margin: 0,
          textShadow: '0 0 15px rgba(255, 230, 0, 0.4)',
        }}>
          🔧 裝備檢核點
        </h1>
      </div>

      {/* Overall Progress */}
      <div style={{
        width: '100%',
        maxWidth: '700px',
        marginBottom: '2rem',
        animation: 'slide-up 0.5s ease-out',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '13px',
          marginBottom: '8px',
        }}>
          <span style={{ color: '#888' }}>整體就緒度 OVERALL READINESS</span>
          <span style={{ color: overallProgress === 100 ? '#00FF41' : '#FFE600' }}>
            {totalChecked}/{totalItems} ({Math.round(overallProgress)}%)
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          background: '#1A1A1A',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid #333',
        }}>
          <div style={{
            width: `${overallProgress}%`,
            height: '100%',
            background: overallProgress === 100
              ? 'linear-gradient(90deg, #00FF41, #00F0FF)'
              : 'linear-gradient(90deg, #FFE600, #FF003C)',
            borderRadius: '4px',
            transition: 'width 0.4s ease, background 0.4s ease',
            boxShadow: overallProgress === 100
              ? '0 0 15px rgba(0, 255, 65, 0.5)'
              : '0 0 10px rgba(255, 230, 0, 0.3)',
          }} />
        </div>
        {overallProgress === 100 && (
          <div style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: '14px',
            color: '#00FF41',
            textAlign: 'center',
            marginTop: '12px',
            letterSpacing: '3px',
            textShadow: '0 0 15px rgba(0, 255, 65, 0.6)',
            animation: 'glow-pulse-green 2s ease-in-out infinite',
            padding: '8px',
            border: '1px solid #00FF4144',
            borderRadius: '4px',
          }}>
            ★ 系統就緒 — 裝備已完全展開 ★
          </div>
        )}
      </div>

      {/* Phase Sections */}
      {phases.map((phase, phaseIdx) => {
        const phaseItems = items
          .map((item, idx) => ({ ...item, globalIdx: idx }))
          .filter(item => item.phase === phase);
        const phaseChecked = phaseItems.filter(i => i.checked).length;
        const phaseTotal = phaseItems.length;
        const phaseComplete = phaseChecked === phaseTotal;
        const color = phaseColors[phase] || '#00F0FF';

        return (
          <div
            key={phase}
            style={{
              width: '100%',
              maxWidth: '700px',
              marginBottom: '1.5rem',
              animation: `slide-up 0.5s ease-out ${phaseIdx * 0.15}s both`,
            }}
          >
            {/* Phase Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
              padding: '8px 12px',
              background: phaseComplete ? `${color}11` : 'transparent',
              borderRadius: '6px',
              transition: 'background 0.3s',
            }}>
              <div style={{
                fontFamily: '"Orbitron", sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                color: color,
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                {phaseComplete && <span style={{ fontSize: '16px' }}>✓</span>}
                {phase}
              </div>
              <span style={{
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: '12px',
                color: phaseComplete ? color : '#888',
              }}>
                {phaseChecked}/{phaseTotal}
              </span>
            </div>

            {/* Task Items */}
            {phaseItems.map((item) => (
              <button
                key={item.globalIdx}
                id={`btn-check-${item.globalIdx}`}
                onClick={() => toggleItem(item.globalIdx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  marginBottom: '4px',
                  background: item.checked ? 'rgba(26, 26, 26, 0.4)' : 'rgba(26, 26, 26, 0.8)',
                  border: `1px solid ${item.checked ? '#33333366' : '#333'}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
              >
                {/* Checkbox */}
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '4px',
                  border: `2px solid ${item.checked ? color : '#555'}`,
                  background: item.checked ? `${color}22` : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}>
                  {item.checked && (
                    <span style={{
                      color: color,
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}>✓</span>
                  )}
                </div>

                {/* Task Text */}
                <span style={{
                  fontFamily: '"Noto Sans TC", sans-serif',
                  fontSize: '14px',
                  color: item.checked ? '#555' : '#ccc',
                  textDecoration: item.checked ? 'line-through' : 'none',
                  transition: 'all 0.2s',
                  lineHeight: '1.6',
                }}>
                  {item.task}
                </span>
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}
