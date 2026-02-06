import RosePetals from './RosePetals';
import BengaliShayari from './BengaliShayari';
import RevealTeddy from './RevealTeddy';

export default function ValentineReveal() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-valentine-pink via-valentine-blush to-valentine-rose overflow-hidden">
      {/* Soft pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/romantic-bg-pattern.dim_800x600.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 225px',
        }}
      />

      {/* Rose Petals Animation with burst effect */}
      <RosePetals />

      {/* Teddy Bear Animation */}
      <RevealTeddy />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center animate-fade-in-up-soft max-w-3xl w-full">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
          <h1 className="text-5xl md:text-7xl font-dancing text-white drop-shadow-2xl mb-4 animate-heartbeat-gentle">
            You are my Valentine ❤️
          </h1>
          <p className="text-xl md:text-2xl font-poppins text-white/95 drop-shadow-lg mb-6">
            Forever and always, my love
          </p>

          {/* Bengali Shayari */}
          <BengaliShayari />
        </div>

        {/* Decorative hearts */}
        <div className="mt-8 flex gap-4 animate-pulse-gentle">
          <span className="text-4xl">💕</span>
          <span className="text-5xl">❤️</span>
          <span className="text-4xl">💕</span>
        </div>
      </div>
    </div>
  );
}
