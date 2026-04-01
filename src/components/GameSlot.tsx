const GameSlot = () => {
  return (
    <div className="aspect-square rounded-lg border-2 border-gold/20 bg-casino-navy hover:border-gold/50 hover:bg-secondary/30 transition-all cursor-pointer group">
      <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-2xl">🎮</span>
      </div>
    </div>
  );
};

export default GameSlot;
