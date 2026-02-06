import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ValentineIntroGateProps {
  onSuccess: () => void;
}

export default function ValentineIntroGate({ onSuccess }: ValentineIntroGateProps) {
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().toLowerCase();

    if (trimmedName === 'silpa') {
      onSuccess();
    } else if (trimmedName) {
      setShowError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 max-w-md w-full">
        {/* Animated Teddy Bear */}
        <div
          className={`mb-8 ${
            isShaking ? 'animate-teddy-shake' : 'animate-teddy-bounce'
          }`}
        >
          <img
            src="/assets/generated/teddy-bear-transparent.dim_128x128.png"
            alt="Teddy Bear"
            className="w-32 h-32 drop-shadow-2xl"
          />
        </div>

        {/* Error Message */}
        {showError && (
          <div className="mb-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-fade-in-up-soft text-center">
            <p className="text-valentine-deep font-poppins text-sm leading-relaxed whitespace-pre-line">
              Tumi thik naam dao.{'\n'}
              Tumi ki jano na ekhane kar naam hobe?{'\n'}
              Thik naam dao...
            </p>
          </div>
        )}

        {/* Name Input Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-dancing text-white drop-shadow-lg mb-2">
              Enter Your Name
            </h2>
            <p className="text-white/90 text-sm font-poppins">
              Who is this Valentine surprise for? 💝
            </p>
          </div>

          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowError(false);
            }}
            placeholder="Type your name..."
            className="w-full px-6 py-6 text-lg text-center bg-white/95 backdrop-blur-sm border-2 border-valentine-rose/30 rounded-full shadow-lg focus:border-valentine-rose focus:ring-4 focus:ring-valentine-rose/20 transition-all text-valentine-deep placeholder:text-valentine-rose/50 caret-valentine-rose"
          />

          <Button
            type="submit"
            className="w-full py-6 text-lg font-semibold bg-valentine-rose hover:bg-valentine-deep text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Continue ❤️
          </Button>
        </form>
      </div>
    </div>
  );
}
