'use client';

import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
};

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      initStars(w, h);
    };

    const initStars = (w: number, h: number) => {
      const starCount = Math.min(Math.floor((w * h) / 8000), 50);
      starsRef.current = new Array(starCount).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const respawnStar = (star: Star, w: number) => {
      star.x = Math.random() * w;
      star.y = -10;
      star.size = Math.random() * 2 + 0.5;
      star.speed = Math.random() * 0.5 + 0.2;
      star.opacity = Math.random() * 0.8 + 0.2;
      star.twinkle = Math.random() * Math.PI * 2;
    };

    const draw = (time: number) => {
      const { innerWidth: w, innerHeight: h } = window;
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Clear canvas with solid background
      ctx.fillStyle = 'rgb(36, 36, 36)';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];

        // Move star down
        star.y += star.speed * dt * 60;
        star.twinkle += dt * 2;

        // Respawn if off screen
        if (star.y > h + 10) {
          respawnStar(star, w);
        }

        // Calculate twinkling opacity
        const twinkleFactor = (Math.sin(star.twinkle) + 1) * 0.5;
        const currentOpacity = star.opacity * (0.3 + twinkleFactor * 0.7);

        // Draw star as a simple circle
        ctx.fillStyle = `rgba(230, 170, 120, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow for larger stars
        if (star.size > 1.5) {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = window.requestAnimationFrame(draw);
    };

    setSize();
    window.addEventListener('resize', setSize);
    animationRef.current = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', setSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AnimatedBackground;
