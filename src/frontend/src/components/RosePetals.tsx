import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  drift: number;
  driftSpeed: number;
}

export default function RosePetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const spawnIntervalRef = useRef<number | null>(null);
  const burstTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load rose petal image
    const img = new Image();
    img.src = '/assets/generated/rose-petal.dim_64x64.png';
    imageRef.current = img;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create initial petals
    const createPetal = (): Petal => ({
      x: Math.random() * canvas.width,
      y: -50,
      speed: 1 + Math.random() * 2,
      size: 20 + Math.random() * 30,
      opacity: 0.4 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      drift: 0,
      driftSpeed: (Math.random() - 0.5) * 0.5,
    });

    // Initial burst - spawn many petals immediately
    for (let i = 0; i < 20; i++) {
      petalsRef.current.push(createPetal());
    }

    // High-density burst for first 2 seconds
    let isInBurstMode = true;
    const burstInterval = setInterval(() => {
      if (isInBurstMode && petalsRef.current.length < 50) {
        petalsRef.current.push(createPetal());
      }
    }, 100);

    // After 2 seconds, switch to gentle continuous mode
    burstTimeoutRef.current = window.setTimeout(() => {
      isInBurstMode = false;
      clearInterval(burstInterval);
      
      // Start gentle continuous spawn
      spawnIntervalRef.current = window.setInterval(() => {
        if (petalsRef.current.length < 30) {
          petalsRef.current.push(createPetal());
        }
      }, 300);
    }, 2000);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current = petalsRef.current.filter((petal) => {
        // Update position
        petal.y += petal.speed;
        petal.drift += petal.driftSpeed;
        petal.x += Math.sin(petal.drift) * 0.5;
        petal.rotation += petal.rotationSpeed;

        // Remove if off screen
        if (petal.y > canvas.height + 50) {
          return false;
        }

        // Draw petal
        if (imageRef.current && imageRef.current.complete) {
          ctx.save();
          ctx.globalAlpha = petal.opacity;
          ctx.translate(petal.x, petal.y);
          ctx.rotate((petal.rotation * Math.PI) / 180);
          ctx.drawImage(
            imageRef.current,
            -petal.size / 2,
            -petal.size / 2,
            petal.size,
            petal.size
          );
          ctx.restore();
        }

        return true;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    img.onload = () => {
      animate();
    };

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (spawnIntervalRef.current !== null) {
        clearInterval(spawnIntervalRef.current);
      }
      if (burstTimeoutRef.current !== null) {
        clearTimeout(burstTimeoutRef.current);
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ pointerEvents: 'none' }}
    />
  );
}
