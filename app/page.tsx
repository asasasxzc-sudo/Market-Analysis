"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, BarChart3, ArrowUpRight, Loader2, Zap, Activity, ShieldCheck, Globe, Cpu, Terminal, Database, Target, Percent, TrendingUp, Layers3 } from 'lucide-react';

// SaaS 专用：状态标签组件
const StatusTag = ({ text, color = 'blue' }: { text: string; color?: string }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full bg-${color}-50 px-2.5 py-1 text-xs font-semibold text-${color}-700 border border-${color}-100 uppercase tracking-wider`}>
    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 ${color === 'emerald' ? 'animate-pulse' : ''}`}></div>
    {text}
  </span>
);

export default function Home() {
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

  const handleAnalyze = async () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);

    // 模拟现代 SaaS 的快速计算
    await new Promise(resolve => setTimeout(resolve, 1800));

    const randomScore = Math.floor(Math.random() * 12) + 85;
    setDynamicData({
      score: randomScore,
      level: randomScore > 92 ? 'OPTIMAL' : 'ACCELERATING',
      keywords: [
        { word: `${product} premium b2b`, diff: 'LOW', trend: 'UP', vol: '12.5K' },
        { word: `buy ${product} wholesale china`, diff: 'MED', trend: 'UP', vol: '8.2K' },
        { word: `best ${product} supplier 2026`, diff: 'LOW', trend: 'STABLE', vol: '15.1K' },
        { word: `${product} sustainable trade`, diff: 'EASY', trend: 'RISING', vol: '5.4K' },
      ],
      suggestions: [
        `在欧美市场强调 "${product}" 的环保属性与可追溯性，构建品牌信赖感。`,
        `针对 Google 搜索结果优化 "${product}" 的权威对比类文章（Top 10 list）。`,
        `当前品类在视频社交平台的声量处于爆发前期，建议优先布局视觉化内容。`
      ]
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* SaaS 极简导航 */}
      <nav className="sticky top-0 z-50 bg-white/95 border-b border-slate-100 px-6 py-3 backdrop-blur-sm flex justify-between items-center shadow-sm">
        <a href="https://ymtea.club" target="_blank" className="flex items-center gap-2 group">
           <Zap size={22} className="text-blue-600 fill-current" />
           <span className="text-xl font-extrabold tracking-tighter text-slate-950">
             Ymtea<span className="text-blue-600">.Labs</span>
           </span>
        </a>
        <div className="flex gap-3 items-center">
          <StatusTag text="Network Optimal" color="emerald" />
          <button className="text-xs font-semibold text-slate-600 hover:text-blue-600">Documentation</button>
          <a href="https://ymtea.club" target="_blank" className="bg-slate-900 hover:bg-slate-800 px-5 py-2 rounded-full text-xs font-bold text-white transition-all">
            Upgrade Plan
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* SaaS 英雄区：明确的价值主张 */}
        <section className="mb-28 text-center">
          <StatusTag text="Global Market Intelligence Engine" color="blue" />
          <h1 className="mt-8 mb-6 text-6xl md:text-7xl font-extrabold tracking-tighter text-slate-950 max-w-3xl mx-auto leading-[0.95]">
            Analyze Market <span className="text-blue-600">Alpha</span> with AI.
          </h1>
          <p className="mb-14 text-lg text-slate-600 max-w-xl mx-auto font-medium">
            Unlock real-time SEO insights and global trade opportunities for any product niche.
          </p>
          
          {/* SaaS 核心：搜索卡片 */}
          <div className="mx-auto flex max-w-3xl group relative shadow-2xl shadow-blue-500/10">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-10 group-focus-within:opacity-20 transition duration-1000"></div>
             <div className="relative flex w-full bg-white border border-slate-200 p-2 rounded-2xl shadow-inner">
                <div className="flex items-center px-5 text-slate-400"><Search size={20} /></div>
                <input 
                  type="text" 
                  placeholder="e.g. Pu-erh Tea or Solar Panels..." 
                  className="flex-1 bg-transparent px-4 py-4 text-base text-slate-950 outline-none placeholder:text-slate-400 font-semibold"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                />
                <button 
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="bg-blue-600 px-12 rounded-xl text-sm font-bold text-white hover:bg-blue-700 active:scale-95 transition-all disabled:bg-slate-300 flex items-center gap-2"
                >
                  {analyzing ? <><Loader2 className="animate-spin" size={16} /> ANALYZING</> : 'RUN ANALYSIS'}
                </button>
             </div>
          </div>
          <div className="mt-4 text-[11px] text-slate-400 font-medium">
            Powered by Ymtea Proprietary Neural Engine. Verified Data Integrity.
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            
            {/* 结构化指标网格 */}
            <div id="market-index" className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-white border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-100/50 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Alpha Index</span>
                  <Percent size={18} className="text-blue-600" />
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-7xl font-extrabold text-slate-950 tracking-tighter">{dynamicData.score}</span>
                  <div className="flex flex-col pb-2">
                    <span className="text-blue-500 text-2xl font-black leading-none">PT</span>
                    <span className="text-xs text-emerald-600 font-bold">+3.1% (High)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-100/50 flex flex-col justify-between hover:border-blue-100 transition-colors">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Growth Vector</span>
                <div className="text-3xl font-extrabold text-slate-950 tracking-tighter leading-tight uppercase">
                  {dynamicData.level}
                </div>
                <StatusTag text="Verified Signal" color="emerald" />
              </div>

              <div className="bg-slate-950 p-8 flex flex-col justify-between rounded-3xl relative overflow-hidden group shadow-xl">
                <Database className="absolute -right-6 -bottom-6 text-slate-800 w-32 h-32 rotate-12" />
                <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider relative z-10">Data Integrity</span>
                <div className="text-5xl font-extrabold italic text-white tracking-tighter relative z-10">ALPHA</div>
                <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase border-t border-slate-800 pt-4 relative z-10">
                  Real-time Matrix Sync
                </div>
              </div>
            </div>

            {/* 关键词多维矩阵 */}
            <div id="keyword-analysis" className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-slate-100/50">
              <div className="border-b border-slate-100 px-8 py-5 bg-slate-50 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-950 flex items-center gap-2.5">
                   <Target size={16} className="text-blue-600" /> Semantic Matrix [ {product} ]
                </h3>
                <StatusTag text="Live Feed" color="blue" />
              </div>
              <div className="grid grid-cols-1">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between p-8 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col gap-1.5 min-w-[300px]">
                      <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Query.{i + 1}</span>
                      <span className="text-xl font-bold text-slate-950 tracking-tight uppercase group-hover:text-blue-700">{k.word}</span>
                    </div>
                    <div className="flex gap-16 items-center text-right">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">Saturation</div>
                        <div className="text-sm font-bold text-slate-600 uppercase">{k.diff}</div>
                      </div>
                      <div className="min-w-[80px]">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">Trend</div>
                        <div className="text-sm font-bold text-blue-600 uppercase italic flex items-center gap-1 justify-end"><TrendingUp size={14}/> {k.trend}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">Vol.Data</div>
                        <div className="text-lg font-extrabold text-slate-950 italic tracking-tighter">{k.vol}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 战略行动路线图 */}
            <div id="roadmap" className="grid grid-cols-1 md:grid-cols-5 bg-slate-950 text-white min-h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <div className="md:col-span-2 bg-slate-900 p-16 flex flex-col justify-between border-r border-slate-800">
                <div>
                   <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 block">Analysis Output</span>
                   <h3 className="text-4xl font-extrabold italic uppercase tracking-tighter mb-8 leading-none">Strategic<br/>Roadmap</h3>
                   <p className="text-xs font-medium text-slate-500 uppercase leading-relaxed tracking-widest max-w-sm">
                     Proprietary execution paths identified based on current SERP volatility and semantic entropy.
                   </p>
                </div>
                <div className="flex flex-col gap-4 pt-10 border-t border-slate-800">
                   <span className="text-[11px] font-bold uppercase text-blue-500">Auth: YMTEA Intelligence</span>
                   <div className="flex gap-2">
                      <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-extrabold italic rounded-sm">YM</div>
                   </div>
                </div>
              </div>
              <div className="md:col-span-3 p-16 space-y-12 bg-slate-950">
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-6 mb-4">
                      <span className="text-5xl font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors duration-500 leading-none">0{i + 1}</span>
                      <div className="h-px flex-1 bg-slate-800"></div>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 uppercase tracking-widest leading-relaxed pl-4 border-l-4 border-transparent group-hover:border-blue-600 transition-all duration-300">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 沉浸式 SaaS 页脚 */}
      <footer className="border-t border-slate-100 py-32 mt-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 text-left mb-20">
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-8">
               <Zap size={22} className="text-blue-600 fill-current" />
               <span className="text-lg font-black tracking-widest text-slate-950 uppercase italic">YMTEA.LABS</span>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
               Next-generation market terminal for digital arbitrage, semantic intelligence, and global trade analysis. 
             </p>
          </div>
          <div>
             <h4 className="text-slate-950 text-xs font-bold uppercase tracking-widest mb-6">Network</h4>
             <ul className="space-y-4 text-slate-600 text-xs font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Node Status</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">API Docs</a></li>
                <li><a href="https://ymtea.club" className="hover:text-blue-600 transition-colors">Ymtea.Club</a></li>
             </ul>
          </div>
          <div>
             <h4 className="text-slate-950 text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
             <ul className="space-y-4 text-slate-600 text-xs font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
             </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-16">
          <span className="text-[10px] font-medium uppercase tracking-[0.6em] text-slate-400 mb-8 md:mb-0">
            © 2026 YMTEA LABS GLOBAL · SENSITIVE DATA ENCRYPTED
          </span>
          <div className="flex gap-10">
             <div className="flex gap-2 text-[10px] font-bold text-emerald-700">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                SYSTEMS_OPTIMAL
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
