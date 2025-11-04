import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">
          Be part of the tide of care
        </h3>
        <p className="max-w-2xl text-slate-300">
          Join a growing community finding calm in nature and momentum in action.
          Get monthly stories, local events, and simple steps to help protect our blue planet.
        </p>
        <form
          className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-sky-500/0 transition focus:ring-2"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400 active:translate-y-0"
          >
            Subscribe <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <p className="text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
