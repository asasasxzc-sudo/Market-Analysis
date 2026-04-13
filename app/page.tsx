"use client";

import React, { useState, useRef } from 'react';
import { Search, Zap, ShieldCheck, Newspaper, ArrowUpRight, Loader2, Globe, BarChart } from 'lucide-react';

export default function Page() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  
  const [data, setData] = useState({
    score: 94,
    points: "20,80 40,60 60,70 80,40 100,50 120,30 140,20 160,10" // 曲线坐标
  });

  const runAnalysis = () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-400 font-sans selection:bg-blue-500/30">
      <nav className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all">
              <Zap size={16} className="text-white" fill="currentColor" />
            </div>
            <span className="text-sm font-black tracking-widest text-white uppercase">YMTEA LABS</span>
          </a>
          <div className="flex items-center gap-8">
            <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-zinc-500 hover:text-white transition-colors tracking-widest flex items-center gap-2">
              <Newspaper size={14} /> BLOG
            </a>
            <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white hover:bg-white/10 transition-all">
              YMTEA.CLUB
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-24">
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-8">
            <Globe size={12} /> Global Intelligence Engine
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 italic">
            Market <span className="text-blue-600 underline decoration-1 underline-offset-8">Alpha.</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg font-medium mb-12 leading-relaxed">
            参考 Morank.ai 驱动的专业贸易终端。输入产品 niche，获取实时增长曲线。
          </p>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
            <div className="relative flex p-2 bg-[#0A0A0A] border border-white/10 rounded-2xl">
              <input 
                className="flex-1 bg-transparent px-6 py-4 text-white outline-none placeholder:text-zinc-800 font-bold text-lg"
                placeholder="Search market trends..."
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
              />
              <button 
                onClick={runAnalysis}
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-lg"
              >
                {analyzing ? <Loader2 className="animate-spin" size={18} /> : 'ANALYZE'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 group hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2">Growth Index</h3>
                    <div className="text-5xl font-black text-white">{data.score}<span className="text-zinc-700 text-2xl">.0</span></div>
                  </div>
                  <BarChart className="text-zinc-800" />
                </div>
                
                <div className="h-48 w-full relative">
                  <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 80 C 40 80, 60 20, 100 40 S 160 0, 200 10" 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="3" 
                      className="drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                    />
                    <path 
                      d="M 0 80 C 40 80, 60 20, 100 40 S 160 0, 200 10 V 100 H 0 Z" 
                      fill="url(#lineGrad)"
                    />
                  </svg>
                </div>
                <div className="flex justify-between mt-6 text-[9px] font-black text-zinc-800 uppercase tracking-widest">
                  <span>Past 12 Months</span>
                  <span>Market Forecast</span>
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-blue-900/40 relative overflow-hidden group">
                <div className="relative z-10">
                  <ShieldCheck className="mb-6 opacity-50" size={40} />
                  <div className="text-xs font-bold uppercase tracking-[0.3em] mb-2">Signal Status</div>
                  <div className="text-4xl font-black italic italic">STABLE</div>
                </div>
                <p className="relative z-10 text-sm font-bold text-blue-100 leading-relaxed opacity-80">
                  当前品类在 <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30">YMTEA</a> 核心监测区域表现强劲。
                </p>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-10">Keywords Alpha</h3>
                <div className="space-y-6">
                  {[["Premium Supply", "+142%"], ["Global Trade", "+96%"], ["B2B Niche", "+54%"]].map((item, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-default">
                      <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{item[0]}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-blue-500">{item[1]}</span>
                        <ArrowUpRight size={14} className="text-zinc-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-10">Strategic Insights</h3>
                  <p className="text-sm text-zinc-500 font-medium leading-[1.8]">
                    • 建议加强与 <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="text-zinc-300 border-b border-zinc-800">云茗荟</a> 供应链的深度集成。
                    <br />• 优化 SEO 以匹配 2026 年欧美市场的“可持续”搜索趋势。
                  </p>
                </div>
                <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="mt-12 flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5 transition-all group">
                  <span className="text-xs font-black text-white tracking-widest uppercase">Explore Intelligence</span>
                  <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-black/20">
        <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="inline-block mb-6 opacity-30 hover:opacity-100 transition-opacity">
          <Zap size={24} className="text-zinc-500" />
        </a>
        <p className="text-[9px] font-bold tracking-[0.6em] text-zinc-800 uppercase">
          Terminal v2.0 powered by <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer">YMTEA.CLUB</a>
        </p>
      </footer>
    </div>
  );
}
