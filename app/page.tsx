"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, Lightbulb, ArrowUpRight, Loader2, Zap, TrendingUp, Activity } from 'lucide-react';

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
        level: randomScore > 88 ? 'PERFORMANCE' : 'GROWTH',
        keywords: [
          { word: `Best ${product} reviews 2026`, diff: 'EASY', trend: '+156%' },
          { word: `Organic ${product} wholesale`, diff: 'MED', trend: '+88%' },
          { word: `Global ${product} logistics`, diff: 'LOW', trend: '+62%' },
          { word: `${product} sustainable trade`, diff: 'EASY', trend: '+110%' },
        ],
        suggestions: [
          `在欧美市场强调 "${product}" 的环保属性与可追溯性，这是当前消费者的核心关注点。`,
          `针对 Google 搜索结果优化 "${product}" 的对比类文章（Top 10 list）。`,
          `该产品在视频平台的声量正处于爆发前期，建议布局开箱内容。`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-zinc-500 selection:bg-blue-500/30">
      {/* 极简导航 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 px-8 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <Zap size={14} className="text-blue-600 fill-current" />
            <span className="text-xs font-black tracking-widest text-white uppercase italic">YMTEA.LABS</span>
          </a>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em]">
            <button onClick={() => scrollToSection('market-index')} className="hover:text-blue-500 transition">Index</button>
            <button onClick={() => scrollToSection('keyword-analysis')} className="hover:text-blue-500 transition">Keywords</button>
            <button onClick={() => scrollToSection('roadmap')} className="text-white">Roadmap</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-24">
        {/* 搜索区域 */}
        <section className="mb-32 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[9px] font-bold tracking-widest uppercase text-blue-500">
            <Activity size={10} /> Neural Market Engine v2.0
          </div>
          <h1 className="mb-8 text-6xl font-black tracking-tighter text-white italic">
            Market <span className="text-blue-600">Intelligence</span>
          </h1>
          
          <div className="mx-auto flex max-w-xl border border-white/10 bg-zinc-900/50 p-1 focus-within:border-blue-600/50 transition-colors">
            <input 
              type="text" 
              placeholder="Search product..." 
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-700"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-blue-600 px-8 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all disabled:opacity-50"
            >
              {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'Scan'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-6 animate-in fade-in duration-700">
            
            {/* 核心看板 - 块状结构 */}
            <div id="market-index" className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 md:grid-cols-3">
              <div className="bg-[#0A0A0A] p-6">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Growth Index</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{dynamicData.score}</span>
                  <span className="text-[10px] text-zinc-700">PTS</span>
                </div>
                {/* 微缩化趋势图 */}
                <div className="mt-4 h-4 w-24">
                  <svg viewBox="0 0 100 20" className="h-full w-full opacity-50">
                    <path d="M0 18 Q 20 15, 40 10 T 80 5 T 100 2" fill="none" stroke="#2563eb" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div className="bg-[#0A0A0A] p-6 flex flex-col justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Potential</span>
                <div className="text-xl font-black text-white italic tracking-tight">{dynamicData.level}</div>
                <div className="mt-4 flex items-center gap-1 text-[9px] font-bold text-blue-500/60 uppercase">
                  <TrendingUp size={10} /> High demand detected
                </div>
              </div>

              <div className="bg-blue-600 p-6 flex flex-col justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Profit Tier</span>
                <div className="text-3xl font-black italic text-white">ALPHA</div>
                <div className="mt-4 text-[9px] font-bold uppercase text-white/80">Premium positioning</div>
              </div>
            </div>

            {/* 关键词网格 - 紧凑工业风 */}
            <div id="keyword-analysis" className="bg-[#0A0A0A] border border-white/5">
              <div className="border-b border-white/5 px-6 py-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <Search size={12} className="text-blue-500" /> Matrix Analysis
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between border-white/5 p-5 odd:border-r hover:bg-white/[0.02] transition-colors">
                    <span className="text-xs font-bold text-zinc-300 tracking-tight">{k.word}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[8px] font-black text-zinc-700 tracking-widest uppercase">{k.diff}</span>
                      <span className="text-[11px] font-black text-blue-500">{k.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 策略路线 - 白色强调块 */}
            <div id="roadmap" className="bg-white p-8 text-black shadow-2xl">
              <h3 className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <Lightbulb size={14} className="text-blue-600" /> Strategic Steps
              </h3>
              <div className="space-y-3 font-sans">
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="flex gap-6 border-b border-zinc-100 pb-4 last:border-0 hover:bg-zinc-50 transition-colors">
                    <span className="text-lg font-black text-zinc-200">0{i + 1}</span>
                    <p className="text-[11px] font-bold leading-relaxed text-zinc-800 uppercase tracking-tight">{s}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <a 
                  href="https://ymtea.club" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-blue-600"
                >
                  Access Terminal <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-white/5 py-24 text-center">
        <p className="text-[8px] font-bold uppercase tracking-[0.6em] text-zinc-800">
          © 2026 YMTEA LABS GLOBAL · <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors underline-offset-4 decoration-zinc-800">YMTEA.CLUB</a>
        </p>
      </footer>
    </div>
  );
}
