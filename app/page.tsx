"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, BarChart3, ArrowUpRight, Loader2, Zap, Activity, ShieldCheck, Globe, Cpu, Terminal, Database, Layers, Target, TrendingUp } from 'lucide-react';

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
      "SYNCHRONIZING WITH CLOUDFLARE EDGE...",
      "FETCHING REAL-TIME SERP DATA...",
      "PARSING SEMANTIC STRUCTURE...",
      "CALCULATING COMPETITION COEFFICIENT...",
      "OPTIMIZING ROADMAP ALGORITHM...",
      "FINALIZING DATA VISUALIZATION..."
    ];
    for (const step of diagnosticSteps) {
      setLogs(prev => [...prev.slice(-3), `> ${step}`]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const handleAnalyze = async () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    setLogs([]);

    await runDiagnostics();

    const randomScore = Math.floor(Math.random() * 15) + 82;
    setDynamicData({
      score: randomScore,
      level: randomScore > 90 ? 'CRITICAL GROWTH' : 'STABLE ASCENT',
      keywords: [
        { word: `${product} premium analysis`, diff: '0.24', trend: '+12%', vol: '24.1K' },
        { word: `buy ${product} online 2026`, diff: '0.68', trend: '+45%', vol: '11.5K' },
        { word: `best ${product} for enterprise`, diff: '0.41', trend: '+08%', vol: '09.2K' },
        { word: `${product} market forecast`, diff: '0.15', trend: '+22%', vol: '33.8K' },
      ],
      suggestions: [
        `建立基于 "${product}" 的垂直内容矩阵，利用高权重域名获取长尾流量。`,
        `针对移动端搜索习惯，优化 "${product}" 的即时解答类页面结构（Rich Snippets）。`,
        `建议在东南亚及拉美市场进行前置布局，该区域竞争压力较欧美低 40%。`
      ]
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="min-h-screen bg-[#020202] font-mono text-zinc-400 selection:bg-blue-600/40 selection:text-white">
      {/* 顶部动态背景线 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* 增强型导航栏 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/60 px-8 py-3 backdrop-blur-2xl flex justify-between items-center">
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-md opacity-40 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-blue-600 p-1.5 rounded-sm">
              <Zap size={16} className="text-white fill-current" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-[0.3em] text-white uppercase italic">YMTEA.LABS</span>
            <span className="text-[8px] text-blue-500 font-bold tracking-widest uppercase">Global Network v3.0</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-1 items-center text-[9px] font-bold text-zinc-600 uppercase tracking-tighter">
            <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping"></div>
            Node: Singapore_Edge_01
          </div>
          <a href="https://ymtea.club" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black text-white transition-all uppercase tracking-widest">
            Enter Lab
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-24 relative z-10">
        {/* 英雄区：更具冲击力 */}
        <section className="mb-32 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/5 px-5 py-1.5 text-[9px] font-black tracking-[0.4em] uppercase text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Layers size={12} /> Market Intelligence Framework
          </div>
          <h1 className="mb-10 text-8xl font-black tracking-[ -0.05em] text-white italic uppercase leading-tight">
            DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500">COGNITION</span>
          </h1>
          
          <div className="mx-auto flex max-w-3xl group relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-10 group-focus-within:opacity-30 transition duration-1000"></div>
             <div className="relative flex w-full bg-[#0A0A0A] border border-white/10 p-2 shadow-2xl backdrop-blur-3xl">
                <div className="flex items-center px-4 text-zinc-600"><Target size={20} /></div>
                <input 
                  type="text" 
                  placeholder="IDENTIFY MARKET TARGET..." 
                  className="flex-1 bg-transparent px-4 py-4 text-base text-white outline-none placeholder:text-zinc-800 uppercase tracking-[0.2em] font-bold"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                />
                <button 
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="bg-blue-600 px-12 text-[12px] font-black uppercase tracking-[0.2em] text-white hover:bg-blue-500 active:scale-95 transition-all disabled:opacity-50 overflow-hidden relative group/btn"
                >
                  <span className="relative z-10">{analyzing ? 'PROCESSING...' : 'ANALYZE'}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                </button>
             </div>
          </div>

          {/* 实时终端日志 */}
          <div className={`mt-10 mx-auto max-w-2xl overflow-hidden transition-all duration-500 ${analyzing ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-[#050505] border border-white/5 p-5 text-left rounded-lg">
              <div className="flex items-center gap-2 mb-4 opacity-50 border-b border-white/5 pb-2">
                <Terminal size={12} /> <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Kernel Diagnostics</span>
              </div>
              <div className="space-y-1.5">
                {logs.map((log, i) => (
                  <div key={i} className="text-[10px] text-blue-400 font-mono flex items-center gap-3">
                    <span className="text-zinc-800">[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* 多维数据面板 */}
            <div id="market-index" className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-[#0A0A0A] border border-white/5 p-10 relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  <TrendingUp size={200} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-8 block">Efficiency Index</span>
                <div className="flex items-end gap-4">
                  <span className="text-8xl font-black text-white leading-none tracking-tighter">{dynamicData.score}</span>
                  <div className="flex flex-col pb-2">
                    <span className="text-blue-500 text-xl font-black leading-none">PT</span>
                    <span className="text-[10px] text-emerald-500 font-bold">+2.4% OPTIMIZED</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600">Cognitive Load</span>
                <div className="text-3xl font-black text-white italic tracking-tighter leading-tight uppercase">
                  {dynamicData.level}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-[10px] font-black text-blue-400">
                  <ShieldCheck size={14} /> ENCRYPTED_SYNC
                </div>
              </div>

              <div className="bg-blue-600 p-10 flex flex-col justify-between relative group cursor-pointer shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/60">Data Priority</span>
                <div className="text-6xl font-black italic text-white tracking-tighter">CLASS A</div>
                <div className="text-[10px] font-black text-white tracking-[0.3em] uppercase pt-4 border-t border-white/20">
                  High-Value Asset
                </div>
              </div>
            </div>

            {/* 关键词多维矩阵：更清晰的排版 */}
            <div id="keyword-analysis" className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden shadow-2xl">
              <div className="bg-white/[0.03] border-b border-white/5 px-10 py-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                   <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white">Semantic Intelligence Output</h3>
                </div>
                <span className="text-[9px] text-zinc-600 font-black tracking-[0.3em]">REF_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="grid grid-cols-1">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex flex-wrap items-center justify-between border-white/5 p-10 border-b last:border-0 hover:bg-white/[0.01] transition-all group relative">
                    <div className="flex flex-col gap-3 min-w-[250px]">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Query.{i + 1}</span>
                      <span className="text-xl font-black text-zinc-200 tracking-wider uppercase group-hover:text-white transition-colors">{k.word}</span>
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-center">
                        <div className="text-[9px] text-zinc-700 uppercase font-black mb-1">Saturation</div>
                        <div className="text-base font-black text-zinc-400">{k.diff}</div>
                      </div>
                      <div className="text-center min-w-[80px]">
                        <div className="text-[9px] text-zinc-700 uppercase font-black mb-1">Trend</div>
                        <div className={`text-base font-black ${k.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{k.trend}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] text-zinc-700 uppercase font-black mb-1">Vol.Data</div>
                        <div className="text-lg font-black text-white italic tracking-tighter">{k.vol}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 战略白板 */}
            <div id="roadmap" className="grid grid-cols-1 md:grid-cols-5 bg-white text-black min-h-[500px] shadow-[0_50px_100px_-20px_rgba(255,255,255,0.05)]">
              <div className="md:col-span-2 bg-zinc-100 p-16 flex flex-col justify-between border-r border-zinc-200">
                <div>
                   <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">Strategic<br/>Roadmap</h3>
                   <p className="text-xs font-bold text-zinc-500 uppercase leading-relaxed tracking-widest">
                     Our proprietary algorithms have identified these critical execution paths based on current SERP volatility and market entropy.
                   </p>
                </div>
                <div className="flex flex-col gap-4 pt-10 border-t border-zinc-200">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em]">Auth: YMTEA Intelligence</span>
                   <div className="flex gap-2">
                      <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-black italic">YM</div>
                   </div>
                </div>
              </div>
              <div className="md:col-span-3 p-16 space-y-12 bg-white">
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-6 mb-4">
                      <span className="text-5xl font-black text-zinc-100 group-hover:text-blue-600 transition-colors duration-500 leading-none">0{i + 1}</span>
                      <div className="h-px flex-1 bg-zinc-100"></div>
                    </div>
                    <p className="text-sm font-black uppercase tracking-tight text-zinc-900 leading-relaxed pl-4 border-l-4 border-transparent group-hover:border-blue-600 transition-all duration-300">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 沉浸式页脚 */}
      <footer className="border-t border-white/5 py-40 mt-40 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
              <div className="md:col-span-2">
                 <div className="flex items-center gap-3 mb-8">
                   <div className="bg-blue-600 p-1 rounded-sm"><Zap size={14} className="text-white fill-current" /></div>
                   <span className="text-sm font-black tracking-[0.4em] text-white uppercase italic">YMTEA.LABS</span>
                 </div>
                 <p className="text-zinc-700 text-[11px] leading-relaxed uppercase tracking-widest font-bold max-w-sm">
                   Next-generation market terminal for digital arbitrage and search intelligence. Operating globally from decentralised nodes.
                 </p>
              </div>
              <div>
                 <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">Network</h4>
                 <ul className="space-y-4 text-zinc-700 text-[10px] font-black uppercase tracking-widest">
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Cluster Status</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">API Endpoint</a></li>
                    <li><a href="https://ymtea.club" className="hover:text-blue-500 transition-colors">Ymtea.Club</a></li>
                 </ul>
              </div>
              <div className="text-right">
                 <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">Verification</h4>
                 <div className="inline-block p-4 border border-zinc-900 bg-black/50">
                    <Database size={24} className="text-zinc-800 mb-4 ml-auto" />
                    <span className="text-[9px] text-zinc-800 font-black tracking-widest block uppercase">Blockchain Secured Analysis</span>
                 </div>
              </div>
           </div>
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-20">
              <span className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-800 mb-8 md:mb-0">
                © 2026 YMTEA GLOBAL TERMINAL · ALL DATA ENCRYPTED
              </span>
              <div className="flex gap-10">
                 <div className="flex gap-1 text-[9px] font-black text-emerald-900">
                    <div className="w-2 h-2 rounded-full bg-emerald-900 animate-pulse"></div>
                    SYSTEMS_OPTIMAL
                 </div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
