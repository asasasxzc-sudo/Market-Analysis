"use client";

import React, { useState, useRef } from 'react';
import { Search, Zap, ShieldCheck, Newspaper, ArrowUpRight, Loader2, Globe, TrendingUp } from 'lucide-react';

/* Build Version: 2026.04.13-v3 */
export default function Page() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const runAnalysis = () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-400 font-sans selection:bg-blue-500/30">
      {/* Top Banner */}
      <nav className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <Zap size={16} className="text-white" fill="currentColor" />
            </div>
            <span className="text-sm font-black tracking-widest text-white uppercase">YMTEA LABS</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-zinc-500 hover:text-white transition-colors tracking-[0.2em] uppercase flex items-center gap-2">
              <Newspaper size={14} /> BLOG
            </a>
            <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="hidden sm:block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white hover:bg-white/20 transition-all uppercase tracking-widest">
              YMTEA.CLUB
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500 text-[9px] font-black tracking-[0.3em] uppercase mb-8">
            <Globe size={10} className="text-blue-500" /> Market Intelligence 2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 italic leading-none">
            Data <span className="text-blue-600">Refined.</span>
          </h1>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur opacity-10 group-focus-within:opacity-25 transition"></div>
            <div className="relative flex p-1.5 bg-[#080808] border border-white/10 rounded-2xl shadow-2xl">
              <input 
                className="flex-1 bg-transparent px-5 py-3 text-white outline-none font-bold text-lg placeholder:text-zinc-800"
                placeholder="Analyze target market..."
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
              />
              <button 
                onClick={runAnalysis}
                className="bg-white text-black px-8 py-3 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all"
              >
                {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'Process'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 指数趋势卡片 - 曲线已调小 */}
              <div className="md:col-span-2 bg-[#080808] border border-white/5 rounded-[2rem] p-8 overflow-hidden relative">
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-1">Market Trend</h3>
                    <div className="text-4xl font-black text-white tracking-tight">94.8<span className="text-blue-600">%</span></div>
                  </div>
                  <TrendingUp className="text-blue-500/50" size={20} />
                </div>
                
                {/* 精简比例的 SVG 曲线 */}
                <div className="h-32 w-full mt-4 -mx-2">
                  <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 50 C 30 50, 45 10, 80 25 S 130 5, 170 15 S 200 5, 200 5" 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M 0 50 C 30 50, 45 10, 80 25 S 130 5, 170 15 S 200 5, 200 5 V 60 H 0 Z" 
                      fill="url(#chartFill)"
                    />
                  </svg>
                </div>
                <div className="flex justify-between mt-2 text-[8px] font-bold text-zinc-800 uppercase tracking-widest">
                  <span>Start Cycle</span>
                  <span>Projected Growth</span>
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <div className="relative z-10">
                  <ShieldCheck className="mb-4 opacity-50" size={32} />
                  <div className="text-3xl font-black italic tracking-tighter">OPTIMAL</div>
                  <p className="text-xs font-bold text-blue-100 mt-2 leading-relaxed">系统评估为“高潜力”品类。</p>
                </div>
                <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="relative z-10 text-[9px] font-black uppercase tracking-widest border-b border-white/20 pb-1 w-fit hover:border-white transition-all">
                  via ymtea.club
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#080808] border border-white/5 rounded-[2rem] p-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700 mb-8">Alpha Keywords</h3>
                <div className="space-y-5">
                  {[["Supply Chain", "High"], ["Export Focus", "Medium"], ["B2B Brand", "Viral"]].map((item, i) => (
                    <div key={i} className="flex justify-between items-center group">
                      <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">{item[0]}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{item[1]}</span>
                        <ArrowUpRight size={12} className="text-zinc-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#080808] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700 mb-8">Intelligence</h3>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-4 italic">
                    “建议在 Q2 阶段优先通过 <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="text-zinc-300">云茗荟</a> 渠道建立品牌背书。”
                  </p>
                </div>
                <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">Research Center</span>
                  <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-black/20">
        <p className="text-[9px] font-bold tracking-[0.6em] text-zinc-800 uppercase">
          © 2026 YMTEA LABS · Global Terminal
        </p>
      </footer>
    </div>
  );
}
