import { Rocket, ShieldCheck, Timer } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <Spline scene="https://prod.spline.design/O0JmQq9vTQzKqkIf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-emerald-200 text-emerald-700 text-sm font-medium shadow-sm">
              <ShieldCheck className="h-4 w-4" /> Trusted by agronomists worldwide
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Protect crops with instant AI pest identification
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Upload a photo or search by name. Get accurate identification, treatment recommendations,
              and prevention strategies in under 3 seconds.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#classify" className="px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-xl shadow-emerald-500/30 hover:opacity-95 transition">
                Start Detection
              </a>
              <a href="#directory" className="px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition">
                Browse Pests
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 max-w-md rounded-2xl border border-emerald-200 bg-white/80 backdrop-blur shadow-sm">
              {[
                { label: 'Pest Types', value: '12' },
                { label: 'Accuracy', value: '95%' },
                { label: 'Detection', value: '<3s' },
              ].map((s, i) => (
                <div key={i} className="px-5 py-4 text-center">
                  <p className="text-2xl font-bold tracking-tight">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-gradient-to-tr from-emerald-200/40 to-teal-200/40 rounded-3xl blur-3xl pointer-events-none" />
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 grid place-items-center text-white">
                <Rocket className="h-14 w-14 text-emerald-400" />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Gemini-powered multimodal analysis delivers precise, actionable insights.
              </p>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
                <Timer className="h-4 w-4" /> Under 3s average response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
