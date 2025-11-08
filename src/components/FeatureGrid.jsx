import { Brain, Leaf, Zap, BookOpen, Sparkles, MousePointer } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    desc: 'State-of-the-art Gemini AI identifies pests with high confidence from images or text.',
    benefits: ['Multimodal analysis', 'Context-aware results', 'Continuous learning'],
  },
  {
    icon: Leaf,
    title: 'Crop Protection',
    desc: 'Protect yield with early detection and targeted guidance for your specific crops.',
    benefits: ['Reduced losses', 'Crop-specific tips', 'Field-ready advice'],
  },
  {
    icon: Sparkles,
    title: 'Sustainable Farming',
    desc: 'Prioritize eco-friendly practices and integrated pest management techniques.',
    benefits: ['IPM-first', 'Minimize chemicals', 'Healthy ecosystems'],
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'End-to-end pipeline optimized for speed without sacrificing accuracy.',
    benefits: ['< 3s detection', 'Edge acceleration', 'Global scale'],
  },
  {
    icon: BookOpen,
    title: 'Expert Knowledge',
    desc: 'Curated insights and references distilled into clear, actionable guidance.',
    benefits: ['Verified sources', 'Field-tested tips', 'Clear next steps'],
  },
  {
    icon: MousePointer,
    title: 'Easy to Use',
    desc: 'Mobile-first design with delightful interactions and clear feedback.',
    benefits: ['Drag & drop', 'Keyboard accessible', 'Simple flows'],
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Everything you need for smarter pest management</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A premium experience from first upload to actionable results, crafted for busy growers and pros.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, benefits }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center shadow-inner">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
