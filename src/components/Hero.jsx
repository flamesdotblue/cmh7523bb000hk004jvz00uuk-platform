import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
            Building the future where AI meets blockchain
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-zinc-700 leading-relaxed">
            We create intelligent, trustless systems that learn, verify, and scale. From on-chain AI agents to zero-knowledge data pipelines, we turn frontier research into resilient products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-white font-medium shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/20"
            >
              Explore Portfolio
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-zinc-900 font-medium hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
