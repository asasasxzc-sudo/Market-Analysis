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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* 1. 导航栏 */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-600 fill-current" size={20} />
            <span className="text-xl font-black tracking-tighter italic uppercase">
              YMTEA<span className="text-blue-600">.AI</span>
            </span>
          </div>
          <button className="bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
            Pro Access
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* 2. 核心标题区域 - 确认这部分在你的编辑器里可见 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Cloud Terminal Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.1]">
            Insight into <span className="text-blue-600">Arbitrage</span>.
          </h1>
          
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            针对全球市场深度优化的 AI 分析终端。捕捉 <b>云茗荟 (Ymtea)</b> 专属情报。
          </p>
        </div>

        {/* 3. 搜索交互 */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex bg-white border border-slate-200 p-2 rounded-2xl shadow-2xl focus-within:border-blue-400 transition-all">
            <input 
              className="flex-1 px-4 outline-none font-bold text-slate-700 placeholder:text-slate-300"
              placeholder="输入产品或行业关键词..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button 
              onClick={handleAnalyze}
              disabled={isBusy}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 disabled:bg-slate-300 transition-all shadow-lg shadow-blue-200"
            >
              {isBusy ? <Loader2 className="animate-spin" size={20} /> : 'ANALYZE'}
            </button>
          </div>
        </div>

        {/* 4. 结果展示 */}
        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Opportunity Score</div>
              <div className="text-7xl font-black tracking-tighter italic">94<span className="text-blue-600 text-3xl">%</span></div>
              <div className="mt-6 flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase">
                <TrendingUp size={14} /> High Growth Potential
              </div>
            </div>
            
            <div className="bg-slate-950 text-white p-8 rounded-[2rem] shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <Database className="text-white/10 absolute -right-4 -bottom-4" size={120} />
              <div className="relative z-10">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Neural Engine</div>
                <div className="text-3xl font-black italic leading-tight">ALPHA 4.0<br/>MATRIX ACTIVE</div>
              </div>
              <div className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mt-8 flex items-center gap-2">
                Secure Sync <ChevronRight size={10} />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 5. 页脚 */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-100 mt-20 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
          © 2026 YMTEA INTELLIGENCE TERMINAL
        </p>
      </footer>
    </div>
  );
}
