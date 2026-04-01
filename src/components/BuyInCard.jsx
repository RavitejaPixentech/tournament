import { useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';

export default function BuyInCard({ amount, timerSec, prize }) {
  const timer = useCountdown(timerSec);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'linear-gradient(180deg, #0d3a5c 0%, #071e2e 100%)',
        border: `2px solid ${hovered ? '#3ecfff' : '#1a5a7a'}`,
        borderRadius: 10,
        padding: '10px 12px',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.2s ease',
        boxShadow: hovered
          ? '0 8px 24px rgba(62,207,255,0.3)'
          : '0 4px 12px rgba(0,0,0,0.6)',
      }}
    >
      {/* Buy-in label */}
      <div style={{
        background: 'linear-gradient(90deg, #0d5c3a, #0a3a2a)',
        border: '1px solid #1a7a5a',
        borderRadius: 6,
        padding: '4px 10px',
        textAlign: 'center',
        marginBottom: 7,
        fontSize: 13,
        fontWeight: 700,
        color: '#aaa',
        letterSpacing: 1,
      }}>
        BUY-IN: <span style={{ color: '#ffd700', fontSize: 18, fontWeight: 900 }}>{amount}</span>
      </div>

      {/* Timer */}
      <div style={{
        background: 'linear-gradient(180deg, #3a0000, #200000)',
        border: '1px solid #7a1010',
        borderRadius: 6,
        padding: '7px 10px',
        textAlign: 'center',
        marginBottom: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        animation: 'timerPulse 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 14 }}>⏳</span>
        <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: 2 }}>{timer}</span>
      </div>

      {/* Prize */}
      <div style={{
        textAlign: 'center',
        color: '#ffd700',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1,
      }}>
        Prize Pool ${prize}
      </div>
    </div>
  );
}
