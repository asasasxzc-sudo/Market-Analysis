"use client";

import React, { useState, useRef } from 'react';
import { Search, Zap, TrendingUp, ShieldCheck, Newspaper, ArrowUpRight, Loader2, Activity, Globe, LayoutGrid } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0A0A0B] text-[#94A3B8] font-mono">
      {/* 顶部工业级导航 */}
      <nav className="border-b border-white/5 bg-[#0D0D0E] px-6 py-3 sticky top-0 z-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
            <div className="bg-blue-600 p-1 rounded-sm">
              <Zap size={14} className="text-white" fill="currentColor" />
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-white">YMTEA <span className="text-blue-500">INTEL</span></span>
          </a>
          <div className="flex items-center gap-6 text-[10px] tracking-widest font-bold uppercase">
            <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center gap-2">
              <Activity size={12} /> Live Index
            </a>
            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
            <span className="text-zinc-600 hidden sm:block italic">Node: Cloudflare Global</span>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1440px] px-6 py-8">
        {/* 核心搜索框 - 扁平化块状 */}
        <div className="bg-[#121214] border border-white/5 p-8 mb-8 rounded-sm">
          <div className="flex flex-col md:flex-row gap-6 items-end">
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-3">Input Target Market / Product</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  className="w-full bg-black border border-white/10 px-12 py-3.5 text-white outline-none focus:border-blue-500 transition-all font-sans text-lg"
                  placeholder="e.g. Green Tea Wholesale..."
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
                />
              </div>
            </div>
            <button 
              onClick={runAnalysis}
              className="w-full md:w-auto bg-blue-600 text-white px-12 py-4 font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-2 rounded-sm"
            >
              {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'RUN DIAGNOSTIC'}
            </button>
          </div>
        </div>

        {showResult && (
          <div ref={resultRef} className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* 第一排：核心看板区 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧：趋势曲线 (参考 Industry Future 风格) */}
              <div className="lg:col-span-2 bg-[#121214] border border-white/5 p-8 rounded-sm">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={14} className="text-blue-500" /> Market Growth Velocity
                  </h3>
                  <div className="flex gap-4">
                    <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-widest">Scale: 12 Months</span>
                  </div>
                </div>
                
                <div className="h-60 w-full relative">
                  <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                    {/* 背景网格线 */}
                    {[20, 40, 60, 80].map(y => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
                    ))}
                    {/* 线性趋势 */}
                    <path 
                      d="M 0 85 Q 50 90, 100 65 T 200 45 T 300 75 T 400 25" 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="2"
                    />
                    <path 
                      d="M 0 85 Q 50 90, 100 65 T 200 45 T 300 75 T 400 25 V 100 H 0 Z" 
                      fill="url(#chartGrad)"
                      className="opacity-10"
                    />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* 右侧：关键状态卡 */}
              <div className="space-y-6">
                <div className="bg-blue-600 p-8 rounded-sm text-white">
                  <ShieldCheck className="mb-4 opacity-50" size={32} />
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Signal Strength</div>
                  <div className="text-4xl font-bold tracking-tighter">OPTIMAL</div>
                  <div className="mt-6 pt-6 border-t border-white/10 text-[11px] font-medium leading-relaxed italic opacity-90">
                    “建议通过 <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">YMTEA.CLUB</a> 建立核心供应渠道以锁定当前增长。”
                  </div>
                </div>
                
                <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" className="block bg-[#121214] border border-white/5 p-8 rounded-sm group hover:border-blue-500 transition-all text-center">
                  <Newspaper className="mx-auto mb-4 text-zinc-600 group-hover:text-blue-500 transition-colors" size={24} />
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest">Research Reports</div>
                  <div className="text-[10px] text-zinc-500 mt-2">Access YMTEA Intelligence Blog</div>
                </a>
              </div>
            </div>

            {/* 第二排：网格指标 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Demand Index', val: '92.4', trend: '+4.1%', status: 'up' },
                { label: 'Market Cap', val: 'MID-T', trend: 'Stable', status: 'neut' },
                { label: 'Entry Cost', val: 'LOW', trend: '-2.5%', status: 'down' },
                { label: 'Alpha Score', val: 'A+', trend: 'Top Tier', status: 'up' }
              ].map((m, i) => (
                <div key={i} className="bg-[#121214] border border-white/5 p-6 rounded-sm">
                  <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-4">{m.label}</div>
                  <div className="text-2xl font-bold text-white mb-2 tracking-tight">{m.val}</div>
                  <div className={`text-[10px] font-bold ${m.status === 'up' ? 'text-blue-500' : 'text-zinc-600'}`}>{m.trend}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="py-16 text-center border-t border-white/5 mt-12 bg-black/20">
        <div className="text-[9px] font-bold tracking-[0.5em] text-zinc-800 uppercase">
          YMTEA DATA TERMINAL v1.0.4 · 2026 · <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600">SECURED BY YMTEA.CLUB</a>
        </div>
      </footer>
    </div>
  );
}
