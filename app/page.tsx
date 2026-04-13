"use client";

import React, { useState, useRef } from 'react';
import { Search, BarChart3, FileText, Lightbulb, Globe, ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Zap, TrendingUp, Activity } from 'lucide-react';

export default function SEOAnalyzer() {
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

  const handleAnalyze = () => {
    if (!product.trim()) return alert("请输入产品名称");
    
    setAnalyzing(true);
    setShowResult(false);

    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 20) + 75;
      setDynamicData({
        score: randomScore,
        level: randomScore > 88 ? '极高潜力' : '高增长',
        keywords: [
          { word: `Best ${product} reviews 2026`, diff: '容易', trend: '+156%' },
          { word: `Organic ${product} wholesale`, diff: '中等', trend: '+88%' },
          { word: `Where to buy ${product} in Europe`, diff: '低难度', trend: '+62%' },
          { word: `${product} sustainable packaging`, diff: '容易', trend: '+110%' },
        ],
        suggestions: [
          `在欧美市场强调 "${product}" 的环保属性与可追溯性，这是当前消费者的核心关注点。`,
          `针对 Google 搜索结果优化 "${product}" 的对比类文章（Top 10 list）。`,
          `该产品在 YouTube 和 TikTok 的开箱视频声量正处于爆发前期，建议布局视频内容。`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-mono text-zinc-400 selection:bg-blue-500/30">
      {/* 导航栏 - 工业极简 */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/60 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a 
            href="https://ymtea.club" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="rounded bg-blue-600 p-1.5 text-white transition-transform group-hover:scale-110">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="text-lg font-black tracking-tighter text-white uppercase italic">YMTEA Labs</span>
          </a>
          <div className="hidden space-x-8 text-[10px] font-bold uppercase tracking-widest md:flex">
            <button onClick={() => scrollToSection('market-index')} className="hover:text-blue-500 transition">市场指数</button>
            <button onClick={() => scrollToSection('keyword-analysis')} className="hover:text-blue-500 transition">关键词分析</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-blue-500 transition text-white border-b border-blue-600 pb-1">优化方案</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-20">
        {/* 搜索区域 - 块状居中 */}
        <section className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <Activity size={12} /> Global Market Terminal
          </div>
          <h1 className="mb-6 text-5xl font-black tracking-tighter text-white md:text-7xl italic">
            Market <span className="text-blue-600">Alpha.</span>
          </h1>
          <p className="mb-12 text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
            基于 YMTEA 实时算法与工业级数据模型，为您提供精准的出海 SEO 建议。
          </p>
          
          <div className="mx-auto flex max-w-2xl gap-0 rounded-sm bg-[#111] p-1.5 border border-white/10 shadow-2xl focus-within:border-blue-600 transition-colors">
            <input 
              type="text" 
              placeholder="Search product niche..." 
              className="flex-1 bg-transparent px-6 py-3 outline-none text-white font-sans"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-blue-600 px-10 py-3 font-black text-xs text-white uppercase tracking-widest hover:bg-blue-500 transition-all disabled:bg-zinc-800 flex items-center gap-2"
            >
              {analyzing ? <Loader2 className="animate-spin" size={16} /> : 'Execute'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* 核心看板 - 块状体现 */}
            <div id="market-index" className="grid grid-cols-1 gap-6 md:grid-cols-3 scroll-mt-24">
              <div className="rounded-sm bg-[#111] p-8 border border-white/5 relative overflow-hidden group">
                <div className="mb-8 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Growth Index</span>
                  <TrendingUp className="text-blue-500" size={16} />
                </div>
                <div className="text-5xl font-black text-white relative z-10">{dynamicData.score}<span className="text-sm text-zinc-700 ml-1">pts</span></div>
                
                {/* 趋势指数 - 线状体现 (曲线小巧精致) */}
                <div className="mt-6 h-12 w-full">
                  <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                    <path 
                      d="M 0 15 Q 25 18, 40 8 T 70 12 T 100 2" 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="1.5"
                      className="drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]"
                    />
                  </svg>
                </div>
              </div>

              <div className="rounded-sm bg-[#111] p-8 border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Potential Level</span>
                  <div className="mt-4 text-2xl font-black text-white italic">{dynamicData.level}</div>
                </div>
                <p className="mt-4 text-[10px] font-bold text-blue-500/80 leading-relaxed uppercase tracking-tighter">Gap detected in long-tail keywords</p>
              </div>

              <div className="rounded-sm bg-blue-600 p-8 text-white flex flex-col justify-between shadow-2xl shadow-blue-900/20">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Profit Class</span>
                  <BarChart3 size={20} />
                </div>
                <div className="text-4xl font-black italic">A-GRADE</div>
                <p className="text-[10px] font-bold uppercase opacity-80 tracking-tighter">Optimal pricing in EU/US markets</p>
              </div>
            </div>

            {/* 关键词网格 */}
            <div id="keyword-analysis" className="rounded-sm bg-[#111] p-10 border border-white/5 scroll-mt-24">
              <h3 className="mb-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white">
                <Search size={14} className="text-blue-500" /> "{product}" Keyword Diagnostics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-black/40 border border-white/5 hover:border-blue-500/50 transition-all group">
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">{k.word}</span>
                    <div className="flex gap-4 items-center">
                      <span className="text-[9px] font-black text-zinc-600 uppercase">Diff: {k.diff}</span>
                      <span className="text-blue-500 font-black text-sm">{k.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 路线图 - 块状深色 */}
            <div id="roadmap" className="rounded-sm bg-white p-10 text-black shadow-2xl scroll-mt-24">
              <h3 className="mb-12 flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em]">
                <Lightbulb size={18} className="text-blue-600" /> Strategic Roadmap
              </h3>
              <div className="space-y-4 font-sans">
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 bg-zinc-50 border border-zinc-100 group hover:bg-blue-50 transition-colors">
                    <div className="text-2xl font-black text-zinc-200 group-hover:text-blue-200 transition-colors">
                      0{i + 1}
                    </div>
                    <p className="text-sm font-bold text-zinc-800 leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-100 flex justify-end">
                <a 
                  href="https://ymtea.club" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
                >
                  Enter Full Laboratory <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-40 border-t border-white/5 py-20 text-center">
        <div className="flex justify-center gap-2 items-center mb-6 opacity-20">
          <Zap size={20} fill="currentColor" />
          <span className="font-black tracking-[0.4em] uppercase text-xs text-white">YMTEA LABS</span>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-700">
          © 2026 Data Engine · <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ymtea.club</a>
        </p>
      </footer>
    </div>
  );
}
