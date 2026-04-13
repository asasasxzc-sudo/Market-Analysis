"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, Globe, ArrowUpRight, Loader2, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

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
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    setTimeout(() => {
      setDynamicData({
        score: Math.floor(Math.random() * 15) + 82,
        level: 'Excellent',
        keywords: [
          { word: `${product} premium`, vol: '12.5k' },
          { word: `Organic ${product}`, vol: '8.2k' },
          { word: `Wholesale ${product}`, vol: '4.8k' }
        ],
        suggestions: [
          `Focus on EU sustainability standards.`,
          `Optimize content for brand authority.`,
          `Mobile-first UX optimization.`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-600" size={24} />
            <span className="font-black text-xl tracking-tight">YMTEA LABS</span>
          </div>
          <div className="flex gap-4 text-sm font-bold text-slate-500">
            <a href="https://ymtea.club">Main Site</a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 tracking-tighter italic">Global Intelligence.</h1>
          <div className="max-w-2xl mx-auto flex p-1 bg-white border border-slate-200 rounded-2xl shadow-xl">
            <input 
              className="flex-1 px-4 py-3 outline-none font-medium"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Enter Product..."
            />
            <button 
              onClick={handleAnalyze}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2"
            >
              {analyzing ? <Loader2 className="animate-spin" size={18} /> : 'Analyze'}
            </button>
          </div>
        </header>

        {showResult && (
          <div ref={resultRef} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <BarChart3 className="text-blue-600 mb-4" />
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Market Index</div>
                <div className="text-4xl font-black">{dynamicData.score}</div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <TrendingUp className="text-emerald-600 mb-4" />
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">SEO Level</div>
                <div className="text-4xl font-black">{dynamicData.level}</div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <ShieldCheck className="text-indigo-600 mb-4" />
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Potential</div>
                <div className="text-4xl font-black">High</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-black mb-6">Keywords</h3>
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex justify-between p-4 bg-slate-50 rounded-xl mb-2">
                    <span className="font-bold">{k.word}</span>
                    <span className="text-blue-600 font-bold">{k.vol}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-xl font-black mb-6">Strategy</h3>
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="flex gap-4 mb-4">
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] shrink-0">{i+1}</div>
                    <p className="text-sm text-slate-300">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
