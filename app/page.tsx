"use client";

import React, { useState, useRef } from 'react';
import { 
  Search, BarChart3, ArrowUpRight, Loader2, Zap, 
  ShieldCheck, Globe, Database, Target, TrendingUp, 
  Layers, ChevronRight, Activity, Cpu, Sparkles, Languages
} from 'lucide-react';

// SaaS 专用：高质感状态标签
const StatusBadge = ({ children, variant = 'blue' }: { children: React.ReactNode, variant?: 'blue' | 'emerald' | 'violet' }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-[0.15em] inline-flex items-center gap-2 ${styles[variant]}`}>
      {variant === 'emerald' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
      {children}
    </span>
  );
};

export default function MarketSaaS() {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const [marketData, setMarketData] = useState({
    opportunityScore: 0,
    demandLevel: '',
    seoKeywords: [] as any[],
    marketInsights: [] as string[]
  });

  const runAnalysis = async () => {
    if (!query.trim()) return;
    setIsAnalyzing(true);
    setHasResult(false);

    // 模拟云端神经网络运算
    await new Promise(resolve => setTimeout(resolve, 2200));

    const score = Math.floor(Math.random() * 20) + 78;
    setMarketData({
      opportunityScore: score,
      demandLevel: score > 88 ? 'High Penetration' : 'Growth Potential',
      seoKeywords: [
        { term: `Best ${query} for remote work 2026`, difficulty: 'Easy', volume: '18.4K', cpc: '$1.25' },
        { term: `Sustainable ${query} brands USA`, difficulty: 'Medium', volume: '9.2K', cpc: '$2.80' },
        { term: `Affordable ${query} with global shipping`, difficulty: 'Easy', volume: '14.1K', cpc: '$0.95' },
        { term: `High-end ${query} review reddit`, difficulty: 'Low', volume: '22.8K', cpc: '$0.45' },
      ],
      marketInsights: [
        `针对欧美市场，建议突出产品的“可持续性(Sustainability)”和“透明供应链”，这是当前消费者的核心决策点。`,
        `搜索趋势显示，TikTok Shop 正在成为该类目在北美市场的新增量场，建议前置布局短视频素材。`,
        `SEO 策略：建议针对 "Problem-Solution" 型长尾词建立专题页，以降低 Google 广告的获客成本。`
      ]
    });

    setIsAnalyzing(false);
    setHasResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* 极简 SaaS 导航 */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-slate-950 p-1.5 rounded-lg transform group-hover:rotate-12 transition-transform">
            <Sparkles size={18} className="text-white fill-current" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-950 uppercase italic">
            YMTEA<span className="text-blue-600">.INTEL</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <StatusBadge variant="emerald">Node: North America - Active</StatusBadge>
          <a href="https://ymtea.club" className="hidden md:block text-xs font-bold text-slate-500 hover:text-slate-950 transition-colors uppercase tracking-widest">Pricing</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-blue-200 transition-all active:scale-95">
            Upgrade to Pro
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-24">
        
        {/* Header Section */}
        <section className="text-center mb-32">
          <StatusBadge variant="blue">Global Market Terminal</StatusBadge>
          <h1 className="mt-10 mb-8 text-7xl md:text-8xl font-black tracking-[-0.05em] text-slate-950 leading-[0.85]">
            Intelligence for the <br /> 
            <span className="text-blue-600 italic">Global</span> Arbitrage.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            一键分析欧美市场需求。突破行业局限，通过实时数据洞察流量红利与 SEO 战略机遇。
          </p>

          {/* 核心搜索卡片 */}
          <div className="mt-16 max-w-3xl mx-auto relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[2rem] blur-xl opacity-10 group-focus-within:opacity-20 transition duration-1000"></div>
            <div className="relative flex items-center bg-slate-50 border border-slate-200 p-3 rounded-[1.5rem] shadow-2xl shadow-slate-200/50">
              <div className="pl-6 text-slate-400"><Languages size={22} /></div>
              <input 
                type="text" 
                placeholder="输入任何产品或行业 (如: E-bike, Skincare...)" 
                className="flex-1 bg-transparent px-6 py-4 text-lg text-slate-900 outline-none placeholder:text-slate-300 font-bold uppercase tracking-tight"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
              />
              <button 
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="bg-slate-950 hover:bg-blue-600 text-white px-12 py-4 rounded-[1.1rem] text-sm font-black transition-all flex items-center gap-3 disabled:bg-slate-300 shadow-xl"
              >
                {isAnalyzing ? <Loader2 className="animate-spin" size={18} /> : 'ANALYZE'}
              </button>
            </div>
          </div>
        </section>

        {hasResult && (
          <div ref={resultRef} className="space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            
            {/* 第一层：核心指标 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Opportunity Index</span>
                  <TrendingUp size={20} className="text-blue-600" />
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-9xl font-black text-slate-950 tracking-tighter leading-none">{marketData.opportunityScore}</span>
                  <span className="text-blue-600 text-3xl font-black mb-2 italic">PT</span>
                </div>
                <div className="mt-10 flex gap-1.5">
                   {[...Array(12)].map((_, i) => (
                     <div key={i} className={`h-2 flex-1 rounded-full ${i < marketData.opportunityScore/8 ? 'bg-blue-600' : 'bg-slate-100'}`} />
                   ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] flex flex-col justify-between">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Demand Velocity</span>
                <div className="text-4xl font-black text-slate-950 uppercase italic leading-tight tracking-tighter">
                  {marketData.demandLevel}
                </div>
                <StatusBadge variant="violet">Market_Validated</StatusBadge>
              </div>

              <div className="bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-200 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform duration-700">
                  <Database size={180} />
                </div>
                <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em] relative z-10">Data Accuracy</span>
                <div className="text-6xl font-black italic text-white tracking-tighter relative z-10">99.2%</div>
                <div className="pt-6 border-t border-white/20 text-[10px] font-bold text-white/80 uppercase tracking-widest relative z-10">
                  Real-time Edge Sync
                </div>
              </div>
            </div>

            {/* 第二层：SEO 词库矩阵 */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-sm overflow-hidden">
              <div className="px-10 py-8 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">High-Conversion SEO Matrix</h3>
                </div>
                <span className="text-[10px] font-bold text-slate-400">UUID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="divide-y divide-slate-50">
                {marketData.seoKeywords.map((k, i) => (
                  <div key={i} className="px-10 py-8 flex flex-wrap items-center justify-between hover:bg-slate-50/80 transition-all group">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Keyword.{i + 1}</span>
                      <span className="text-xl font-bold text-slate-900 group-hover:translate-x-1 transition-transform uppercase italic">{k.term}</span>
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-right">
                        <div className="text-[9px] font-black text-slate-400 uppercase mb-1">Difficulty</div>
                        <div className="text-xs font-black text-slate-900 uppercase">{k.difficulty}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-black text-slate-400 uppercase mb-1">Search Vol.</div>
                        <div className="text-sm font-black text-blue-600">{k.volume}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-black text-slate-400 uppercase mb-1">Est. CPC</div>
                        <div className="text-sm font-black text-slate-900 italic">{k.cpc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 第三层：战略洞察 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-slate-950 rounded-[3rem] p-16 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
               <div className="md:col-span-2">
                  <h3 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-10">Strategic<br />Playbook</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-blue-400">
                      <ShieldCheck size={20} />
                      <span className="text-[11px] font-black uppercase tracking-widest">Compliance Ready</span>
                    </div>
                    <div className="flex items-center gap-4 text-blue-400">
                      <Globe size={20} />
                      <span className="text-[11px] font-black uppercase tracking-widest">Tier 1 Market Focus</span>
                    </div>
                  </div>
               </div>
               <div className="md:col-span-3 space-y-10">
                  {marketData.marketInsights.map((insight, index) => (
                    <div key={index} className="group cursor-default">
                      <div className="flex items-center gap-6 mb-4">
                        <span className="text-4xl font-black text-slate-800 group-hover:text-blue-500 transition-colors duration-500">0{index + 1}</span>
                        <div className="h-px flex-1 bg-slate-800" />
                      </div>
                      <p className="text-sm font-bold text-slate-300 leading-relaxed pl-4 border-l-2 border-transparent group-hover:border-blue-600 transition-all uppercase tracking-wide">
                        {insight}
                      </p>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        )}
      </main>

      {/* SaaS Footer */}
      <footer className="border-t border-slate-100 py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24 text-left">
            <div className="md:col-span-2">
               <div className="flex items-center gap-3 mb-8">
                 <Sparkles size={24} className="text-slate-950 fill-current" />
                 <span className="text-xl font-black tracking-tighter text-slate-950 uppercase italic">YMTEA.LABS</span>
               </div>
               <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm uppercase tracking-wider">
                 专为全球套利者设计的下一代市场情报终端。通过神经网络分析实时数据。
               </p>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-950 uppercase tracking-[0.2em] mb-8">Resources</h4>
              <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Market API</a></li>
                <li><a href="https://ymtea.club" className="hover:text-blue-600 transition-colors">Ymtea.Club</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-950 uppercase tracking-[0.2em] mb-8">Verification</h4>
              <div className="p-6 border border-slate-100 bg-slate-50 rounded-2xl">
                <Cpu size={24} className="text-slate-300 mb-4" />
                <span className="text-[10px] text-slate-500 font-black tracking-widest block uppercase">Edge_Node_v4.5</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-16">
            <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-300">
              © 2026 YMTEA GLOBAL TERMINAL
            </span>
            <div className="flex gap-8 mt-10 md:mt-0">
               <StatusBadge variant="blue">System Healthy</StatusBadge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
