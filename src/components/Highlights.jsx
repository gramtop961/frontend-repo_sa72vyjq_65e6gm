import React from 'react';
import { Leaf, Waves, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Living Landscapes',
    desc: 'Guides to forests, reefs, and coasts — and how to visit with care.',
  },
  {
    icon: Waves,
    title: 'Ocean Rhythms',
    desc: 'Field notes on tides, swell, and the wildlife shaped by waves.',
  },
  {
    icon: Users,
    title: 'People & Place',
    desc: 'Stories of communities whose lives are woven with the sea.',
  },
  {
    icon: Globe,
    title: 'Protect & Restore',
    desc: 'Simple actions that add up to healthier oceans and habitats.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-sky-500/5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Nature and people in harmony</h2>
          <p className="mt-3 text-slate-300">
            Explore the connections between wild waters and everyday life. Learn, feel, and get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
