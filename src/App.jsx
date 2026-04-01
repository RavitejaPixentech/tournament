import { useState } from 'react';
import Particles from './components/Particles';
import TournamentView from './views/TournamentView';
import RushView from './views/RushView';

export default function App() {
  const [view, setView] = useState('tournament');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at center, #1c0a00 0%, #0a0006 60%, #000 100%)',
      color: '#fff',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      {/* Animated background */}
      <Particles />

      {/* Nav */}
      <nav style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        gap: 14,
        padding: '16px 0 10px',
      }}>
        {[
          { id: 'tournament', icon: '🏆', label: 'TOURNAMENT' },
          { id: 'rush', icon: '⚡', label: 'RUSH' },
        ].map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            style={{
              padding: '9px 32px',
              borderRadius: 32,
              fontFamily: "'Oswald', 'Arial Black', sans-serif",
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: 3,
              cursor: 'pointer',
              transition: 'all 0.22s ease',
              ...(view === id ? {
                background: 'linear-gradient(180deg, #c9a227 0%, #8a6a00 100%)',
                border: '2px solid #ffd700',
                color: '#fff',
                boxShadow: '0 0 20px rgba(255,215,0,0.45)',
              } : {
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,200,0,0.2)',
                color: '#777',
              })
            }}
          >
            {icon} {label}
          </button>
        ))}
      </nav>

      {/* View content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {view === 'tournament' ? <TournamentView /> : <RushView />}
      </div>
    </div>
  );
}
