import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <Hero />
        </section>
        <section id="about" className="relative">
          <About />
        </section>
        <section id="portfolio" className="relative">
          <Portfolio />
        </section>
      </main>
    </div>
  );
}

export default App;
