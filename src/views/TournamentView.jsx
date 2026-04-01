import { useState } from 'react';
import BuyInCard from '../components/BuyInCard';
import Leaderboard from '../components/Leaderboard';
import JackpotDisplay from '../components/JackpotDisplay';
import { BUY_INS, TOURNAMENT_TABS } from '../data';

export default function TournamentView() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TOURNAMENT_TABS[activeTab];

  return (
    <div style={{
      display: 'flex',
      gap: 18,
      padding: '0 18px 24px',
      maxWidth: 1280,
      margin: '0 auto',
      alignItems: 'flex-start',
    }}>
      {/* LEFT / MAIN */}
      <div style={{ flex: 1, minWidth: 0 }}>

        {/* Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          padding: '10px 0 12px',
        }}>
          <span style={{
            fontSize: 58,
            animation: 'hourglassSpin 4s ease-in-out infinite',
            display: 'inline-block',
            filter: 'drop-shadow(0 0 14px #ffd700)',
          }}>⏳</span>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 38,
              fontWeight: 900,
              letterSpacing: 3,
              lineHeight: 1.05,
              color: tab.color,
              textShadow: `0 0 24px ${tab.color}, 0 0 50px ${tab.shadow}`,
              transition: 'color 0.3s, text-shadow 0.3s',
            }}>
              {tab.minutes} MINUTE BLITZ
            </div>
            <div style={{
              display: 'inline-block',
              fontSize: 18,
              fontWeight: 900,
              color: '#ffd700',
              background: tab.bgTitle,
              padding: '4px 24px',
              borderRadius: 5,
              marginTop: 5,
              letterSpacing: 6,
              border: '1.5px solid rgba(255,215,0,0.3)',
            }}>
              TOURNAMENT
            </div>
          </div>

          <span style={{ fontSize: 38, filter: 'drop-shadow(0 0 10px #ffd700)' }}>⭐</span>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          marginBottom: 16,
        }}>
          {TOURNAMENT_TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '7px 22px',
                borderRadius: 24,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                ...(activeTab === i ? {
                  background: `linear-gradient(180deg, ${t.color}22, ${t.shadow}44)`,
                  border: `2px solid ${t.color}`,
                  color: t.color,
                  boxShadow: `0 0 14px ${t.color}88`,
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  color: '#777',
                })
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Buy-in grid 3×2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10,
          marginBottom: 14,
        }}>
          {BUY_INS.map((b, i) => (
            <BuyInCard key={i} {...b} />
          ))}
        </div>

        {/* Slot grid 5×2 (empty game slots) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 8,
        }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 82,
                background: 'rgba(0,0,0,0.55)',
                border: '2px solid #2a1a00',
                borderRadius: 9,
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.85)',
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div style={{ width: 248, flexShrink: 0 }}>
        <JackpotDisplay amount="250,000" />
        <Leaderboard />
      </div>
    </div>
  );
}
