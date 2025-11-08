import { Cpu, Layers, Globe, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mt-2 text-slate-600">Powered by Google Gemini for multimodal understanding, optimized with PestHub workflows for precision and speed.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold">Why Gemini</h3>
            <p className="text-sm text-slate-600">Multimodal intelligence, global knowledge, and rapid iteration outperform narrow CNNs.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold">Workflow</h3>
            <p className="text-sm text-slate-600">Image enhancement → feature extraction → taxonomy reasoning → treatment synthesis.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold">Coverage</h3>
            <p className="text-sm text-slate-600">Built-in 12-pest database plus AI-generated insights for thousands more on demand.</p>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-emerald-600" />
            <div>
              <h4 className="font-semibold">Privacy-first</h4>
              <p className="text-sm text-slate-600">Images are processed securely. Only you control when to save results to your account.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
