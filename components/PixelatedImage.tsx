"use client";

import React, { useEffect, useRef, useState } from "react";

interface PixelatedImageProps {
  src: string;
  alt: string;
  className?: string;
  pixelSize?: number;
  width?: number;
  height?: number;
}

export function PixelatedImage({
  src,
  alt,
  className = "",
  pixelSize = 12,
  width = 800,
  height = 800,
}: PixelatedImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>();
  const currentPixelSizeRef = useRef(pixelSize);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imageRef.current = img;
      renderCanvas();
    };
  }, [src]);

  const renderCanvas = () => {
    if (!canvasRef.current || !imageRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // We keep the internal resolution high
    canvas.width = width;
    canvas.height = height;

    const size = currentPixelSizeRef.current;
    const w = canvas.width;
    const h = canvas.height;

    // To ensure the image covers the canvas (object-fit: cover logic)
    const img = imageRef.current;
    const scale = Math.max(w / img.width, h / img.height);
    const x = w / 2 - (img.width * scale) / 2;
    const y = h / 2 - (img.height * scale) / 2;

    if (size <= 1) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    } else {
      // Draw to a tiny size then scale up
      const scaledW = w / size;
      const scaledH = h / size;

      const offscreen = document.createElement("canvas");
      offscreen.width = scaledW;
      offscreen.height = scaledH;
      const offCtx = offscreen.getContext("2d");
      
      if (offCtx) {
        offCtx.imageSmoothingEnabled = true;
        // Draw the image onto the tiny offscreen canvas, preserving aspect ratio (cover)
        const offScale = Math.max(scaledW / img.width, scaledH / img.height);
        const offX = scaledW / 2 - (img.width * offScale) / 2;
        const offY = scaledH / 2 - (img.height * offScale) / 2;
        offCtx.drawImage(img, offX, offY, img.width * offScale, img.height * offScale);

        // Draw it back to the main canvas
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(offscreen, 0, 0, scaledW, scaledH, 0, 0, w, h);
      }
    }
  };

  useEffect(() => {
    const targetSize = isHovered ? 1 : pixelSize;
    let startSize = currentPixelSizeRef.current;
    const startTime = performance.now();
    const duration = 400; // ms

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      currentPixelSizeRef.current = startSize + (targetSize - startSize) * easeProgress;

      renderCanvas();

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        currentPixelSizeRef.current = targetSize;
        renderCanvas();
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, pixelSize]);

  // Handle touch events for mobile
  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
