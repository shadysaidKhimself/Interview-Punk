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
    colorClass: 'module-card--cyan',
  },
  {
    id: 'faq' as const,
    code: 'MODULE_B',
    title: '核心資料庫',
    subtitle: 'Core Database',
    description: '經典面試必問題庫與答題心法，從自我介紹到情境題，一次掌握關鍵回答策略。',
    icon: '📡',
    colorClass: 'module-card--green',
  },
  {
    id: 'checklist' as const,
    code: 'MODULE_C',
    title: '裝備檢核點',
    subtitle: 'Gear Checkpoint',
    description: '從面試前一週到出發前，具體可執行的準備清單。逐項打勾，解鎖面試完全體。',
    icon: '🔧',
    colorClass: 'module-card--yellow',
  },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>, id: 'game' | 'faq' | 'checklist') => {
    (e.currentTarget as HTMLElement).blur();
    onNavigate(id);
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
        {modules.map((mod, idx) => (
          <button
            key={mod.id}
            id={`btn-module-${mod.id}`}
            className={`module-card ${mod.colorClass}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
            onClick={(e) => handleNavigate(e, mod.id)}
          >
            {/* Module Code */}
            <div className="module-card__code">
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
                <div className="module-card__title">{mod.title}</div>
                <div className="module-card__subtitle">{mod.subtitle}</div>
              </div>
            </div>

            {/* Description */}
            <p className="module-card__desc">{mod.description}</p>

            {/* Enter indicator */}
            <div className="module-card__enter">
              {'>'} 進入系統
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
