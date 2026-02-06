import { useState, useEffect } from 'react';
import ValentineIntroGate from './components/ValentineIntroGate';
import ValentineReveal from './components/ValentineReveal';

function App() {
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    document.title = "Happy Valentine's Day ❤️";
  }, []);

  const handleSuccess = () => {
    setShowReveal(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Intro Gate Screen */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          showReveal
            ? 'opacity-0 pointer-events-none scale-95'
            : 'opacity-100 pointer-events-auto scale-100'
        }`}
      >
        <ValentineIntroGate onSuccess={handleSuccess} />
      </div>

      {/* Reveal Screen */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          showReveal
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-105'
        }`}
      >
        <ValentineReveal />
      </div>
    </div>
  );
}

export default App;
