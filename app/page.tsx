"use client";

import React, { useState } from 'react';
import { Zap, TrendingUp, Target, Loader2, BarChart, Database, ArrowRight, ShieldCheck } from 'lucide-react';

export default function MarketTerminal() {
  const [query, setQuery] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const [result, setResult] = useState(false);

  const handleAnalyze = async () => {
    if (!query) return;
    setIsBusy(true);
    setResult(false);
    await new Promise(r => setTimeout(r, 1500));
    setIsBusy(false);
    setResult(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter italic uppercase">
              YMTEA<span className="text-blue-600">.AI</span>
            </span>
          </div>
          <button className="bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-blue-600 transition-all">
            Get Pro
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Insight into <span className="text-blue-600">Arbitrage</span>.
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto mb-10 font-medium">
            针对全球市场深度优化的 AI 分析终端。
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="flex bg-white border border-slate-200 p-2 rounded-2xl shadow-lg focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <input 
                className="flex-1 bg-transparent px-4 py-3 outline-none font-medium"
                placeholder="输入产品关键词..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={handleAnalyze}
                disabled={isBusy}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-bold flex items-center gap-2"
              >
                {isBusy ? <Loader2 size={18} className="animate-spin" /> : 'ANALYZE'}
              </button>
            </div>
          </div>
        </section>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score</span>
              <div className="text-6xl font-black mt-2">92%</div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trend</span>
              <div className="text-blue-600 font-black mt-2 flex items-center gap-2">
                <TrendingUp /> HIGH
              </div>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
              <Database className="text-blue-400 mb-4" />
              <div className="text-2xl font-bold italic tracking-tighter">ALPHA 4.0</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
