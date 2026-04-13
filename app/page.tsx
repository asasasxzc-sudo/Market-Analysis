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
    trend: [30, 50, 40, 70, 55, 90, 75, 95],
    keywords: [
      { name: "Premium Supply", val: "+156%" },
      { name: "Global Wholesale", val: "+89%" }
    ]
  });

  const runAnalysis = () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setData(prev => ({ ...prev, score: 94 }));
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-400">
      {/* 导航栏 */}
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
        {/* 头部展示区 */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 italic">Market Dynamics</h1>
          <p className="max-w-md mx-auto text-zinc-500 text-sm mb-10">云茗荟 (YMTEA) 全球合作伙伴专业数据终端</p>

          <div className="max-w-xl mx-auto flex gap-2 p-2 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl">
            <input 
              className="flex-1 bg-transparent px-4 py-2 text-white outline-none"
              placeholder="输入产品名称..."
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
            />
            <button 
              onClick={runAnalysis}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-xs uppercase hover:bg-blue-500 transition-colors"
            >
              {analyzing ? <Loader2 className="animate-spin" size={16} /> : '分析'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-6">
            {/* 指数趋势 - 块状结构 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
                    <LineChart size={14} /> 趋势指数 (Trend Index)
                  </span>
                  <span className="text-2xl font-black text-white">{data.score}</span>
                </div>
                {/* 线状体现 (简易折线趋势) */}
                <div className="h-32 flex items-end gap-2 px-2">
                  {data.trend.map((v, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/10 to-blue-500/60 rounded-t hover:to-blue-400 transition-all" style={{ height: `${v}%` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center shadow-xl shadow-blue-900/20">
                <ShieldCheck className="mb-4" size={32} />
                <div className="text-3xl font-black italic text-white leading-none">STABLE</div>
                <p className="text-xs mt-3 font-bold text-blue-100">市场健康度极佳</p>
              </div>
            </div>

            {/* 资讯与策略 - 块状结构 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8">
                <h3 className="text-[10px] font-bold uppercase text-zinc-600 mb-6 tracking-widest">核心关键词</h3>
                <div className="space-y-4">
                  {data.keywords.map((k, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm font-bold text-zinc-300">{k.name}</span>
                      <span className="text-sm font-black text-blue-500">{k.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">快速策略</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">• 建议优先布局欧盟绿色贸易准入认证</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">• 针对北美市场优化“DTC”直达逻辑</p>
                </div>
                <a href="https://ymtea.club/blog" className="mt-8 flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                  <span className="text-[10px] font-bold text-white tracking-widest flex items-center gap-2">
                    <Newspaper size={14} className="text-blue-500" /> 进入资讯中心
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-12 text-center">
        <p className="text-[9px] font-bold tracking-[0.5em] text-zinc-800">YMTEA INTELLIGENCE TERMINAL · 2026</p>
      </footer>
    </div>
  );
}
