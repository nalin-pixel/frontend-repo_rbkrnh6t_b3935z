import { useRef, useState } from 'react';
import { ImagePlus, Loader2, CheckCircle2, Camera, Upload } from 'lucide-react';

export default function Classifier() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  const [stage, setStage] = useState('idle'); // idle | preview | processing | result

  const handleFiles = (files) => {
    const f = files?.[0];
    if (!f) return;
    setFile(Object.assign(f, { preview: URL.createObjectURL(f) }));
    setStage('preview');
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    handleFiles(e.dataTransfer.files);
  };

  const startClassify = async () => {
    setStage('processing');
    // Simulated staged progress for UX demo
    await new Promise((r) => setTimeout(r, 700));
    await new Promise((r) => setTimeout(r, 700));
    await new Promise((r) => setTimeout(r, 700));
    setStage('result');
  };

  const reset = () => {
    setFile(null);
    setStage('idle');
  };

  const zoneBase = 'rounded-2xl border-2 border-dashed p-8 transition-all';
  const zoneState = stage === 'idle' && drag
    ? 'border-emerald-400 bg-emerald-50/50'
    : stage === 'idle'
    ? 'border-slate-300 hover:border-slate-400 bg-white'
    : 'border-slate-200 bg-white';

  return (
    <section id="classify" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Classify a Pest</h2>
            <p className="mt-2 text-slate-600">Upload a clear, well-lit close-up photo for best results.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-slate-600">
            <Camera className="h-4 w-4" /> Tips: close-up, good lighting, steady focus
          </div>
        </div>

        {/* Upload/Preview */}
        {stage === 'idle' || stage === 'preview' ? (
          <div
            className={`${zoneBase} ${zoneState} mt-6`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={onDrop}
          >
            {stage === 'idle' && (
              <div className="grid place-items-center text-center py-10">
                <div className="h-16 w-16 rounded-2xl bg-emerald-50 text-emerald-600 grid place-items-center">
                  <ImagePlus className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Drag & drop an image</h3>
                <p className="mt-1 text-slate-600">or click to browse files</p>
                <button
                  onClick={() => inputRef.current?.click()}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:opacity-95"
                >
                  <Upload className="h-4 w-4" /> Choose File
                </button>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>
            )}

            {stage === 'preview' && file && (
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <img src={file.preview} alt="preview" className="w-full rounded-xl object-cover aspect-video" />
                <div>
                  <h4 className="font-semibold">Selected Image</h4>
                  <p className="text-sm text-slate-600">{file.name} • {(file.size / 1024 / 1024).toFixed(2)} MB</p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button onClick={startClassify} className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium">
                      Classify
                    </button>
                    <button onClick={reset} className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium">
                      Change Image
                    </button>
                  </div>

                  <ul className="mt-6 text-sm text-slate-700 space-y-2">
                    <li>• Use natural light or bright conditions</li>
                    <li>• Fill the frame with the pest</li>
                    <li>• Avoid motion blur</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Processing */}
        {stage === 'processing' && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-3 text-slate-700">
              <Loader2 className="h-5 w-5 animate-spin" /> Analyzing image with Gemini AI...
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {['Upload', 'Processing', 'AI Analysis', 'Complete'].map((s, i) => (
                <div key={s} className={`p-3 rounded-xl border text-sm flex items-center gap-2 ${i < 3 ? 'border-emerald-300 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-700'}`}>
                  {i < 3 ? <CheckCircle2 className="h-4 w-4" /> : <Loader2 className="h-4 w-4 animate-spin" />}
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {stage === 'result' && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <img src={file?.preview} alt="result" className="w-full rounded-xl object-cover aspect-video" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Fall Armyworm</h3>
                  <span className="px-2.5 py-1 rounded-full text-xs bg-amber-100 text-amber-800">High Threat</span>
                </div>
                <p className="text-slate-600 italic">Spodoptera frugiperda • Lepidoptera</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">Confidence: 94%</div>
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700">Category: Caterpillar</div>
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700">Detection: 2.7s</div>
                </div>
                <p className="mt-3 text-sm text-slate-700">
                  Aggressive migratory pest impacting maize, sorghum, and more. Causes windowpane feeding,
                  ragged leaves, and frass in whorl.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#directory" className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm">Learn More</a>
                  <button onClick={reset} className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm">Classify Another</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
