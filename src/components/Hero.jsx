import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay for contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-200/80">Ocean • Nature • People</p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-6xl">
          Where the ocean meets our shared story
        </h1>
        <p className="mt-4 max-w-2xl text-base text-sky-100/90 sm:text-lg">
          A calm, immersive space celebrating waves, wild places, and the people who protect them.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#highlights"
            className="rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400 active:translate-y-0"
          >
            Explore highlights
          </a>
          <a
            href="#stories"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
          >
            Read stories
          </a>
        </div>
      </div>
    </section>
  );
}
