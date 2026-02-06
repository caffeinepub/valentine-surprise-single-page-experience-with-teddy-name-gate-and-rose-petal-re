export default function RevealTeddy() {
  return (
    <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-30 pointer-events-none">
      <img
        src="/assets/generated/teddy-bear-transparent.dim_128x128.png"
        alt="Teddy Bear"
        className="w-24 h-24 md:w-32 md:h-32 animate-teddy-sway drop-shadow-2xl"
      />
    </div>
  );
}
