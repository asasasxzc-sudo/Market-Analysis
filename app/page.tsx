"use client";

import React, { useState, useRef } from 'react';
import { 
  Search, BarChart3, ArrowUpRight, Loader2, Zap, 
  ShieldCheck, Globe, Database, Target, TrendingUp, 
  Layers, ChevronRight, Activity, Cpu
} from 'lucide-react';

// SaaS 专用微组件：状态标签
const Badge = ({ children, variant = 'blue' }: { children: React.ReactNode, variant?: 'blue' | 'emerald' | 'indigo' }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100"
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider inline-flex items-center gap-1 ${styles[variant]}`}>
      {variant === 'emerald' && <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />}
      {children}
    </span>
  );
};

export default function SaaSAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    score: 0,
    status: '',
    matrix: [] as any[],
    insights: [] as string[]
  });

  const handleAnalyze = async () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);

    // 模拟 SaaS 后端多节点运算延迟
    await new Promise(resolve => setTimeout(resolve, 2000));

    const score = Math.floor(Math.random() * 15) + 82;
    setData({
      score: score,
      status: score > 90 ? 'High Growth' : 'Market Leader',
      matrix: [
        { key: `${product} trends 2026`, vol: '45.2K', diff: '0.12', growth: '+24%' },
        { key: `best ${product} wholesale`, vol: '12.8K', diff: '0.45', growth: '+12%' },
        { key: `${product} market report`, vol: '8.9K', diff: '0.08', growth: '+66%' },
        { key: `global ${product} supply`, vol: '31.4K', diff: '0.33', growth: '+05%' },
      ],
      insights: [
        `当前 "${product}" 关键词在社交媒体的讨论热度呈指数级增长，建议提前布局视觉化内容。`,
        `竞品分析显示，该品类在欧洲市场的转化成本（CPA）比北美市场低 32%。`,
        `建议优化移动端着陆页，针对 "Quick-Buy" 搜索意图进行结构化数据标注。`
      ]
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* SaaS 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-200">
            <Zap size={18} className="text-white fill-current" />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-950 uppercase italic">
            YMTEA<span className="text-blue-600">.LABS</span>
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-600 transition-colors">API Status</a>
          </div>
          <a href="https://ymtea.club" target="_blank" className="bg-slate-900 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xl shadow-slate-200">
            Get Started
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-40">
        
        {/* 英雄区：SaaS 价值主张 */}
        <section className="text-center mb-24">
          <Badge variant="blue">Market Intelligence V4.0</Badge>
          <h1 className="mt-8 mb-6 text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-slate-950 leading-[0.9]">
            Decode the <span className="text-blue-600 italic">Market</span> <br /> 
            with Neural Logic.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium mb-12">
            提供实时 SEO 指标、全球供应链分析及竞品渗透率。基于 Ymtea 自研算法，为您的商业决策提供数据背书。
          </p>

          {/* 核心搜索组件 */}
          <div className="max-w-3xl mx-auto group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl blur opacity-10 group-focus-within:opacity-20 transition duration-1000"></div>
            <div className="relative flex bg-white border border-slate-200 p-2.5 rounded-2xl shadow-2xl shadow-blue-500/5">
              <div className="flex items-center pl-4 text-slate-400"><Target size={20} /></div>
              <input 
                type="text" 
                placeholder="输入产品关键词，例如 'Puerh Tea'..." 
                className="flex-1 bg-transparent px-4 py-3 text-base text-slate-950 outline-none placeholder:text-slate-300 font-semibold"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <button 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-xl text-sm font-bold transition-all flex items-center gap-2 disabled:bg-slate-300"
              >
                {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'RUN ENGINE'}
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-6">
            <Badge variant="emerald">Live Data Feed</Badge>
            <Badge variant="indigo">99.8% Accuracy</Badge>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* 数据概览层 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Score</span>
                  <Activity size={18} className="text-blue-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black text-slate-950 tracking-tighter">{data.score}</span>
                  <span className="text-blue-600 font-bold">PT</span>
                </div>
                <div className="mt-6 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${data.score}%` }}></div>
                </div>
              </div>

              <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Market Status</span>
                <div className="text-3xl font-extrabold text-slate-950 uppercase italic tracking-tighter">{data.status}</div>
                <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-[11px]">
                  <ShieldCheck size={14} /> VERIFIED BY AI CLUSTER
                </div>
              </div>

              <div className="bg-slate-950 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                <Database className="absolute -right-6 -bottom-6 text-white/5 w-40 h-40 rotate-12" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">Data Integrity</span>
                <div className="text-5xl font-black text-white italic tracking-tighter mt-4 relative z-10">ALPHA+</div>
                <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-4 relative z-10">
                  <span className="text-[10px] text-slate-400 font-bold">SYNC_ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                  <ChevronRight size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* 关键词多维矩阵 */}
            <div className="bg-white border border-slate-200/60 rounded-3xl shadow-sm overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Layers size={16} className="text-blue-600" /> Matrix Analysis
                </div>
                <span className="text-[10px] font-bold text-slate-400">TIMESTAMP: {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="divide-y divide-slate-100">
                {data.matrix.map((item, i) => (
                  <div key={i} className="px-8 py-6 flex flex-wrap items-center justify-between hover:bg-slate-50 transition-colors cursor-default group">
                    <div className="flex flex-col gap-1 min-w-[240px]">
                      <span className="text-[10px] font-bold text-blue-600 uppercase">Vector.{i+1}</span>
                      <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase">{item.key}</span>
                    </div>
                    <div className="flex gap-12 items-center">
                      <div className="text-center">
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 text-right">Volume</div>
                        <div className="text-sm font-black text-slate-900">{item.vol}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 text-right">Trend</div>
                        <div className="text-sm font-black text-emerald-500 italic">{item.growth}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 战略建议：SaaS 指导逻辑 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-blue-600 p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl shadow-blue-200">
                  <TrendingUp className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10" />
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-6">Strategic<br/>Forecasting</h3>
                  <p className="text-blue-100 text-sm font-medium leading-relaxed max-w-sm">
                    基于当前的 SERP 波动率和语义熵，我们的神经网络为您生成了以下执行路径：
                  </p>
                  <button className="mt-10 bg-white text-blue-600 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg">
                    Export PDF Report
                  </button>
               </div>
               <div className="space-y-4">
                  {data.insights.map((s, i) => (
                    <div key={i} className="bg-white border border-slate-200/60 p-6 rounded-2xl flex gap-6 group hover:border-blue-300 transition-all">
                      <div className="text-3xl font-black text-slate-100 group-hover:text-blue-100 transition-colors leading-none">0{i+1}</div>
                      <p className="text-[13px] font-bold text-slate-600 leading-relaxed uppercase">{s}</p>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        )}
      </main>

      {/* 专业 SaaS 页脚 */}
      <footer className="bg-white border-t border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
          <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <Zap size={20} className="text-blue-600 fill-current" />
                <span className="text-lg font-black tracking-tight text-slate-950 uppercase italic">YMTEA.LABS</span>
             </div>
             <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-sm">
                Next-generation market terminal for digital trade and semantic intelligence. Operating from 48 global edge nodes.
             </p>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Global Network</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Cloud</a></li>
              <li><a href="https://ymtea.club" className="hover:text-blue-600 transition-colors">Ymtea.Club</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] mb-6">Connect</h4>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
               <Cpu size={24} className="text-slate-200 mb-4" />
               <span className="text-[10px] text-slate-400 font-bold tracking-widest block uppercase">Node_Status: Optimal</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
          <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.8em]">© 2026 YMTEA GLOBAL · ALL RIGHTS RESERVED</span>
          <div className="flex gap-6 mt-6 md:mt-0">
             <Badge variant="emerald">Systems Stable</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}
