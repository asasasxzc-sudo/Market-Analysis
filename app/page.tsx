"use client";

import React, { useState, useRef } from 'react';
import { Search, Globe, Loader2, Zap, TrendingUp, ShieldCheck, Newspaper, ArrowRight, LineChart } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState({
    score: 0,
    trend: [] as number[],
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
        // 模拟线状图数据
        trend: [30, 45, 35, 60, 55, 80, 75, 90],
        keywords: [
          { name: `${product} premium`, vol: 'High', trend: '+142%' },
          { name: `Sustainable ${product}`, vol: 'Med', trend: '+96%' },
          { name: `Luxury ${product}`, vol: 'Low', trend: '+68%' }
        ],
        tips: [
          'Leverage sustainability stories for the EU market.',
          'Optimize SEO for premium long-tail keywords.',
          'Build brand authority via YMTEA Blog insights.'
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#A1A1AA] selection:bg-blue-500/30">
      {/* 顶部流光 */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-[#050505]/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="bg-blue-600 p-2 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:rotate-6 transition-transform">
              <Zap size={18} fill="white" className="text-white" />
            </div>
            <span className="text-sm font-black tracking-[0.2em] text-white uppercase">YMTEA <span className="text-blue-500">LABS</span></span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
            <a href="https://ymtea.club/blog" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Newspaper size={14} /> Intelligence Blog
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 italic">
            Market <span className="text-blue-600">Dynamics.</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 font-medium mb-10 leading-relaxed">
            输入您的产品，获取基于欧美市场的趋势指数。助力 <span className="text-gray-300">云茗荟</span> 全球贸易伙伴精准决策。
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto">
            <div className="flex p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl focus-within:border-blue-500/50 transition-all shadow-2xl">
              <input 
                className="flex-1 bg-transparent px-4 py-3 text-white outline-none font-medium placeholder:text-gray-700"
                placeholder="Product name..."
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
              />
              <button 
                onClick={runAnalysis}
                disabled={analyzing}
                className="bg-white text-black px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all disabled:bg-gray-800"
              >
                {analyzing ?
