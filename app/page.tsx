"use client";

import React, { useState } from 'react';
import { Search, Zap, TrendingUp, Globe, ShieldCheck, ArrowRight, Loader2, Target, BarChart, Database } from 'lucide-react';

export default function MarketTerminal() {
  const [query, setQuery] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const [result, setResult] = useState(false);

  const handleAnalyze = async () => {
    if (!query) return;
    setIsBusy(true);
    setResult(false);
    await new Promise(r => setTimeout(r, 1500)); // 模拟计算
    setIsBusy(false);
    setResult(true);
  };

  return (
    <div className="min-h-screen bg-red-500">
      {/* 1. 导航栏 - 磨砂玻璃质感 */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase italic">YMTEA<span className="text-blue-600">.AI</span></span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nodes: North America</span>
            <button className="bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-blue-600 transition-all">Get Pro</button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        {/* 2. Hero 区域 - 欧美 SaaS 典型布局 */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Global Market Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.05em] mb-8 leading-[0.9]">
            Insight into <br /> <span className="text-blue-600">Arbitrage</span>.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
            针对欧美市场深度优化的 AI 分析终端。不限行业，实时捕捉 SEO 流量红利与竞争对手情报。
          </p>

          {/* 搜索框 - SaaS 核心输入组件 */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-focus-within:opacity-25 transition"></div>
            <div className="relative flex bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl">
              <div className="pl-4 pr-2 text-slate-400 flex items-center"><Target size={20} /></div>
              <input 
                className="flex-1 bg-transparent py-4 outline-none text-slate-900 font-bold placeholder:text-slate-300"
                placeholder="输入产品或行业关键词 (如: E-bike, SaaS Tool...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={handleAnalyze}
                disabled={isBusy}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                {isBusy ? <Loader2 size={18} className="animate-spin" /> : 'ANALYZE'}
              </button>
            </div>
          </div>
        </section>

        {result && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* 3. 数据层级 - 卡片式仪表盘 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Opportunity Score</span>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-7xl font-black text-slate-900 tracking-tighter">92</span>
                  <span className="text-blue-600 font-bold italic">PT</span>
                </div>
                <div className="mt-6 flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <TrendingUp size={14} /> +12.4% GROWTH SPEED
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-6">Market Saturation</span>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase"><span className="text-slate-400">Demand</span> <span className="text-slate-900">High</span></div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 w-[85%]"></div></div>
                  <div className="flex justify-between text-xs font-bold uppercase"><span className="text-slate-400">Competition</span> <span className="text-slate-900">Medium</span></div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-400 w-[42%]"></div></div>
                </div>
              </div>

              <div className="bg-slate-950 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white group cursor-pointer transition-transform hover:scale-[1.02]">
                <Database size={150} className="absolute -right-8 -bottom-8 text-white/5 rotate-12" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Data Integrity</span>
                <div className="text-5xl font-black italic tracking-tighter mt-4">ALPHA 4.0</div>
                <div className="mt-12 flex justify-between items-center text-[10px] font-bold uppercase border-t border-white/10 pt-4">
                  <span>Edge Sync: Active</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* 4. 关键 SEO 词库 - 简洁列表 */}
            <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
              <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2"><BarChart size={16} className="text-blue-600" /> SEO Matrix Insights</h3>
                <span className="text-[9px] font-bold text-slate-400">2026 TREND PREVIEW</span>
              </div>
              <div className="divide-y divide-slate-100">
                {['best sustainable e-bike brand', 'affordable solar panels usa', 'remote work desk reviews'].map((word, i) => (
                  <div key={i} className="px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                    <span className="text-lg font-bold text-slate-900 uppercase italic group-hover:text-blue-600">{word}</span>
                    <div className="flex gap-8">
                       <div className="text-right leading-none"><span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Vol</span><span className="text-sm font-black italic">14.2K</span></div>
                       <div className="text-right leading-none"><span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Diff</span><span className="text-sm font-black text-emerald-500 italic">Easy</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 5. 专业 SaaS 页脚 */}
      <footer className="border-t border-slate-200 bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={22} className="text-blue-600 fill-current" />
              <span className="text-lg font-black tracking-tighter italic uppercase">YMTEA.LABS</span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">针对全球市场套利与搜索情报深度优化的神经网络终端。数据每 15 分钟实时同步。</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-slate-900 mb-6">Network</h4>
            <ul className="space-y-3 text-xs font-bold text-slate-400 uppercase">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Global Nodes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Latency Status</a></li>
              <li><a href="https://ymtea.club" className="hover:text-blue-600 transition-colors">Ymtea.Club</a></li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
             <ShieldCheck size={24} className="text-slate-200 mb-4" />
             <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">System Security</span>
             <span className="text-xs font-bold text-slate-900 uppercase">AES-256 Encrypted</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 border-t border-slate-100 pt-10 flex justify-between items-center text-[9px] font-black text-slate-300 uppercase tracking-[1em]">
          <span>© 2026 Ymtea Intelligence Terminal</span>
        </div>
      </footer>
    </div>
  );
}
