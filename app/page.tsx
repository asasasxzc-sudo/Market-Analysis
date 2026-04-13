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
      const score = Math.floor(Math.random() * 15) + 82; 
      setDynamicData({
        score: score,
        level: 'Excellent',
        keywords: [
          { word: `${product} premium`, diff: 'Low', vol: '12.5k' },
          { word: `Organic ${product} supply`, diff: 'Med', vol: '8.2k' },
          { word: `Wholesale ${product} EU`, diff: 'Low', vol: '4.8k' }
        ],
        suggestions: [
          `Target sustainability-focused buyers in the EU market.`,
          `Enhance your brand authority via expert content.`,
          `Optimize for mobile-first user experience.`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="h-1 w-full bg-blue-600"></div>
      
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Zap size={20} />
            </div>
            <span className="font-black text-xl tracking-tight">YMTEA LABS</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-bold text-slate-500">
            <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>Home</button>
            <a href="https://ymtea.club">Main Site</a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Global Trade <span className="text-blue-600">Intelligence.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 font-medium">
            Enter your product to unlock AI-driven market analysis for international expansion.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex p-1 bg-white border border-slate-200 rounded-2xl shadow-xl focus-within:ring-2 ring-blue-500 transition-all">
              <input 
                type="text" 
                placeholder="Search Product (e.g. Green Tea)" 
                className="flex-1 px-4 py-3 outline-none font-medium"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <button 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 disabled:bg-slate-300"
              >
                {analyzing ? <Loader2 className="animate-spin" size={18} /> : 'Analyze'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Market Index', val: dynamicData.score, icon: <BarChart3 />, color: 'text-blue-600' },
                { label: 'SEO Level', val: dynamicData.level, icon: <TrendingUp />, color: 'text-emerald-600' },
                { label: 'Potential', val: 'High', icon: <ShieldCheck />, color: 'text-indigo-600' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item
