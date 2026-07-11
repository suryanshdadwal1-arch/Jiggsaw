"use client";

import { useEffect, useState } from "react";

export function JiggsawPreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setIsVisible(false), reducedMotion ? 0 : 1800);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="jiggsaw-preloader" aria-hidden="true">
      <div className="jiggsaw-preloader-flash" />
      <div className="jiggsaw-puzzle-wrap">
        <svg className="jiggsaw-puzzle-svg" viewBox="0 0 240 240" role="img" aria-label="Four puzzle pieces joining">
          <defs>
            <linearGradient id="jiggsawSilverStroke" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6b6c71" />
              <stop offset="25%" stopColor="#c7c7cc" />
              <stop offset="47%" stopColor="#73747a" />
              <stop offset="70%" stopColor="#e2e2e6" />
              <stop offset="100%" stopColor="#74757b" />
            </linearGradient>
            <linearGradient id="jiggsawShineStroke" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="44%" stopColor="rgba(255,255,255,.95)" />
              <stop offset="52%" stopColor="rgba(238,238,241,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <filter id="jiggsawSoftMetal" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation=".8" floodColor="#ffffff" floodOpacity=".92" />
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#77787d" floodOpacity=".12" />
            </filter>
          </defs>

          <g className="jiggsaw-piece-group jiggsaw-piece-tl">
            <path className="jiggsaw-base-stroke" d="M20 20 H120 L120 50 C138 55 138 85 120 90 L120 120 L90 120 C86 138 54 138 50 120 L20 120 Z" />
            <path className="jiggsaw-shine-stroke" d="M20 20 H120 L120 50 C138 55 138 85 120 90 L120 120 L90 120 C86 138 54 138 50 120 L20 120 Z" />
          </g>

          <g className="jiggsaw-piece-group jiggsaw-piece-tr">
            <path className="jiggsaw-base-stroke" d="M120 20 H220 V120 H190 C186 102 154 102 150 120 H120 L120 90 C138 85 138 55 120 50 Z" />
            <path className="jiggsaw-shine-stroke" d="M120 20 H220 V120 H190 C186 102 154 102 150 120 H120 L120 90 C138 85 138 55 120 50 Z" />
          </g>

          <g className="jiggsaw-piece-group jiggsaw-piece-bl">
            <path className="jiggsaw-base-stroke" d="M20 120 H50 C54 138 86 138 90 120 H120 V150 C102 154 102 186 120 190 V220 H20 Z" />
            <path className="jiggsaw-shine-stroke" d="M20 120 H50 C54 138 86 138 90 120 H120 V150 C102 154 102 186 120 190 V220 H20 Z" />
          </g>

          <g className="jiggsaw-piece-group jiggsaw-piece-br">
            <path className="jiggsaw-base-stroke" d="M120 120 H150 C154 102 186 102 190 120 H220 V220 H120 V190 C102 186 102 154 120 150 Z" />
            <path className="jiggsaw-shine-stroke" d="M120 120 H150 C154 102 186 102 190 120 H220 V220 H120 V190 C102 186 102 154 120 150 Z" />
          </g>
        </svg>

        <div className="jiggsaw-join-flash" />
        <div className="jiggsaw-spark" />
        <div className="jiggsaw-mini-label">Jiggsaw</div>
      </div>
    </div>
  );
}
