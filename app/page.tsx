"use client";

import React, { useState, useRef } from 'react';
import { Search, Zap, TrendingUp, ShieldCheck, Newspaper, ArrowUpRight, Loader2, Globe, Activity } from 'lucide-react';

export default function MarketTerminal() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const runAnalysis = () => {
    if (!product.trim()) return;
    setAnalyzing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#94A3B8] font-mono selection:bg-blue-500/30">
      {/* 顶部导航 - 工业极简风格 */}
      <nav className="border-b border-white/5 bg-[#0D0D0E] px-6 py-3">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-1 rounded-sm">
              <Zap size={14} className="text-white" fill="currentColor" />
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">YMTEA <span className="text-blue-500">MARKET</span></span>
          </a>
          <div className="flex items-center gap-8 text-[10px] tracking-widest uppercase font-bold">
            <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <Activity size={12} /> Intelligence
            </a>
            <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="text-white border border-white/20 px-3 py-1 hover:bg-white/10 transition-all">
              Terminal v1.0
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1400px] px-6 py-12">
        {/* 搜索区域 - 块状结构 */}
        <section className="mb-12 bg-[#121214] border border-white/5 p-8 rounded-sm shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Market Analysis Engine</h2>
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">全球市场指数监测终端</h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  className="w-full bg-black border border-white/10 px-12 py-3 text-white outline-none focus:border-blue-500 transition-all font-sans"
                  placeholder="输入产品关键词 (如: Organic Tea)..."
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
                />
              </div>
              <button 
                onClick={runAnalysis}
                className="bg-blue-600 text-white px-10 py-3 font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
              >
                {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'Execute Analysis'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* 指标矩阵 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Market Score', val: '94.2', unit: 'idx', trend: '+2.4%' },
                { label: 'Demand Level', val: 'HIGH', unit: '', trend: 'Stable' },
                { label: 'Competition', val: 'MEDIUM', unit: '', trend: '-0.8%' },
                { label: 'YMTEA Rank', val: 'TOP 5', unit: '', trend: 'Rising' }
              ].map((stat, i) => (
                <div key={i} className="bg-[#121214] border border-white/5 p-6 rounded-sm hover:border-blue-500/50 transition-all">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">{stat.label}</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold text-white">{stat.val}</div>
                    <div className="text-[10px] text-zinc-600">{stat.unit}</div>
                  </div>
                  <div className="mt-4 text-[10px] font-bold text-blue-500">{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* 图表与资讯主干 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 核心趋势图 */}
              <div className="lg:col-span-2 bg-[#121214] border border-white/5 p-8 rounded-sm">
                <div className="flex justify-between items-center mb-10">
                  <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={14} className="text-blue-500" /> 增长趋势指数 (12M)
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest">Real-time Data</span>
                  </div>
                </div>
                
                {/* 科技感线性图表 */}
                <div className="h-48 w-full relative">
                  <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                    <path 
                      d="M 0 80 Q 50 85, 100 60 T 200 40 T 300 70 T 400 20" 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="1.5"
                    />
                    <path 
                      d="M 0 80 Q 50 85, 100 60 T 200 40 T 300 70 T 400 20 V 100 H 0 Z" 
                      fill="url(#industrialGrad)"
                      className="opacity-20"
                    />
                    <defs>
                      <linearGradient id="industrialGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* 背景辅助线 */}
                    {[20, 40, 60, 80].map(y => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
                    ))}
                  </svg>
                </div>
              </div>

              {/* 资讯与策略链接 */}
              <div className="space-y-6">
                <div className="bg-[#121214] border border-white/5 p-8 rounded-sm">
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Strategic Insights</h3>
                  <div className="space-y-4">
                    <p className="text-[11px] leading-relaxed text-zinc-500">
                      根据云茗荟全球监测点数据显示，该品类目前在欧美B2B端的搜索溢价率提升了 <span className="text-blue-500">14.2%</span>。
                    </p>
                    <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-500 hover:underline">
                      READ FULL REPORT <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
                
                <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 p-6 rounded-sm group hover:bg-blue-700 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <ShieldCheck className="text-white" size={24} />
                    <ArrowUpRight className="text-white/50 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest">Connect to YMTEA.CLUB</div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-12 border-t border-white/5 py-12 text-center">
        <div className="text-[9px] font-bold tracking-[0.6em] text-zinc-800 uppercase">
          Cloud-Tea Market Terminal © 2026 · Secured by Ymtea Labs
        </div>
      </footer>
    </div>
  );
}
