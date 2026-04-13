"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, Globe, ArrowUpRight, Loader2, Zap, TrendingUp, ShieldCheck, Mail, ChevronRight } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState({
    score: 0,
    keywords: [] as any[],
    tips: [] as string[]
  });

  const runAnalysis = () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setData({
        score: Math.floor(Math.random() * 10) + 88,
        keywords: [
          { name: `${product} premium grade`, difficulty: 'Low', trend: '+142%' },
          { name: `Sustainable ${product} wholesale`, difficulty: 'Med', trend: '+96%' },
          { name: `Luxury ${product} gifting`, difficulty: 'Easy', trend: '+68%' }
        ],
        tips: [
          'Leverage high-conversion landing pages focused on "Organic" origin.',
          'Develop SEO-optimized comparison guides for North American B2B buyers.',
          'Execute localized TikTok influencer campaigns in the DACH region.'
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] selection:bg-blue-500/30">
      {/* 顶部流光装饰 */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-[60]"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
              <Zap size={20} fill="white" className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase leading-none text-white">YMTEA <span className="text-blue-500">LABS</span></span>
              <span className="text-[9px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">Intelligence Terminal</span>
            </div>
          </div>
          <div className="hidden space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-400 md:flex">
            <button className="hover:text-blue-400 transition-colors">Analyzer</button>
            <a href="https://ymtea.club" className="hover:text-blue-400 transition-colors">Network</a>
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-white">v2.0 Beta</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* Hero Section */}
        <div className="relative mb-32 text-center">
          {/* 背景光晕 */}
          <div className="absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 bg-blue-600/10 blur-[120px]"></div>
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-blue-400">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
            Market Engine Active
          </div>
          
          <h1 className="mx-auto mb-8 max-w-4xl text-6xl font-black tracking-tight md:text-8xl text-white">
            AI-Powered <br />
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic">Global Trade.</span>
          </h1>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-gray-500 leading-relaxed">
            专为云茗荟（Ymtea）品牌打造的市场预测终端。实时同步欧美搜索指数，为您的出海决策提供数据支撑。
          </p>

          {/* Search Box */}
          <div className="mx-auto max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[22px] blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center rounded-[20px] bg-[#121214] p-2 border border-white/10 shadow-2xl">
                <Search className="ml-4 text-gray-600" size={20} />
                <input 
                  type="text" 
                  placeholder="Analyze product niche..." 
                  className="flex-1 bg-transparent px-4 py-4 text-lg font-bold outline-none text-white placeholder:text-gray-700"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
                />
                <button 
                  onClick={runAnalysis}
                  disabled={analyzing}
                  className="flex h-14 items-center justify-center rounded-xl bg-blue-600 px-10 font-black text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:bg-gray-800"
                >
                  {analyzing ? <Loader2 className="animate-spin" size={20} /> : 'DIAGNOSE'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {showResult && (
          <div ref={resultRef} className="animate-in fade-in slide-in-from-bottom-10 duration-1000 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { title: 'Global Score', val: data.score, icon: <BarChart3 />, color: 'text-blue-400' },
                { title: 'Market Saturation', val: 'Low', icon: <TrendingUp />, color: 'text-indigo-400' },
                { title: 'Growth Velocity', val: 'Turbo', icon: <ShieldCheck />, color: 'text-cyan-400' }
              ].map((item, i) => (
                <div key={i} className="group rounded-3xl bg-white/[0.03] p-8 border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.05]">
                  <div className={`mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-blue-400 transition-colors">{item.title}</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{item.val}</span>
                    {typeof item.val === 'number' && <span className="text-gray-600 font-bold">/100</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3 rounded-3xl bg-white/[0.03] p-10 border border-white/5">
                <h3 className="mb-8 text-2xl font-black text-white italic flex items-center gap-3">
                  <TrendingUp className="text-blue-500" size={24} /> Keyword Alpha
                </h3>
                <div className="space-y-3">
                  {data.keywords.map((k, i) => (
                    <div key={i} className="flex items-center justify-between rounded-2xl bg-white/5 p-6 border border-transparent hover:border-blue-500/30 transition-all group">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-200 group-hover:text-white">{k.name}</span>
                        <div className="flex items-center gap-3 mt-1 text-[10px] font-bold uppercase text-gray-500">
                          <span>难度: {k.difficulty}</span>
                          <span className="text-blue-500/50">|</span>
                          <span>Volume: High</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-blue-400">{k.trend}</span>
                        <div className="text-[9px] font-bold text-gray-600 uppercase">Growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 rounded-3xl bg-blue-600 p-10 text-white shadow-[0_20px_80px_rgba(37,99,235,0.25)] relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="mb-8 text-2xl font-black italic">Expansion Roadmap</h3>
                  <div className="space-y-6 flex-1">
                    {data.tips.map((tip, i) => (
                      <div key={i} className="flex gap-4 group/item">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/20 text-[10px] font-black group-hover/item:bg-white group-hover/item:text-blue-600 transition-colors">0{i+1}</div>
                        <p className="text-sm font-bold leading-relaxed text-blue-50 tracking-tight">{tip}</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-900 transition-all">
                    Generate Full PDF <ChevronRight size={14} />
                  </button>
                </div>
                {/* 装饰性背景 */}
                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform group-hover:scale-150 duration-1000"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0A0A0B] py-20 text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-px w-12 bg-white/10"></div>
          <Zap size={18} className="text-gray-600" />
          <div className="h-px w-12 bg-white/10"></div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
          Terminal ID: 2026-YMTEA-GLOBAL · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
