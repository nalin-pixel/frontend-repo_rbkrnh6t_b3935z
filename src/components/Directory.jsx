import { useMemo, useState } from 'react';
import { Search, Filter, Grid, List, Info, BadgeCheck } from 'lucide-react';

const pests = [
  { id: 1, name: 'Fall Armyworm', sci: 'Spodoptera frugiperda', cat: 'Caterpillar', threat: 'High', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Aphids', sci: 'Aphidoidea', cat: 'Sap-sucking', threat: 'Medium', img: 'https://images.unsplash.com/photo-1602067340370-bdce3554102e?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Leaf Miner', sci: 'Liriomyza spp.', cat: 'Fly Larvae', threat: 'Medium', img: 'https://images.unsplash.com/photo-1578922573207-3b2c9b93ee30?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Whitefly', sci: 'Bemisia tabaci', cat: 'Sap-sucking', threat: 'High', img: 'https://images.unsplash.com/photo-1520031521646-9c77f8d6f826?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Cutworm', sci: 'Agrotis ipsilon', cat: 'Caterpillar', threat: 'Medium', img: 'https://images.unsplash.com/photo-1520332129951-6885540946d9?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Spider Mite', sci: 'Tetranychidae', cat: 'Mite', threat: 'High', img: 'https://images.unsplash.com/photo-1617090126911-c65984f3c83c?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Stem Borer', sci: 'Chilo partellus', cat: 'Borer', threat: 'High', img: 'https://images.unsplash.com/photo-1527853787696-cae17d5b1421?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, name: 'Thrips', sci: 'Thysanoptera', cat: 'Thrips', threat: 'Medium', img: 'https://images.unsplash.com/photo-1466614501093-5714e5726e49?q=80&w=1200&auto=format&fit=crop' },
  { id: 9, name: 'Mealybug', sci: 'Pseudococcidae', cat: 'Scale', threat: 'Medium', img: 'https://images.unsplash.com/photo-1533973860717-d49dfd14bb3e?q=80&w=1200&auto=format&fit=crop' },
  { id: 10, name: 'Army Ant', sci: 'Dorylus', cat: 'Ant', threat: 'Low', img: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1200&auto=format&fit=crop' },
  { id: 11, name: 'Stink Bug', sci: 'Pentatomidae', cat: 'Bug', threat: 'Medium', img: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d8e?q=80&w=1200&auto=format&fit=crop' },
  { id: 12, name: 'Grasshopper', sci: 'Acrididae', cat: 'Orthoptera', threat: 'Medium', img: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop' },
];

const threatColor = (t) => t === 'High' ? 'bg-amber-100 text-amber-800' : t === 'Medium' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800';

export default function Directory() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [threat, setThreat] = useState('All');
  const [view, setView] = useState('grid');
  const [custom, setCustom] = useState(null); // { loading, data }

  const categories = useMemo(() => ['All', ...Array.from(new Set(pests.map(p => p.cat)))], []);

  const filtered = pests.filter(p => (
    (cat === 'All' || p.cat === cat) &&
    (threat === 'All' || p.threat === threat) &&
    (p.name.toLowerCase().includes(query.toLowerCase()) || p.sci.toLowerCase().includes(query.toLowerCase()))
  ));

  const openCustom = () => setCustom({ loading: false, data: null });

  const runCustom = async () => {
    setCustom((c) => ({ ...c, loading: true }));
    await new Promise((r) => setTimeout(r, 1200));
    setCustom({ loading: false, data: {
      name: 'Tomato Hornworm', sci: 'Manduca quinquemaculata', cat: 'Caterpillar', threat: 'High', ai: true,
      desc: 'Large green caterpillar causing defoliation on solanaceous crops. Chewing damage and frass present.'
    }});
  };

  return (
    <section id="directory" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Pest Directory</h2>
            <p className="mt-2 text-slate-600">Search curated pests or run a custom AI search for any pest worldwide.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">12 Curated</div>
              <div className="p-3 rounded-xl bg-slate-100 text-slate-700">95% Accuracy</div>
              <div className="p-3 rounded-xl bg-slate-100 text-slate-700">Global Coverage</div>
            </div>
          </div>
          <button onClick={openCustom} className="h-10 px-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium">Custom Search</button>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 h-11 rounded-full border border-slate-300 bg-white">
            <Search className="h-4 w-4 text-slate-500" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pests..." className="outline-none text-sm w-56" />
          </div>
          <div className="flex items-center gap-2 px-3 h-11 rounded-full border border-slate-300 bg-white">
            <Filter className="h-4 w-4 text-slate-500" />
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="outline-none text-sm">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2 px-3 h-11 rounded-full border border-slate-300 bg-white">
            <select value={threat} onChange={(e) => setThreat(e.target.value)} className="outline-none text-sm">
              {['All','High','Medium','Low'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="ml-auto flex rounded-full border border-slate-300 overflow-hidden">
            <button onClick={() => setView('grid')} className={`px-3 h-11 ${view==='grid'?'bg-slate-100':''}`}><Grid className="h-4 w-4"/></button>
            <button onClick={() => setView('list')} className={`px-3 h-11 ${view==='list'?'bg-slate-100':''}`}><List className="h-4 w-4"/></button>
          </div>
        </div>

        {/* Grid/List */}
        {view === 'grid' ? (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="relative">
                  <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs bg-white/90 backdrop-blur border">{p.cat}</div>
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs ${threatColor(p.threat)}`}>{p.threat}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold flex items-center gap-2">{p.name}</h3>
                  <p className="text-sm text-slate-600 italic">{p.sci}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs">Quick View</button>
                    <a href="#about" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {filtered.map(p => (
              <div key={p.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3">
                <img src={p.img} alt={p.name} className="h-16 w-24 object-cover rounded-xl" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full text-xs border">{p.cat}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${threatColor(p.threat)}`}>{p.threat}</span>
                  </div>
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm text-slate-600 italic">{p.sci}</p>
                </div>
                <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs">Quick View</button>
                <a href="#about" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs">Learn More</a>
              </div>
            ))}
          </div>
        )}

        {/* Custom Search Modal */}
        {custom && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur" onClick={() => setCustom(null)} />
            <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <h3 className="text-xl font-semibold">AI Custom Search</h3>
              <p className="text-sm text-slate-600">Search any pest by name. We’ll validate it and generate complete information.</p>
              <div className="mt-4 flex items-center gap-2">
                <input placeholder="Type any pest name..." className="flex-1 h-11 px-4 rounded-xl border border-slate-300" />
                <button onClick={runCustom} className="h-11 px-4 rounded-xl bg-slate-900 text-white">Search</button>
              </div>

              {custom.loading && (
                <div className="mt-6 flex items-center gap-3 text-slate-700">
                  <Info className="h-4 w-4" /> Contacting Gemini...
                </div>
              )}

              {custom.data && (
                <div className="mt-6 rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-800">AI Generated</span>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold">{custom.data.name} <span className="text-sm text-slate-500 italic">• {custom.data.sci}</span></h4>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 rounded-full text-xs border">{custom.data.cat}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${threatColor(custom.data.threat)}`}>{custom.data.threat}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{custom.data.desc}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
