import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Classifier from './components/Classifier.jsx';
import Directory from './components/Directory.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div className="font-[Inter] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Classifier />
        <Directory />
        <About />

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold tracking-tight">Ready to protect your crops?</h3>
            <p className="mt-2 text-emerald-50">Start a detection now or browse the directory to learn more.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#classify" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-xl hover:opacity-95">Start Detection</a>
              <a href="#directory" className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20">Browse Pests</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PestHub. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
