"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, Globe, ArrowUpRight, Loader2, Zap, TrendingUp, ShieldCheck, Mail } from 'lucide-react';

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
        score: Math.floor(Math.random() * 12) + 85,
        keywords: [
          { name: `${product} premium supply`, difficulty: 'Easy', trend: '+124%' },
          { name: `Sustainable ${product} brands`, difficulty: 'Medium', trend: '+86%' },
          { name: `Wholesale ${product} Europe`, difficulty: 'Low', trend: '+52%' }
        ],
        tips: [
          'Target EU eco-conscious consumers with plastic-free packaging.',
          'Leverage TikTok Shop for rapid brand awareness in the UK market.',
          'Optimize SEO for "Direct-to-Consumer" long-tail keywords.'
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-xl">
              <Zap size={20} fill="white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase leading-tight">YMTEA <span className="text-blue-600">LABS</span></span>
              <span className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase">Global Intelligence</span>
            </div>
          </div>
          <div className="hidden space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500 md:flex">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-black">Index</button>
            <a href="https://ymtea.club" className="hover:text-black">Network</a>
            <button className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800 transition-all">Connect</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-blue-600">
            <TrendingUp size={12} /> 2026 Live Market Data
          </div>
          <h1 className="mb-8 text-6xl font-black tracking-tighter md:text-8xl lg:leading-[1.1]">
            Unlock <span className="italic underline decoration-blue-600 underline-offset-8">Global</span> Scale.
          </h1>
          <p className="mx-auto mb-12 max-w-xl text-lg font-medium text-gray-500">
            The next-generation intelligence platform for Ymtea trade partners. Analyze any product niche in seconds.
          </p>

          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 focus-within:ring-2 ring-blue-500 transition-all">
              <Search className="ml-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Product (e.g. Pu-erh Tea)" 
                className="flex-1 px-2 py-4 text-lg font-bold outline-none placeholder:text-gray-300"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
              />
              <button 
                onClick={runAnalysis}
                disabled={analyzing}
                className="flex h-14 items-center justify-center rounded-xl bg-black px-10 font-black text-white transition-all hover:bg-gray-800 disabled:bg-gray-300"
              >
                {analyzing ? <Loader2 className="animate-spin" size={20} /> : 'RUN AI'}
              </button>
            </div>
          </div>
        </div>

        {showResult && (
          <div ref={resultRef} className="animate-in fade-in slide-in-from-bottom-10 duration-1000 space-y-8">
            {/* Score Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { title: 'Opportunity Index', val: data.score, icon: <BarChart3 />, color: 'text-blue-600' },
                { title: 'Global Demand', val: 'Strong', icon: <TrendingUp />, color: 'text-emerald-600' },
                { title: 'Market Health', val: 'Stable', icon: <ShieldCheck />, color: 'text-indigo-600' }
              ].map((item, i) => (
                <div key={i} className="rounded-[2.5rem] bg-white p-10 border border-gray-100 shadow-sm transition-all hover:shadow-xl">
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{item.title}</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-5xl font-black">{item.val}</span>
                    {typeof item.val === 'number' && <span className="text-gray-300 font-bold">/100</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Keyword & Strategy Section */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3 rounded-[2.5rem] bg-white p-10 border border-gray-100 shadow-sm">
                <h3 className="mb-10 text-3xl font-black italic tracking-tighter">Keywords Pulse</h3>
                <div className="space-y-4">
                  {data.keywords.map((k, i) => (
                    <div key={i} className="flex items-center justify-between rounded-2xl bg-gray-50/50 p-6 border border-transparent hover:border-blue-100 hover:bg-white transition-all group">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-gray-800 group-hover:text-blue-600">{k.name}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Difficulty: {k.difficulty}</span>
                      </div>
                      <span className="text-xl font-black text-emerald-500">{k.trend}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-between rounded-[2.5rem] bg-black p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="mb-10 text-3xl font-black italic tracking-tighter">Growth Strategy</h3>
                  <div className="space-y-8">
                    {data.tips.map((tip, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-black">0{i+1}</div>
                        <p className="text-sm font-bold leading-relaxed text-gray-300">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-12 relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-5 text-xs font-black uppercase tracking-widest text-black hover:bg-gray-100 transition-all">
                  <Mail size={16} /> Export Intelligence
                </button>
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-100 bg-white py-16 text-center">
        <div className="mb-6 flex justify-center gap-3">
          <Globe size={20} className="text-gray-300" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          © 2026 YMTEA LABS GLOBAL · Intelligence for Exporters
        </p>
      </footer>
    </div>
  );
}
