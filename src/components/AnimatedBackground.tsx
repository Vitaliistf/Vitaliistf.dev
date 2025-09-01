'use client';

import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  length: number;
  speedY: number;
  speedX: number;
  opacity: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const densityRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = clamp(window.devicePixelRatio || 1, 1, 2);

    const setSize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initStars();
    };

    const initStars = () => {
      const { innerWidth: w, innerHeight: h } = window;
      // Reduced density: ~1 star per 15,000 px^2, min 8 max 36
      const targetCount = clamp(Math.floor((w * h) / 15000), 8, 36);
      densityRef.current = targetCount;
      starsRef.current = new Array(targetCount)
        .fill(0)
        .map(() => createStar(w, h));
    };

    const createStar = (w: number, h: number): Star => {
      // 45° diagonal: equal X and Y speeds (down-right)
      const baseSpeedY = 24; // px/s
      const varianceY = 16; // px/s
      const speedY = baseSpeedY + Math.random() * varianceY; // 24-40 px/s
      const speedX = speedY; // 45°
      const length = 40 + Math.random() * 60; // trail length 40-100px
      const opacity = 0.06 + Math.random() * 0.1; // very subtle
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        length,
        speedY,
        speedX,
        opacity,
      };
    };

    const respawnStar = (star: Star, w: number) => {
      star.x = Math.random() * w;
      star.y = -20; // start slightly above
      star.length = 40 + Math.random() * 60;
      star.speedY = 24 + Math.random() * 16; // 24-40 px/s
      star.speedX = star.speedY; // maintain 45°
      star.opacity = 0.06 + Math.random() * 0.1;
    };

    const draw = (time: number) => {
      const { innerWidth: w, innerHeight: h } = window;
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = time;

      ctx.clearRect(0, 0, w, h);

      // Very soft base gradient to add depth (dark theme friendly)
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, 'rgba(255,255,255,0.00)');
      gradient.addColorStop(1, 'rgba(230,170,120,0.02)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';

      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        s.y += s.speedY * dt;
        s.x += s.speedX * dt;

        // Wrap/re-spawn when leaving screen
        if (s.y - s.length > h || s.x < -50 || s.x > w + 50) {
          respawnStar(s, w);
        }

        // Draw star as a short fade trail opposite to velocity (aligned to 45°)
        const mag = Math.hypot(s.speedX, s.speedY) || 1;
        const ux = s.speedX / mag;
        const uy = s.speedY / mag;
        const tailX = s.x - ux * s.length;
        const tailY = s.y - uy * s.length;
        const gradientTrail = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradientTrail.addColorStop(0, `rgba(230,170,120,0)`);
        gradientTrail.addColorStop(
          1,
          `rgba(230,170,120,${s.opacity.toFixed(3)})`
        );
        ctx.strokeStyle = gradientTrail;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Subtle sparkle head
        ctx.fillStyle = `rgba(255,255,255,${(s.opacity * 0.9).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 0.6, 0, Math.PI * 2);
        ctx.fill();
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
