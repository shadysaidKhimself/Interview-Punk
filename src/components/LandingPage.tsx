import { useState, useEffect } from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const BOOT_LINES = [
  '> BIOS CHECK ................ OK',
  '> MEMORY SCAN ............... 64GB DETECTED',
  '> LOADING NEURAL NETWORK .... OK',
  '> CONNECTING TO SERVER ...... ██████████',
  '> DECRYPTING INTERVIEW DB ... OK',
  '> SYSTEM READY',
  '',
  '歡迎進入面試模擬伺服器 v2.0',
  '準備連接面試模擬伺服器...',
];

export default function LandingPage({ onStart }: LandingPageProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setDisplayedLines(prev => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 400);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
      {/* Terminal Window */}
      <div style={{
        width: '100%',
        maxWidth: '700px',
        background: 'rgba(13, 13, 13, 0.9)',
        border: '1px solid #333',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)',
        animation: 'slide-up 0.6s ease-out',
      }}>
        {/* Terminal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          background: '#1A1A1A',
          borderBottom: '1px solid #333',
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF003C' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFE600' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#00FF41' }} />
          <span style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '12px',
            color: '#888',
            marginLeft: '12px',
          }}>interview-punk@server:~</span>
        </div>

        {/* Terminal Body */}
        <div style={{
          padding: '24px',
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '14px',
          lineHeight: '1.8',
          color: '#00FF41',
          minHeight: '320px',
        }}>
          {displayedLines.map((line, idx) => (
            <div key={idx} style={{
              animation: 'fade-in 0.3s ease-out',
              color: line?.startsWith('>') ? '#00FF41' : '#00F0FF',
              opacity: !line ? 0 : 1,
            }}>
              {line}
            </div>
          ))}
          {/* Blinking cursor */}
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '18px',
            background: '#00F0FF',
            animation: 'typing-cursor 1s step-end infinite',
            verticalAlign: 'text-bottom',
          }} />
        </div>
      </div>

      {/* Start Button */}
      {showButton && (
        <button
          id="btn-start-simulation"
          onClick={onStart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            marginTop: '3rem',
            padding: '16px 48px',
            fontFamily: '"Orbitron", sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: isHovered ? '#0D0D0D' : '#00F0FF',
            background: isHovered ? '#00F0FF' : 'transparent',
            border: '2px solid #00F0FF',
            borderRadius: '4px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            transition: 'all 0.3s ease',
            boxShadow: isHovered
              ? '0 0 20px #00F0FF, 0 0 40px rgba(0, 240, 255, 0.3)'
              : '0 0 10px rgba(0, 240, 255, 0.3)',
            animation: 'slide-up 0.5s ease-out, glow-pulse 2s ease-in-out infinite',
          }}
        >
          ▶ 開始模擬
        </button>
      )}

      {/* Subtitle */}
      {showButton && (
        <p style={{
          marginTop: '1rem',
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '13px',
          color: '#888',
          animation: 'fade-in 1s ease-out',
          letterSpacing: '2px',
        }}>
          點擊啟動面試協定
        </p>
      )}
    </div>
  );
}
