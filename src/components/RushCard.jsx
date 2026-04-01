import { useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { RUSH_LEADERBOARD } from '../data';

export default function RushCard({ card }) {
  const timer = useCountdown(card.timerSec);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={{
      width: 270,
      borderRadius: 18,
      overflow: 'hidden',
      background: card.gradient,
      border: `3px solid ${card.border}`,
      boxShadow: `0 0 32px ${card.accent}44, 0 8px 32px rgba(0,0,0,0.6)`,
      animation: 'fadeSlideIn 0.4s ease both',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '18px 14px 8px' }}>
        <div style={{
          color: card.numColor,
          fontSize: 44,
          fontWeight: 900,
          lineHeight: 1,
          textShadow: `0 0 20px ${card.numColor}`,
        }}>
          {card.num}
        </div>
        <div style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: 2,
          lineHeight: 1.1,
        }}>
          MINUTE RUSH
        </div>
        <div style={{
          color: '#ffd700',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 3,
          marginTop: 5,
          textShadow: '0 0 8px #ffd700',
        }}>
          LIGHTING FAST ACTION!
        </div>
      </div>

      {/* Timer */}
      <div style={{
        textAlign: 'center',
        color: '#fff',
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 10,
        padding: '0 14px',
      }}>
        ⏳ Starts in{' '}
        <span style={{
          color: card.accent,
          fontSize: 20,
          fontWeight: 900,
          textShadow: `0 0 10px ${card.accent}`,
        }}>
          {timer}
        </span>
      </div>

      {/* Emoji game art */}
      <div style={{
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 70,
        filter: 'drop-shadow(0 0 18px rgba(255,200,0,0.7))',
        padding: '0 14px',
      }}>
        {card.emoji}
      </div>

      {/* Jackpot bar */}
      <div style={{
        margin: '10px 12px',
        background: card.jackpotBg,
        borderRadius: 12,
        padding: '10px 16px',
        textAlign: 'center',
        border: '3px solid #ffd700',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
      }}>
        <div style={{
          color: card.jackpotTextColor,
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: 3,
          marginBottom: 2,
        }}>
          JACKPOT
        </div>
        <div style={{
          fontSize: 26,
          fontWeight: 900,
          color: card.jackpotTextColor,
          letterSpacing: 2,
        }}>
          ⭐ {card.jackpot} ⭐
        </div>
      </div>

      {/* Mini leaderboard */}
      <div style={{ padding: '4px 14px 8px' }}>
        {RUSH_LEADERBOARD.map(([name, score], i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: i < 3 ? '#ffd700' : '#bbb',
            fontSize: 12,
            fontWeight: i < 3 ? 700 : 500,
            padding: '3px 0',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <span>{name}</span>
            <span>{score}</span>
          </div>
        ))}
      </div>

      {/* Join Now */}
      <div style={{ padding: '6px 12px 16px' }}>
        <button
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            width: '100%',
            padding: '13px',
            background: card.btnBg,
            border: '2px solid #ffd700',
            borderRadius: 8,
            color: '#fff',
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: 4,
            cursor: 'pointer',
            textShadow: '0 1px 4px rgba(0,0,0,0.6)',
            boxShadow: btnHover
              ? '0 6px 24px rgba(0,0,0,0.5), 0 0 16px rgba(255,215,0,0.4)'
              : '0 4px 16px rgba(0,0,0,0.5)',
            transform: btnHover ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.18s ease',
            fontFamily: "'Oswald', 'Arial Black', sans-serif",
          }}
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}
