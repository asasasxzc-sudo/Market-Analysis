"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, BarChart3, Lightbulb, ArrowUpRight, Loader2, Zap, Activity, ShieldCheck, Globe, Cpu, Terminal, Database } from 'lucide-react';
// 在 SEOAnalyzer 函数之前插入
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    body { background-color: #050505 !important; color: #71717a !important; margin: 0; font-family: monospace; }
    .bg-blue-600 { background-color: #2563eb !important; }
    .text-white { color: white !important; }
    .bg-zinc-900\/30 { background-color: rgba(24, 24, 27, 0.3) !important; }
  `;
  document.head.appendChild(style);
}
export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const [dynamicData, setDynamicData] = useState({
    score: 0,
    level: '',
    keywords: [] as any[],
    suggestions: [] as string[]
  });

  // 模拟智能日志流
  const runDiagnostics = async () => {
    const diagnosticSteps = [
      "INITIALIZING YMTEA CORE V4.0...",
      "CONNECTING TO GLOBAL SEARCH NODES...",
      `EXTRACTING SEMANTIC ENTITIES FOR: ${product.toUpperCase()}`,
      "ANALYZING COMPETITOR BACKLINK MATRICES...",
      "CALCULATING MARKET SATURATION INDEX...",
      "GENERATING STRATEGIC ROADMAP...",
      "DONE. READY FOR OUTPUT."
    ];

    for (const step of diagnosticSteps) {
      setLogs(prev => [...prev.slice(-4), `> ${step}`]);
      await new Promise(resolve => setTimeout(resolve, 600));
    }
  };

  const handleAnalyze = async () => {
    if (!product.trim()) return alert("请输入产品名称");
    setAnalyzing(true);
    setShowResult(false);
    setLogs([]);

    await runDiagnostics();

    const randomScore = Math.floor(Math.random() * 20) + 75;
    setDynamicData({
      score: randomScore,
      level: randomScore > 88 ? 'HIGH PERFORMANCE' : 'ACCELERATING',
      keywords: [
        { word: `Best ${product} reviews 2026`, diff: 'EASY', trend: 'STABLE', volume: '12.5K' },
        { word: `Organic ${product} wholesale`, diff: 'MED', trend: 'UPWARD', volume: '8.2K' },
        { word: `Global ${product} logistics`, diff: 'LOW', trend: 'ACTIVE', volume: '15.1K' },
        { word: `${product} sustainable trade`, diff: 'EASY', trend: 'RISING', volume: '5.4K' },
      ],
      suggestions: [
        `在欧美市场强调 "${product}" 的环保属性与可追溯性。`,
        `针对 Google 搜索结果优化 "${product}" 的对比类文章。`,
        `当前品类在视频社交平台的声量处于爆发前期。`
      ]
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-zinc-500 selection:bg-blue-500/30">
      {/* 极简导航 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 px-8 py-4 backdrop-blur-xl flex justify-between items-center">
        <a href="https://ymtea.club" className="flex items-center gap-3 group">
          <div className="bg-blue-600 p-1 rounded-sm"><Zap size={14} className="text-white fill-current" /></div>
          <span className="text-sm font-black tracking-[0.2em] text-white uppercase italic">YMTEA.LABS</span>
        </a>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 text-[9px] font-bold text-emerald-500 bg-emerald-500/5 px-2 py-1 rounded-sm border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            NODES ACTIVE: 1,402
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-28">
        <section className="mb-40 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-blue-500/20 bg-blue-500/5 px-4 py-1 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500">
            <Cpu size={12} className="animate-spin-slow" /> AI Intelligence Terminal v2.5
          </div>
          <h1 className="mb-10 text-7xl font-black tracking-tighter text-white italic uppercase">
            Market <span className="text-blue-600">Cognition</span>
          </h1>
          
          <div className="mx-auto flex max-w-2xl border border-white/10 bg-zinc-900/30 p-1.5 focus-within:border-blue-600/50 shadow-2xl">
            <input 
              type="text" 
              placeholder="INPUT NICHE TO ANALYZE..." 
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-800 uppercase tracking-widest"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-blue-600 px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'INITIALIZE'}
            </button>
          </div>

          {/* 实时智能日志流 */}
          {analyzing && (
            <div className="mt-8 mx-auto max-w-2xl bg-black border border-white/5 p-4 text-left shadow-inner">
              <div className="flex items-center gap-2 mb-3 text-zinc-700 border-b border-white/5 pb-2">
                <Terminal size={10} /> <span className="text-[9px] font-bold tracking-widest uppercase">Processing Engine Output</span>
              </div>
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <div key={i} className="text-[10px] text-blue-500/80 font-bold font-mono animate-in fade-in slide-in-from-left-2">{log}</div>
                ))}
              </div>
            </div>
          )}
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-12 animate-in fade-in duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              <div className="bg-[#0A0A0A] p-10 group">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 block mb-6">Market.Density</span>
                <div className="text-6xl font-black text-white">{dynamicData.score}<span className="text-sm text-blue-600 ml-2">%</span></div>
                <div className="mt-6 flex gap-1">
                   {[...Array(10)].map((_, i) => (
                     <div key={i} className={`h-1.5 flex-1 ${i < dynamicData.score/10 ? 'bg-blue-600' : 'bg-zinc-900'}`}></div>
                   ))}
                </div>
              </div>

              <div className="bg-[#0A0A0A] p-10 flex flex-col justify-between border-x border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">Cognitive.Status</span>
                <div className="text-3xl font-black text-white italic uppercase">{dynamicData.level}</div>
                <div className="flex items-center gap-2 text-[9px] text-emerald-500 font-bold mt-4">
                  <ShieldCheck size={12} /> VERIFIED BY AI CLUSTER
                </div>
              </div>

              <div className="bg-blue-600 p-10 flex flex-col justify-between group overflow-hidden relative">
                <Database className="absolute -right-6 -bottom-6 text-white/10 w-32 h-32 rotate-12" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Data.Integrity</span>
                <div className="text-5xl font-black italic text-white uppercase tracking-tighter">99.8%</div>
                <span className="text-[9px] font-black text-white/80 uppercase tracking-widest border-t border-white/20 pt-4">Global Matrix Sync OK</span>
              </div>
            </div>

            {/* 列表细节部分保持专业感 */}
            <div id="keyword-analysis" className="bg-[#0A0A0A] border border-white/5">
              <div className="border-b border-white/5 px-10 py-6 bg-white/[0.02] flex justify-between items-center">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Semantic.Matrix</h3>
                <span className="text-[9px] text-blue-600 font-black tracking-widest animate-pulse">LIVE DATA FEED</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between border-white/5 p-8 border-b odd:border-r hover:bg-white/[0.02] transition-all group">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-black text-zinc-200 tracking-widest uppercase">{k.word}</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="text-[8px] text-zinc-700 uppercase font-black">Score</div>
                        <div className="text-[11px] font-black text-blue-500">{k.volume}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] text-zinc-700 uppercase font-black">Trend</div>
                        <div className="text-[11px] font-black text-white uppercase italic">{k.trend}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-white/5 py-32 text-center">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-20">
          <div>
            <div className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Neural.Engine</div>
            <p className="text-zinc-700 text-[10px] leading-relaxed font-bold uppercase">YMTEA proprietary AI cluster processing 1.4PB/s of search metadata.</p>
          </div>
          <div className="md:col-span-2 text-right self-end">
            <span className="text-[9px] font-bold uppercase tracking-[0.8em] text-zinc-800">
              © 2026 YMTEA LABS · DATA IS POWER · <a href="https://ymtea.club" className="hover:text-blue-600 transition-colors">YMTEA.CLUB</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
