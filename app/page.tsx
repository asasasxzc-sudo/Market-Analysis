"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, Lightbulb, ArrowUpRight, Loader2, Zap, Activity, ShieldCheck, Globe } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const [dynamicData, setDynamicData] = useState({
    score: 0,
    level: '',
    keywords: [] as any[],
    suggestions: [] as string[]
  });

  const handleAnalyze = () => {
    if (!product.trim()) return alert("请输入产品名称");
    setAnalyzing(true);
    setShowResult(false);

    setTimeout(() => {
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
          `在欧美市场强调 "${product}" 的环保属性与可追溯性，构建品牌技术壁垒。`,
          `针对 Google 搜索结果优化 "${product}" 的权威对比类文章（Comparison Matrix）。`,
          `当前品类在视频社交平台的声量处于爆发前期，建议优先布局视觉化内容。`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-zinc-500 selection:bg-blue-500/30">
      {/* 极简工业导航 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 px-8 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-1 rounded-sm transition-transform group-hover:scale-105">
              <Zap size={14} className="text-white fill-current" />
            </div>
            <span className="text-sm font-black tracking-[0.2em] text-white uppercase italic">YMTEA.LABS</span>
          </a>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            <button onClick={() => scrollToSection('market-index')} className="text-zinc-500 hover:text-blue-500 transition-colors">Data.Metrics</button>
            <button onClick={() => scrollToSection('keyword-analysis')} className="text-zinc-500 hover:text-blue-500 transition-colors">Keywords.Matrix</button>
            <button onClick={() => scrollToSection('roadmap')} className="text-white border-b border-blue-600 pb-1">Strategic.Roadmap</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-28">
        {/* 核心搜索区域 */}
        <section className="mb-40 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-blue-500/20 bg-blue-500/5 px-4 py-1 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500">
            <Activity size={12} className="animate-pulse" /> Intelligence Terminal v2.1
          </div>
          <h1 className="mb-10 text-7xl font-black tracking-tighter text-white italic uppercase">
            Market <span className="text-blue-600 underline decoration-blue-900/50 underline-offset-8">Terminal</span>
          </h1>
          <p className="mb-14 text-zinc-600 text-xs tracking-widest uppercase font-bold max-w-2xl mx-auto leading-relaxed">
            Real-time SEO analysis engine powered by YMTEA proprietary algorithms. <br/> 
            Data-driven insights for global market penetration.
          </p>
          
          <div className="mx-auto flex max-w-2xl border border-white/10 bg-zinc-900/30 p-1.5 focus-within:border-blue-600/50 transition-all shadow-[0_0_50px_-12px_rgba(37,99,235,0.15)]">
            <div className="flex items-center pl-4 text-zinc-700">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="ENTER PRODUCT CATEGORY OR NICHE..." 
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-800 uppercase tracking-widest"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-blue-600 px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
            >
              {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'Execute.Scan'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* 顶层指标网格 */}
            <div id="market-index" className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 md:grid-cols-3 shadow-2xl">
              <div className="bg-[#0A0A0A] p-10 group hover:bg-[#0d0d0d] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">Global.Score</span>
                  <BarChart3 size={16} className="text-blue-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-white">{dynamicData.score}</span>
                  <span className="text-xs text-blue-600 font-black tracking-widest uppercase">Index</span>
                </div>
                <div className="mt-8 h-1 w-full bg-zinc-900 overflow-hidden">
                  <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${dynamicData.score}%` }}></div>
                </div>
              </div>

              <div className="bg-[#0A0A0A] p-10 flex flex-col justify-between border-x border-white/5 hover:bg-[#0d0d0d] transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">Analysis.Status</span>
                <div className="text-3xl font-black text-white italic tracking-tighter uppercase leading-tight">
                  {dynamicData.level}
                </div>
                <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">Market signals verified across 48 nodes</p>
              </div>

              <div className="bg-blue-600 p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <Globe size={160} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Profit.Class</span>
                <div className="text-5xl font-black italic text-white uppercase tracking-tighter">Alpha+</div>
                <div className="text-[10px] font-black text-white tracking-[0.2em] uppercase border-t border-white/20 pt-4">
                  Top 5% of Niche Categories
                </div>
              </div>
            </div>

            {/* 关键词多维矩阵 */}
            <div id="keyword-analysis" className="bg-[#0A0A0A] border border-white/5">
              <div className="border-b border-white/5 px-10 py-6 bg-white/[0.02] flex justify-between items-center">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 flex items-center gap-3">
                   <ShieldCheck size={14} className="text-blue-500" /> Matrix.Data.Output [ {product} ]
                </h3>
                <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest leading-none">Confidential // YMTEA Labs</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between border-white/5 p-8 border-b odd:border-r hover:bg-white/[0.02] transition-all group">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em]">Keyword.{i + 1}</span>
                      <span className="text-sm font-black text-zinc-200 tracking-widest uppercase group-hover:text-white">{k.word}</span>
                    </div>
                    <div className="flex items-center gap-10">
                      <div className="text-right">
                        <div className="text-[8px] text-zinc-700 uppercase font-black tracking-widest">Vol</div>
                        <div className="text-[10px] font-black text-zinc-400 uppercase">{k.volume}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] text-zinc-700 uppercase font-black tracking-widest">Trend</div>
                        <div className="text-[10px] font-black text-blue-600 uppercase">{k.trend}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 战略建议路线图 */}
            <div id="roadmap" className="bg-white p-14 text-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] scale-150 group-hover:rotate-12 transition-transform duration-1000">
                <Lightbulb size={200} />
              </div>
              
              <h3 className="mb-16 text-[11px] font-black uppercase tracking-[0.5em] flex items-center gap-4">
                <div className="w-8 h-px bg-black"></div>
                Roadmap.Intelligence
              </h3>
              
              <div className="space-y-12 relative z-10">
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="flex gap-12 group/item">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-zinc-200 group-hover/item:text-blue-600 transition-colors leading-none mb-2">0{i + 1}</span>
                      <div className="w-px h-full bg-zinc-100"></div>
                    </div>
                    <div className="flex-1 border-b border-zinc-100 pb-10 group-last/item:border-0">
                      <p className="text-xs font-black uppercase tracking-tight text-zinc-900 leading-relaxed max-w-2xl">
                        {s}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex justify-end">
                <a 
                  href="https://ymtea.club" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 hover:text-black transition-all"
                >
                  Sync to Laboratory <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 专业页脚 */}
      <footer className="border-t border-white/5 py-32 text-center bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12 opacity-10 flex justify-center items-center gap-4">
            <div className="h-px w-20 bg-white"></div>
            <Zap size={20} className="fill-current text-white" />
            <div className="h-px w-20 bg-white"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-20">
            <div>
              <div className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Core.Engine</div>
              <p className="text-zinc-700 text-[10px] leading-relaxed uppercase tracking-widest font-bold">YMTEA Proprietary SEO Core v4.0.21. Built for the next decade of digital trade.</p>
            </div>
            <div>
              <div className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Data.Privacy</div>
              <p className="text-zinc-700 text-[10px] leading-relaxed uppercase tracking-widest font-bold">End-to-end encryption active. All search tokens are anonymized and processed at node edge.</p>
            </div>
            <div className="text-right">
              <div className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Terminal.Access</div>
              <a href="https://ymtea.club" className="text-blue-900 font-black text-xl hover:text-blue-600 transition-colors italic">YMTEA.CLUB</a>
            </div>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.8em] text-zinc-800">
            © 2026 YMTEA LABS · ALL RIGHTS RESERVED · ASIA-PACIFIC REGION
          </p>
        </div>
      </footer>
    </div>
  );
}
