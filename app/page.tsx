"use client";

import React, { useState } from 'react';
import { Zap, TrendingUp, Target, Loader2, BarChart, Database, ShieldCheck, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* 导航 */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-600 fill-current" size={20} />
            <span className="text-xl font-black tracking-tighter italic uppercase">YMTEA<span className="text-blue-600">.AI</span></span>
          </div>
          <button className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full">Pro Access</button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* 核心标题 - 确认这行代码存在 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Insight into <span className="text-blue-600">Arbitrage</span>.
          </h1>
          <p className="text-slate-500 font-medium text-lg">
            针对全球市场深度优化的 AI 分析终端。
          </p>
        </div>

        {/* 搜索交互 */}
        <div className="flex bg-white border border-slate-200 p-2 rounded-2xl shadow-xl mb-12">
          <input 
            className="flex-1 px-4 outline-none font-bold"
            placeholder="输入产品或行业关键词..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={handleAnalyze}
            disabled={isBusy}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all"
          >
            {isBusy ? <Loader2 className="animate-spin" size={20} /> : 'ANALYZE'}
          </button>
        </div>

        {/* 结果展示 */}
        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase mb-2">Market Score</div>
              <div className="text-6xl font-black">94%</div>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col justify-between">
              <Database className="text-blue-400" />
              <div className="text-2xl font-bold italic mt-4">ALPHA 4.0 ACTIVE</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
