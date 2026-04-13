"use client";

import React, { useState } from 'react';
import { Search, Zap, TrendingUp, Globe, ShieldCheck, ArrowRight, Loader2, Target, BarChart, Database, Mail, Terminal, ChevronRight } from 'lucide-react';

export default function MarketTerminal() {
  const [query, setQuery] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const [result, setResult] = useState(false);

  // 模拟 AI 分析逻辑
  const handleAnalyze = async () => {
    if (!query) return;
    setIsBusy(true);
    setResult(false);
    await new Promise(r => setTimeout(r, 1800)); // 模拟深度计算耗时
    setIsBusy(false);
    setResult(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      {/* 1. 顶部导航 */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase italic">
              YMTEA<span className="text-blue-600">.AI</span>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nodes: Hong Kong / US-West</span>
            <button className="bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
              Get Pro Access
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        {/* 2. Hero 搜索区 */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Neural Market Engine Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.05em] mb-8 leading-[0.85]">
            Insight into <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Arbitrage</span>.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
            针对全球市场深度优化的 AI 分析终端。不限行业，实时捕捉 SEO 流量红利与竞争对手情报，为 <b>云茗荟 (Ymtea)</b> 用户量身定制。
          </p>

          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl blur opacity-15 group-focus-within:opacity-30 transition duration-500"></div>
            <div className="relative flex bg-white border border-slate-200 p-3 rounded-2xl shadow-2xl">
              <div className="pl-4 pr-2 text-slate-400 flex items-center"><Target size={22} /></div>
              <input 
                className="flex-1 bg-transparent py-4 outline-none text-slate-900 font-bold text-lg placeholder:text-slate-300"
                placeholder="输入产品或行业关键词 (如: E-bike, SaaS Tool...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={handleAnalyze}
                disabled={isBusy}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white px-10 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                {isBusy ? <Loader2 size={20} className="animate-spin" /> : 'ANALYZE'}
              </button>
            </div>
          </div>
        </section>

        {/* 3. 结果展示区 (动态) */}
        {result && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {/* 顶层看板 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Opportunity Score</span>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-7xl font-black text-slate-900 tracking-tighter italic">94</span>
                  <span className="text-blue-600 font-black italic">PT</span>
                </div>
                <div className="mt-8 flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-tighter">
                  <TrendingUp size={14} /> +12.4% Weekly Growth
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-8">Market Dynamics</span>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2"><span className="text-slate-400">Demand</span> <span className="text-slate-900">Extreme High</span></div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 w-[92%] rounded-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2"><span className="text-slate-400">Competition</span> <span className="text-slate-900">Moderate</span></div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-400 w-[45%] rounded-full"></div></div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white group">
                <div className="absolute top-0 right-0 p-8 opacity-20"><Terminal size={80} /></div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Engine Status</span>
                <div className="text-4xl font-black italic tracking-tighter mt-4 leading-tight">PREMIUM <br />MATRIX</div>
                <div className="mt-12 flex justify-between items-center text-[10px] font-black uppercase border-t border-white/10 pt-4">
                  <span className="text-blue-400">Edge Sync: Active</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>

            {/* SEO 详情表 */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
              <div className="px-10 py-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <BarChart size={16} className="text-blue-600" /> SEO Matrix Data Points
                </h3>
              </div>
              <div className="divide-y divide-slate-50">
                {[
                  { word: 'best high-margin dropshipping products', vol: '12.5K', diff: 'Easy' },
                  { word: 'ai marketing tools for smb 2026', vol: '8.2K', diff: 'Medium' },
                  { word: 'automated market analysis saas', vol: '4.1K', diff: 'Low' }
                ].map((item, i) => (
                  <div key={i} className="px-10 py-7 flex items-center justify-between hover:bg-slate-50/80 transition-colors group cursor-pointer">
                    <span className="text-lg font-bold text-slate-900 uppercase italic group-hover:text-blue-600 transition-colors">{item.word}</span>
                    <div className="flex gap-12">
                       <div className="text-right"><span className="text-[9px] font-black text-slate-300 uppercase block mb-1">Vol</span><span className="text-sm font-black italic">+{item.vol}</span></div>
                       <div className="text-right"><span className="text-[9px] font-black text-slate-300 uppercase block mb-1">KD</span><span className={`text-sm font-black italic ${item.diff === 'Easy' ? 'text-emerald-500' : 'text-orange-400'}`}>{item.diff}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 4. 页脚 */}
      <footer className="border-t border-slate-200 bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Zap size={22} className="text-blue-600 fill-current" />
              <span className="text-xl font-black tracking-tighter italic uppercase">YMTEA<span className="text-slate-400">.LABS</span></span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm italic">
              “捕捉信息差，赋能云茗荟。” —— 针对全球市场套利与搜索情报深度优化的神经网络终端。
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase text-slate-900 mb-8 tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li><a href="https://ymtea.club" className="hover:text-blue-600 transition-colors">Ymtea.Club</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Status</a></li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
             <ShieldCheck size={28} className="text-blue-600 mb-6" />
             <div>
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-1">Security Status</span>
               <span className="text-sm font-black text-slate-900 uppercase italic">Enterprise Encrypted</span>
             </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black text-slate-300 uppercase tracking-[0.8em]">
          <span>© 2026 YMTEA INTELLIGENCE TERMINAL</span>
          <div className="flex gap-8 tracking-widest">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
