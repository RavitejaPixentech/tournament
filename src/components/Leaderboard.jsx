import { LEADERBOARD } from '../data';

const rankColors = {
  1: { bg: 'rgba(255,180,0,0.14)', name: '#ffd700', score: '#ffd700' },
  2: { bg: 'rgba(100,180,255,0.10)', name: '#c8e6ff', score: '#90c8ff' },
  3: { bg: 'rgba(255,120,40,0.10)', name: '#ffb86c', score: '#ff9a3c' },
};

export default function Leaderboard() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #160a00 0%, #0a0008 100%)',
      border: '2px solid #7a5a00',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 6px 28px rgba(0,0,0,0.7)',
      animation: 'borderGlow 3s ease-in-out infinite',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, #2a1a00, #5a3a00, #2a1a00)',
        padding: '11px 14px',
        textAlign: 'center',
        borderBottom: '2px solid #7a5a00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}>
        <span style={{ fontSize: 18 }}>🏆</span>
        <span style={{
          fontSize: 14,
          fontWeight: 900,
          color: '#ffd700',
          letterSpacing: 3,
          textShadow: '0 0 12px #ffd700',
        }}>
          LEADERBOARD
        </span>
        <span style={{ fontSize: 18 }}>🏆</span>
      </div>

      {/* Rows */}
      <div>
        {LEADERBOARD.map((p) => {
          const style = rankColors[p.rank] || { bg: 'transparent', name: '#ccc', score: '#eee' };
          return (
            <div
              key={p.rank}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 12px',
                gap: 8,
                background: style.bg,
                borderBottom: '1px solid rgba(255,200,0,0.06)',
                transition: 'background 0.2s',
              }}
            >
              {/* Rank / Trophy */}
              <span style={{
                width: 28,
                flexShrink: 0,
                fontSize: p.trophy ? 16 : 12,
                color: p.rank <= 3 ? '#ffd700' : '#777',
                fontWeight: 900,
              }}>
                {p.trophy || `${p.rank}.`}
              </span>

              {/* Name */}
              <span style={{
                flex: 1,
                fontSize: 12,
                fontWeight: 700,
                color: style.name,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {p.name}
              </span>

              {/* Score */}
              <span style={{
                fontSize: 12,
                fontWeight: 900,
                color: style.score,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {p.score}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
