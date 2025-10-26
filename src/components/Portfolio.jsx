import React from 'react';

const projects = [
  {
    title: 'ZK-Oracle for Model Inference',
    desc: 'Verifiable on-chain predictions with SNARK-backed inference proofs and cost-optimized batching.',
    tags: ['AI', 'ZK', 'Oracle']
  },
  {
    title: 'Agentic Market Maker',
    desc: 'Reinforcement-learning agents providing liquidity and routing across L2s with risk-aware policies.',
    tags: ['AI Agents', 'DeFi']
  },
  {
    title: 'DataDAO Tooling Suite',
    desc: 'Governance, revenue-sharing, and model registry for community-owned datasets with encrypted access.',
    tags: ['Blockchain', 'Governance']
  },
  {
    title: 'Edge Inference Wallet SDK',
    desc: 'On-device inference with MPC signing and account abstraction for privacy-preserving UX.',
    tags: ['SDK', 'Privacy']
  }
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Portfolio</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Selected work and experiments
            </h2>
          </div>
          <a
            href="#home"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Back to top
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6 relative">
                <h3 className="text-lg font-semibold text-zinc-900">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-zinc-100 via-white to-zinc-100" />
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-zinc-600">
            Interested in collaborations, pilots, or integrations?
          </p>
          <a
            href="mailto:hello@neonchain.ai"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-white font-medium shadow hover:bg-zinc-800"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
