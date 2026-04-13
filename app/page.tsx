"use client";
import React, { useState, useRef } from 'react';
import { Search, BarChart3, FileText, Lightbulb, Globe, ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

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
      const randomScore = Math.floor(Math.random() * 15) + 82; 
      setDynamicData({
        score: randomScore,
        level: 'Excellent',
        keywords: [
          { word: `${product} premium grade`, diff: 'Low', vol: '12.5k' },
          { word: `Sustainable ${product} brands`, diff: 'Medium', vol: '8.2k' },
          { word: `Where to source ${product}`, diff: 'Low', vol: '15.1k' },
          { word: `${product} bulk supply Europe`, diff: 'Low', vol: '4.8k' },
        ],
        suggestions: [
          `Prioritize "Sustainability" in your USP for the EU market.`,
          `Optimize your landing page for "Experience & Authority" (E-E-A-T).`,
          `Launch a comparison campaign against established local brands.`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-100 selection:text-blue-700">
      {/* 顶部装饰条 */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <Zap size={22} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight leading-none uppercase">YMTEA <span className="text-blue-600 font-extrabold">Labs</span></span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2
