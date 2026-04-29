import React, { useEffect, useRef } from "react";

const ChaosBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Lorenz Attractor constants
    const sigma = 10;
    const rho = 28;
    const beta = 3; // Swapped to 3 for cooler spirals

    let x = 0.1;
    let y = 0;
    let z = 0;

    // Use a pre-allocated Float32Array as a ring buffer to eliminate O(N) points.shift() every frame
    const maxPoints = 1600;
    const points = new Float32Array(maxPoints * 3);
    let head = 0;
    let count = 0;

    let targetMouseInfluence = 0;
    let currentMouseInfluence = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      // Smooth interpolation for the Butterfly Effect
      targetMouseInfluence = (mouseRef.current.x / width - 0.5) * 0.05;
      currentMouseInfluence +=
        (targetMouseInfluence - currentMouseInfluence) * 0.05;

      const dt = 0.008 + currentMouseInfluence;

      const dx = sigma * (y - x) * dt;
      const dy = (x * (rho - z) - y) * dt;
      const dz = (x * y - beta * z) * dt;

      x += dx;
      y += dy;
      z += dz;

      points[head * 3] = x;
      points[head * 3 + 1] = y;
      points[head * 3 + 2] = z;

      head = (head + 1) % maxPoints;
      if (count < maxPoints) count++;

      ctx.clearRect(0, 0, width, height);

      // ── Architectural Grid (SRE/Infrastructure Feel) ──
      // Optimized grid rendering: Single beginPath/stroke call
      ctx.strokeStyle = "rgba(101, 79, 240, 0.06)"; // Slightly softer for better contrast
      ctx.lineWidth = 0.5;
      const gridSize = 60;

      ctx.beginPath();
      // Center-aligned grid
      const offX = (width / 2) % gridSize;
      const offY = (height / 2) % gridSize;

      for (let i = offX; i < width; i += gridSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
      }
      for (let i = offY; i < height; i += gridSize) {
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
      }
      ctx.stroke();

      // Matrix Intersections (crosshairs)
      ctx.beginPath();
      const crosshairSize = 3;
      for (let i = offX; i < width; i += gridSize) {
        for (let j = offY; j < height; j += gridSize) {
          ctx.moveTo(i - crosshairSize, j);
          ctx.lineTo(i + crosshairSize, j);
          ctx.moveTo(i, j - crosshairSize);
          ctx.lineTo(i, j + crosshairSize);
        }
      }
      ctx.strokeStyle = "rgba(101, 79, 240, 0.25)"; // Brighter intersection hits
      ctx.stroke();

      // ── Logic Tracing (The Chaos) ──
      const scale = 24; // slightly larger
      const offsetX = width / 2;
      const offsetY = height / 2;

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 1.0;

      // Group strokes by opacity thresholds to significantly multiply performance
      // For thousands of points, changing strokeStyle for every segment is incredibly expensive

      // Let's paint the chaotic tail smoothly
      if (count > 1) {
        for (let i = 1; i < count; i++) {
          const idx1 = (head - count + i - 1 + maxPoints) % maxPoints;
          const idx2 = (head - count + i + maxPoints) % maxPoints;

          const x1 = points[idx1 * 3] * scale + offsetX;
          const y1 = points[idx1 * 3 + 1] * scale + offsetY;
          const x2 = points[idx2 * 3] * scale + offsetX;
          const y2 = points[idx2 * 3 + 1] * scale + offsetY;

          // Normalized age 0 -> 1 (where 1 is the "head" / newest point)
          const age = i / count;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);

          // Progressive glow and thickness
          if (age > 0.98) {
            ctx.lineWidth = 2.0;
            ctx.strokeStyle = `rgba(200, 190, 255, ${age})`; // Bright tip
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(101, 79, 240, 1)";
          } else {
            ctx.lineWidth = 1.0 + age * 0.5; // taper the width slightly
            ctx.strokeStyle = `rgba(101, 79, 240, ${age * 0.8})`;
            ctx.shadowBlur = 0;
          }

          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none opacity-80 dark:opacity-40"
      style={{ filter: "contrast(1.1) brightness(1.1)" }}
    />
  );
};

export default ChaosBackground;
