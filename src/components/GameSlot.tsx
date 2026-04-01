interface GameSlotProps {
  image: string;
  name: string;
}

const GameSlot = ({ image, name }: GameSlotProps) => {
  return (
    <div className="aspect-square rounded-lg border-2 border-gold/20 bg-casino-navy hover:border-gold/50 transition-all cursor-pointer group overflow-hidden relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-xs font-bold text-center px-1">{name}</span>
      </div>
    </div>
  );
};

export default GameSlot;
