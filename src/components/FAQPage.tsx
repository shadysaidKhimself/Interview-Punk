import { useState, useMemo } from 'react';
import type { FAQItem } from '../types';

interface FAQPageProps {
  items: FAQItem[];
  onBack: () => void;
}

export default function FAQPage({ items, onBack }: FAQPageProps) {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map(i => i.category)));
    return ['全部', ...cats];
  }, [items]);

  const [activeCategory, setActiveCategory] = useState('全部');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === '全部'
    ? items
    : items.filter(i => i.category === activeCategory);

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
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        animation: 'fade-in 0.4s ease-out',
      }}>
        <button
          id="btn-faq-back"
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
          color: '#00FF41',
          letterSpacing: '3px',
          margin: 0,
          textShadow: '0 0 15px rgba(0, 255, 65, 0.4)',
        }}>
          📡 核心資料庫
        </h1>
      </div>

      {/* Category Filters */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animation: 'slide-up 0.5s ease-out',
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            style={{
              fontFamily: '"Noto Sans TC", sans-serif',
              fontSize: '13px',
              padding: '6px 16px',
              border: `1px solid ${activeCategory === cat ? '#00FF41' : '#333'}`,
              borderRadius: '20px',
              background: activeCategory === cat ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
              color: activeCategory === cat ? '#00FF41' : '#888',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div style={{
        width: '100%',
        maxWidth: '800px',
      }}>
        {filtered.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={`${item.category}-${idx}`}
              style={{
                marginBottom: '8px',
                animation: `slide-up 0.4s ease-out ${idx * 0.05}s both`,
              }}
            >
              {/* Question Header */}
              <button
                id={`btn-faq-${idx}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: isOpen ? 'rgba(0, 255, 65, 0.05)' : 'rgba(26, 26, 26, 0.8)',
                  border: `1px solid ${isOpen ? '#00FF4144' : '#333'}`,
                  borderRadius: isOpen ? '8px 8px 0 0' : '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <span style={{
                    fontFamily: '"Share Tech Mono", monospace',
                    fontSize: '11px',
                    color: '#00FF41',
                    background: 'rgba(0, 255, 65, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    flexShrink: 0,
                  }}>
                    {item.category}
                  </span>
                  <span style={{
                    fontFamily: '"Noto Sans TC", sans-serif',
                    fontSize: '15px',
                    color: '#E0E0E0',
                    lineHeight: '1.6',
                  }}>
                    {item.question}
                  </span>
                </div>
                <span style={{
                  fontFamily: '"Share Tech Mono", monospace',
                  fontSize: '18px',
                  color: '#00FF41',
                  transition: 'transform 0.3s',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                  marginLeft: '12px',
                }}>
                  +
                </span>
              </button>

              {/* Answer Panel */}
              {isOpen && (
                <div style={{
                  padding: '20px',
                  background: 'rgba(13, 13, 13, 0.9)',
                  border: '1px solid #00FF4122',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 8px',
                  animation: 'fade-in 0.3s ease-out',
                }}>
                  <div style={{
                    fontFamily: '"Share Tech Mono", monospace',
                    fontSize: '12px',
                    color: '#00FF41',
                    marginBottom: '8px',
                    letterSpacing: '1px',
                  }}>
                    {'>'} 答題心法攻略:
                  </div>
                  <p style={{
                    fontFamily: '"Noto Sans TC", sans-serif',
                    fontSize: '14px',
                    color: '#ccc',
                    lineHeight: '1.8',
                    margin: 0,
                  }}>
                    {item.tips}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
