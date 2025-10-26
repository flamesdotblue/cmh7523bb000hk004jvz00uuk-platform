import React from 'react';
import { Cpu, Shield, Layers, Globe } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI-native Infrastructure',
    desc: 'Differentiable pipelines, reinforcement learning agents, and on-chain inference bridges built for real-world throughput.'
  },
  {
    icon: Shield,
    title: 'Provable Trust',
    desc: 'Zero-knowledge proofs and verifiable computation ensure integrity across data, models, and transactions.'
  },
  {
    icon: Layers,
    title: 'Composable by Design',
    desc: 'Modular services snap together: data oracles, wallet SDKs, model registries, and governance tooling.'
  },
  {
    icon: Globe,
    title: 'Multi-chain, Global',
    desc: 'Deploy across EVM, Cosmos, and L2s with seamless indexing, cross-chain messaging, and gas-optimized contracts.'
  }
];

export default function About() {
  return (
    <div className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">About Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              We engineer intelligent, verifiable systems
            </h2>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              NeonChain AI is a studio and venture partner crafting products at the intersection of artificial intelligence and decentralized protocols.
              We turn cutting-edge research into production systems that are usable, auditable, and fast.
            </p>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              Our teams blend ML, cryptography, and distributed systems expertise to deliver measurable outcomes: lower unit costs, higher trust, and new revenue models.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-200 p-5 bg-white shadow-sm hover:shadow transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-white">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
