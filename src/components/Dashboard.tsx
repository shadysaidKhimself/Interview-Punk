import { useState } from 'react';

interface DashboardProps {
  onNavigate: (view: 'game' | 'faq' | 'checklist') => void;
}

const modules = [
  {
    id: 'game' as const,
    code: 'MODULE_A',
    title: '邏輯驗證區',
    subtitle: 'Logic Verification Zone',
    description: '隨機抽取 20 題面試情境題，測試你的職場判斷力。無即時回饋，一氣呵成完成挑戰。',
    icon: '⚡',
    borderColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.15)',
  },
  {
    id: 'faq' as const,
    code: 'MODULE_B',
    title: '核心資料庫',
    subtitle: 'Core Database',
    description: '經典面試必問題庫與答題心法，從自我介紹到情境題，一次掌握關鍵回答策略。',
    icon: '📡',
    borderColor: '#00FF41',
    glowColor: 'rgba(0, 255, 65, 0.15)',
  },
  {
    id: 'checklist' as const,
    code: 'MODULE_C',
    title: '裝備檢核點',
    subtitle: 'Gear Checkpoint',
    description: '從面試前一週到出發前，具體可執行的準備清單。逐項打勾，解鎖面試完全體。',
    icon: '🔧',
    borderColor: '#FFE600',
    glowColor: 'rgba(255, 230, 0, 0.15)',
  },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
        textAlign: 'center',
        marginBottom: '3rem',
        animation: 'slide-up 0.6s ease-out',
      }}>
        <h1 style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 900,
          color: '#00F0FF',
          textShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
          margin: 0,
          letterSpacing: '3px',
        }}>
          主控台系統
        </h1>
        <p style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '14px',
          color: '#888',
          marginTop: '8px',
          letterSpacing: '2px',
        }}>
          {'>'} 選擇模組以繼續 {'>'} SELECT MODULE TO PROCEED
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '1000px',
      }}>
        {modules.map((mod, idx) => {
          const isHovered = hoveredId === mod.id;
          return (
            <button
              key={mod.id}
              id={`btn-module-${mod.id}`}
              onClick={() => onNavigate(mod.id)}
              onMouseEnter={() => setHoveredId(mod.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: isHovered ? mod.glowColor : 'rgba(26, 26, 26, 0.8)',
                border: `1px solid ${isHovered ? mod.borderColor : '#333'}`,
                borderRadius: '8px',
                padding: '2rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                boxShadow: isHovered
                  ? `0 0 25px ${mod.glowColor}, inset 0 0 25px ${mod.glowColor}`
                  : '0 2px 10px rgba(0,0,0,0.3)',
                animation: `slide-up 0.6s ease-out ${idx * 0.15}s both`,
                transform: isHovered ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Module Code */}
              <div style={{
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: '12px',
                color: mod.borderColor,
                marginBottom: '12px',
                letterSpacing: '3px',
                opacity: 0.8,
              }}>
                [{mod.code}]
              </div>

              {/* Icon + Title */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px',
              }}>
                <span style={{ fontSize: '2rem' }}>{mod.icon}</span>
                <div>
                  <div style={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#E0E0E0',
                  }}>
                    {mod.title}
                  </div>
                  <div style={{
                    fontFamily: '"Share Tech Mono", monospace',
                    fontSize: '12px',
                    color: '#888',
                  }}>
                    {mod.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: '"Noto Sans TC", sans-serif',
                fontSize: '14px',
                color: '#aaa',
                lineHeight: '1.7',
                margin: '12px 0 0',
              }}>
                {mod.description}
              </p>

              {/* Enter indicator */}
              <div style={{
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: '13px',
                color: mod.borderColor,
                marginTop: '16px',
                opacity: isHovered ? 1 : 0.5,
                transition: 'opacity 0.3s',
                letterSpacing: '1px',
              }}>
                {'>'} 進入系統 {isHovered ? '█' : ''}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
