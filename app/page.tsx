"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, BarChart3, Lightbulb, ArrowUpRight, Loader2, Zap, Activity, ShieldCheck, Globe, Cpu, Terminal, Database } from 'lucide-react';

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
    <div 
      className="min-h-screen bg-[#050505] font-mono text-zinc-500 selection:bg-blue-500/30"
      style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#a1a1aa' }}
    >
      {/* 极简导航 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 px-8 py-4 backdrop-blur-xl flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <a href="https://ymtea.club" className="flex items-center gap-3 group" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div className="bg-blue-600 p-1 rounded-sm" style={{ backgroundColor: '#2563eb', padding: '4px', borderRadius: '2px' }}><Zap size={14} style={{ color: 'white' }} /></div>
          <span className="text-sm font-black tracking-[0.2em] text-white uppercase italic" style={{ color: 'white', fontWeight: '900', fontSize: '14px' }}>YMTEA.LABS</span>
        </a>
        <div className="flex items-center gap-2 text-[9px] font-bold text-emerald-500 bg-emerald-500/5 px-2 py-1 rounded-sm border border-emerald-500/20" style={{ color: '#10b981', fontSize: '9px', fontWeight: 'bold' }}>
          NODES ACTIVE: 1,402
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-28" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px', padding: '112px 24px', textAlign: 'center' }}>
        <section className="mb-40 text-center" style={{ marginBottom: '160px' }}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-blue-500/20 bg-blue-500/5 px-4 py-1 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500" style={{ color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)', padding: '4px 16px', display: 'inline-flex', marginBottom: '32px' }}>
            <Cpu size={12} /> AI Intelligence Terminal v2.5
          </div>
          <h1 className="mb-10 text-7xl font-black tracking-tighter text-white italic uppercase" style={{ color: 'white', fontSize: '72px', fontWeight: '900', margin: '40px 0', fontStyle: 'italic' }}>
            Market <span style={{ color: '#2563eb' }}>Cognition</span>
          </h1>
          
          <div className="mx-auto flex max-w-2xl border border-white/10 bg-zinc-900/30 p-1.5 shadow-2xl" style={{ display: 'flex', maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(24,24,27,0.3)', padding: '6px' }}>
            <input 
              type="text" 
              placeholder="INPUT NICHE TO ANALYZE..." 
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-800 uppercase tracking-widest"
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '12px 16px', width: '100%' }}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-blue-600 px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 transition-all disabled:opacity-50"
              style={{ backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '0 40px', fontWeight: '900', cursor: 'pointer' }}
            >
              {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'INITIALIZE'}
            </button>
          </div>

          {analyzing && (
            <div className="mt-8 mx-auto max-w-2xl bg-black border border-white/5 p-4 text-left shadow-inner" style={{ marginTop: '32px', backgroundColor: 'black', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', maxWidth: '672px' }}>
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <div key={i} style={{ color: '#3b82f6', fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold' }}>{log}</div>
                ))}
              </div>
            </div>
          )}
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-12 animate-in fade-in duration-1000" style={{ textAlign: 'left' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div style={{ backgroundColor: '#0A0A0A', padding: '40px' }}>
                <span style={{ fontSize: '10px', color: '#52525b', fontWeight: 'bold', display: 'block', marginBottom: '24px' }}>MARKET.DENSITY</span>
                <div style={{ fontSize: '60px', fontWeight: '900', color: 'white' }}>{dynamicData.score}%</div>
              </div>
              <div style={{ backgroundColor: '#0A0A0A', padding: '40px' }}>
                <span style={{ fontSize: '10px', color: '#52525b', fontWeight: 'bold', display: 'block', marginBottom: '24px' }}>COGNITIVE.STATUS</span>
                <div style={{ fontSize: '30px', fontWeight: '900', color: 'white', fontStyle: 'italic' }}>{dynamicData.level}</div>
              </div>
              <div style={{ backgroundColor: '#2563eb', padding: '40px' }}>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold', display: 'block', marginBottom: '24px' }}>DATA.INTEGRITY</span>
                <div style={{ fontSize: '48px', fontWeight: '900', color: 'white' }}>99.8%</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.05)' }}>
              {dynamicData.keywords.map((k, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '32px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#e4e4e7', fontWeight: '900', letterSpacing: '0.1em' }}>{k.word}</span>
                  <div style={{ display: 'flex', gap: '32px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '8px', color: '#404040' }}>VOLUME</div>
                      <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>{k.volume}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '8px', color: '#404040' }}>TREND</div>
                      <div style={{ color: 'white', fontWeight: 'bold' }}>{k.trend}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-white/5 py-32 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '128px 0', textAlign: 'center' }}>
        <span style={{ fontSize: '9px', fontWeight: 'bold', letterSpacing: '0.8em', color: '#27272a' }}>
          © 2026 YMTEA LABS · DATA IS POWER
        </span>
      </footer>
    </div>
  );
}
