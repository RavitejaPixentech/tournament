import RushCard from '../components/RushCard';
import { RUSH_CARDS } from '../data';

export default function RushView() {
  return (
    <div style={{ padding: '12px 24px 24px', position: 'relative', zIndex: 1 }}>
      {/* Title */}
      <div style={{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 900,
        letterSpacing: 5,
        marginBottom: 28,
        color: '#fff',
        textShadow: '0 0 24px #ffd700',
      }}>
        ⚡ <span style={{ color: '#ffd700' }}>RUSH</span> TOURNAMENTS ⚡
      </div>

      {/* Cards row */}
      <div style={{
        display: 'flex',
        gap: 22,
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {RUSH_CARDS.map((card) => (
          <RushCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
