const InfiniteScrollBanner = () => {
  const message = "🔥 Agende sua manutenção preventiva com 30% OFF • Atendimento 24/7 • ";
  
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        <span className="text-sm font-semibold px-4">{message}</span>
        <span className="text-sm font-semibold px-4">{message}</span>
        <span className="text-sm font-semibold px-4">{message}</span>
        <span className="text-sm font-semibold px-4">{message}</span>
      </div>
    </div>
  );
};

export default InfiniteScrollBanner;
