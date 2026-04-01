import { Timer } from "lucide-react";

interface BuyInCardProps {
  buyIn: number;
  timeLeft: string;
  prizePool: number;
}

const BuyInCard = ({ buyIn, timeLeft, prizePool }: BuyInCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-gold/40 hover:border-gold hover:shadow-lg hover:shadow-gold/10 transition-all cursor-pointer group">
      {/* Top red banner with buy-in */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-3 py-2 flex items-baseline gap-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">Buy-In:</span>
        <span className="text-2xl font-black text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          ${buyIn}
        </span>
      </div>
      {/* Bottom darker section with timer + prize */}
      <div className="bg-gradient-to-b from-red-900 to-red-950 px-3 py-2">
        <div className="flex items-center gap-1.5 mb-1">
          <Timer className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-sm font-mono font-bold text-white">{timeLeft}</span>
        </div>
        <p className="text-xs font-bold text-yellow-300">
          Prize Pool ${prizePool.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default BuyInCard;
