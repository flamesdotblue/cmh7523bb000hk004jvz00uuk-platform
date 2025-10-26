import React from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 py-3 shadow-sm">
          <a href="#home" className="flex items-center gap-2" onClick={(e)=>handleNav(e,'#home')}>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">NeonChain AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e)=>handleNav(e,l.href)}
                className="text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#portfolio"
            onClick={(e)=>handleNav(e,'#portfolio')}
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-white text-sm font-medium shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/20"
          >
            View Work
          </a>
        </div>
      </div>
    </header>
  );
}
