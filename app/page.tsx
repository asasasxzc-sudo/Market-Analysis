"use client";

import React, { useState, useRef } from 'react';
import { Search, Zap, TrendingUp, ShieldCheck, Newspaper, ArrowRight, LineChart, Loader2 } from 'lucide-react';

export default function Page() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState({
    score: 0,
    trend: [20, 45, 30, 80, 50, 95, 70, 88],
    keywords: [] as any[],
    tips: [] as string[]
  });

  const runAnalysis = () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setData({
        score: 94,
        trend: [25, 50, 35, 85, 60, 100, 80, 92],
        keywords: [
          { name: "Premium Supply", val: "+156%" },
          { name: "Global Wholesale", val: "+89%" },
          { name: "Eco Packaging", val: "+42%" }
        ],
        tips: [
          "Target high-end EU distributors via YMTEA network.",
          "Optimize SEO for sustainable luxury keywords.",
          "Check ymtea.club/blog for Q2 market forecasts."
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-400 font-sans">
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap size={16} className="text-white" fill="currentColor" />
            </div>
            <span className="text-sm font-black tracking-widest text-white uppercase">YMTEA LABS</span>
          </div>
          <a href="https://ymtea.club/blog" className="text-xs font-bold text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Newspaper size={14} /> BLOG
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Market Pulse</h1>
          <p className="max-w-md mx-auto text-zinc-500 text-sm mb-10">Professional intelligence terminal for Cloud-Tea (云茗荟) partners.</p>

          <div className="max-w-xl mx-auto flex gap-2 p-2 bg-zinc-900/50 border border-white/10 rounded-2xl">
            <input 
              className="flex-1 bg-transparent px-4 py-2 text-white outline-none placeholder:text-zinc-700"
              placeholder="Enter niche..."
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
            />
            <button 
              onClick={runAnalysis}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-xs uppercase hover:bg-blue-500 transition-colors"
            >
              {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'Analyze'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-zinc-900/30 border border-white/5 rounded-3xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
                    <LineChart size={14} /> Trend Index
                  </span>
                  <span className="text-2xl font-black text-white">{data.score}</span>
                </div>
                <div className="h-32 flex items-end gap-1.5 px-2">
                  {data.trend.map((v, i) => (
                    <div key={i} className="flex-1 bg-blue-600/20 rounded-t hover:bg-blue-500 transition-colors" style={{ height: `${v}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center shadow-lg shadow-blue-900/20">
                <ShieldCheck className="mb-4" size={32} />
                <div className="text-3xl font-black">STABLE</div>
                <p className="text-xs mt-2 font-bold text-blue-100">Market health score is optimal.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8">
                <h3 className="text-[10px] font-bold uppercase text-zinc-600 mb-6 tracking-widest">Keywords Alpha</h3>
                <div className="space-y-4">
                  {data.keywords.map((k, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm font-bold text-zinc-300">{k.name}</span>
                      <span className="text-sm font-black text-blue-500">{k.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[10px] font-bold uppercase text-zinc-600 mb-6 tracking-widest">Quick Strategy</h3>
                  {data.tips.map((t, i) => (
                    <p key={i} className="text-xs text-zinc-500 mb-3 leading-relaxed">• {t}</p>
                  ))}
                </div>
                <a href="https://ymtea.club/blog" className="mt-6 flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                  <span className="text-[10px] font-bold text-white tracking-widest">EXPLORE BLOG</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-12 text-center">
        <p className="text-[9px] font-bold tracking-[0.5em] text-zinc-800">YMTEA INTELLIGENCE TERMINAL 2026</p>
      </footer>
    </div>
  );
}
