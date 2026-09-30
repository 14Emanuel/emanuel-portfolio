"use client";

import React, { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

interface LilyPad {
  x: number;
  y: number;
  radius: number;
  angle: number;
  vY: number;
  vX: number;
  hasFlower: boolean;
  flowerColor: string;
}

export default function PondBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initLilyPads();
    };

    window.addEventListener("resize", handleResize);

    const ripples: Ripple[] = [];
    const lilyPads: LilyPad[] = [];

    const initLilyPads = () => {
      lilyPads.length = 0;
      const count = Math.max(6, Math.floor(width / 240));
      for (let i = 0; i < count; i++) {
        lilyPads.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 20 + Math.random() * 24,
          angle: Math.random() * Math.PI * 2,
          vX: (Math.random() - 0.5) * 0.12,
          vY: (Math.random() - 0.5) * 0.1,
          hasFlower: Math.random() > 0.45,
          flowerColor: Math.random() > 0.5 ? "rgba(244, 63, 94, 0.6)" : "rgba(251, 113, 133, 0.6)",
        });
      }
    };

    initLilyPads();

    const addRipple = (x: number, y: number) => {
      if (ripples.length > 25) ripples.shift();
      ripples.push({
        x,
        y,
        radius: 3,
        maxRadius: 60 + Math.random() * 35,
        alpha: 0.45,
        speed: 1.1 + Math.random() * 0.7,
      });
    };

    let lastMoveTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMoveTime > 65) {
        addRipple(e.clientX, e.clientY);
        lastMoveTime = now;
      }
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          addRipple(e.clientX + (Math.random() - 0.5) * 15, e.clientY + (Math.random() - 0.5) * 15);
        }, i * 110);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const interval = setInterval(() => {
      addRipple(Math.random() * width, Math.random() * height);
    }, 4000);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Crystalline White & Soft Spring Water Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#ffffff");
      bgGrad.addColorStop(0.5, "#f8fafc");
      bgGrad.addColorStop(1, "#f0fdfa");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient radial sunlight reflections
      const radial1 = ctx.createRadialGradient(width * 0.25, height * 0.3, 40, width * 0.25, height * 0.3, width * 0.55);
      radial1.addColorStop(0, "rgba(204, 251, 241, 0.45)");
      radial1.addColorStop(1, "transparent");
      ctx.fillStyle = radial1;
      ctx.fillRect(0, 0, width, height);

      const radial2 = ctx.createRadialGradient(width * 0.8, height * 0.65, 40, width * 0.8, height * 0.65, width * 0.5);
      radial2.addColorStop(0, "rgba(255, 228, 230, 0.35)");
      radial2.addColorStop(1, "transparent");
      ctx.fillStyle = radial2;
      ctx.fillRect(0, 0, width, height);

      // Draw and update Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.007;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(13, 148, 136, ${r.alpha * 0.55})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();

        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(13, 148, 136, ${r.alpha * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw floating Lily Pads (sunlit emerald translucent)
      for (const pad of lilyPads) {
        pad.x += pad.vX;
        pad.y += pad.vY;

        if (pad.x < -60) pad.x = width + 60;
        if (pad.x > width + 60) pad.x = -60;
        if (pad.y < -60) pad.y = height + 60;
        if (pad.y > height + 60) pad.y = -60;

        ctx.save();
        ctx.translate(pad.x, pad.y);
        ctx.rotate(pad.angle);

        ctx.beginPath();
        const notchAngle = 0.35;
        ctx.arc(0, 0, pad.radius, notchAngle, Math.PI * 2 - notchAngle);
        ctx.lineTo(0, 0);
        ctx.closePath();

        const padGrad = ctx.createRadialGradient(0, 0, 3, 0, 0, pad.radius);
        padGrad.addColorStop(0, "rgba(52, 211, 153, 0.28)");
        padGrad.addColorStop(0.7, "rgba(16, 185, 129, 0.22)");
        padGrad.addColorStop(1, "rgba(13, 148, 136, 0.16)");
        ctx.fillStyle = padGrad;
        ctx.fill();

        ctx.strokeStyle = "rgba(13, 148, 136, 0.22)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();
        for (let v = 0; v < 5; v++) {
          const vAngle = notchAngle + ((Math.PI * 2 - 2 * notchAngle) / 6) * (v + 1);
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(vAngle) * (pad.radius * 0.8), Math.sin(vAngle) * (pad.radius * 0.8));
        }
        ctx.strokeStyle = "rgba(13, 148, 136, 0.15)";
        ctx.lineWidth = 0.6;
        ctx.stroke();

        if (pad.hasFlower) {
          ctx.save();
          ctx.translate(pad.radius * 0.3, -pad.radius * 0.2);
          for (let p = 0; p < 6; p++) {
            ctx.rotate((Math.PI * 2) / 6);
            ctx.beginPath();
            ctx.ellipse(0, 4.5, 2.2, 5.5, 0, 0, Math.PI * 2);
            ctx.fillStyle = pad.flowerColor;
            ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(234, 179, 8, 0.85)";
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-700"
    />
  );
}
