import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Stories from './components/Stories';
import CTA from './components/CTA';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/30 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-sky-400" />
          <span className="font-semibold tracking-tight text-white">BlueHaven</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
          <a className="hover:text-white" href="#highlights">Highlights</a>
          <a className="hover:text-white" href="#stories">Stories</a>
          <a className="hover:text-white" href="#cta">Join</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} BlueHaven. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-slate-200">Privacy</a>
          <a href="#" className="hover:text-slate-200">Terms</a>
          <a href="#" className="hover:text-slate-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <div id="cta">
          <CTA />
        </div>
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
