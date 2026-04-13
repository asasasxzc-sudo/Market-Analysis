"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, Lightbulb, ArrowUpRight, Loader2, Zap, Activity, ShieldCheck } from 'lucide-react';

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
          { word: `Best ${product} reviews 2026`, diff: 'EASY', trend: 'STABLE' },
          { word: `Organic ${product} wholesale`, diff: 'MED', trend: 'UPWARD' },
          { word: `Global ${product} logistics`, diff: 'LOW', trend: 'ACTIVE' },
          { word: `${product} sustainable trade`, diff: 'EASY', trend: 'RISING' },
        ],
        suggestions: [
          `在欧美市场强调 "${product}" 的环保属性与可追溯性，这是当前消费者的核心关注点。`,
          `针对 Google 搜索结果优化 "${product}" 的对比类文章（Top 10 list）。`,
          `该产品在视频平台的声量正处于爆发前期，建议布局开箱内容。`
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
      {/* 极简导航 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/90 px-8 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <Zap size={14} className="text-blue-600 fill-current" />
            <span className="text-xs font-black tracking-widest text-white uppercase italic">YMTEA.LABS</span>
          </a>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em]">
            <button onClick={() => scrollToSection('market-index')} className="hover:text-blue-500 transition">Metrics</button>
            <button onClick={() => scrollToSection('keyword-analysis')} className="hover:text-blue-500 transition">Keywords</button>
            <button onClick={() => scrollToSection('roadmap')} className="text-white">Roadmap</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-24">
        {/* 搜索区域 */}
        <section className="mb-32 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[9px] font-bold tracking-widest uppercase text-blue-500">
            <Activity size={10} /> Market Analyzer Engine v2.1
          </div>
          <h1 className="mb-8 text-6xl font-black tracking-tighter text-white italic uppercase">
            Market <span className="text-blue-600">Terminal</span>
          </h1>
          
          <div className="mx-auto flex max-w-xl border border-white/10 bg-zinc-900/40 p-1 focus-within:border-blue-600/50 transition-colors">
            <input 
              type="text" 
              placeholder="ENTER PRODUCT CATEGORY..." 
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-800 uppercase"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-blue-600 px-8 text-[10px] font-black uppercase tracking-widest text-white hover:bg-blue-500 transition-all disabled:opacity-50"
            >
              {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'Process'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
            
            {/* 核心指标矩阵 */}
            <div id="market-index" className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 md:grid-cols-3">
              <div className="bg-[#0A0A0A] p-8 border-b md:border-b-0 border-white/5">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600">Score.Index</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">{dynamicData.score}</span>
                  <span className="text-[10px] text-blue-600 font-bold">/100</span>
                </div>
                <div className="mt-6 inline-block border border-blue-500/20 px-2 py-0.5 text-[8px] font-bold text-blue-500 uppercase tracking-widest">
                  Signal: Positive
                </div>
              </div>

              <div className="bg-[#0A0A0A] p-8 flex flex-col justify-between
