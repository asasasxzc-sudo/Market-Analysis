"use client";
import React, { useState, useRef } from 'react';
import { Search, BarChart3, FileText, Lightbulb, Globe, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // 动态数据状态
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

    // 模拟数据计算逻辑
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 20) + 75; // 生成 75-95 之间的分数
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
      
      // 延迟确保 DOM 渲染后平滑滚动
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* 导航栏 - 增加了点击跳转逻辑 */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 px-6 py-4 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="rounded-lg bg-blue-600 p-2 text-white">
              <Globe size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">YMTEA Labs</span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium md:flex">
            <button onClick={() => scrollToSection('market-index')} className="hover:text-blue-600 transition">市场指数</button>
            <button onClick={() => scrollToSection('keyword-analysis')} className="hover:text-blue-600 transition">关键词分析</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-blue-600 transition">优化方案</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* 搜索区域 */}
        <section className="mb-16 text-center pt-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-900">
            欧美市场前景诊断
          </h1>
          <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto">
            基于 Ymtea 实时算法，为您提供精准的产品出海 SEO 建议与趋势预测
          </p>
          
          <div className="mx-auto flex max-w-2xl gap-2 rounded-2xl bg-white p-2 shadow-2xl border border-slate-200 focus-within:ring-2 ring-blue-500 transition-all duration-300">
            <input 
              type="text" 
              placeholder="输入产品 (例如: Pu-erh Tea)" 
              className="flex-1 px-4 py-3 outline-none rounded-l-xl text-lg"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition hover:bg-blue-700 active:scale-95 disabled:bg-slate-400 flex items-center gap-2"
            >
              {analyzing ? <><Loader2 className="animate-spin" size={20} /> 分析中</> : '开始诊断'}
            </button>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {/* 市场指数板块 */}
            <div id="market-index" className="grid grid-cols-1 gap-6 md:grid-cols-3 scroll-mt-24">
              <div className="rounded-2xl bg-white p-6 shadow-sm border-2 border-blue-50">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">市场潜力值</span>
                  <BarChart3 className="text-blue-600" size={20} />
                </div>
                <div className="text-5xl font-black text-blue-600">{dynamicData.score}<span className="text-lg text-slate-400">/100</span></div>
                <div className="mt-3 text-sm text-green-600 flex items-center gap-1 font-bold">
                  <ArrowUpRight size={16} /> 建议加大欧美市场投放
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">内容竞争难度</span>
                  <Search className="text-orange-500" size={20} />
                </div>
                <div className="text-3xl font-black text-slate-800">{dynamicData.level}</div>
                <p className="mt-2 text-sm text-slate-500">优质长尾词尚有大量空白</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">推荐利润分级</span>
                  <FileText className="text-purple-600" size={20} />
                </div>
                <div className="text-3xl font-black text-purple-600">A级 (High)</div>
                <p className="mt-2 text-sm text-slate-500">欧美终端零售价极具优势</p>
              </div>
            </div>

            {/* 关键词分析板块 */}
            <div id="keyword-analysis" className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 scroll-mt-24">
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-extrabold text-slate-800">
                <Search size={24} className="text-blue-600" /> "{product}" 关联热词与趋势
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group">
                    <span className="font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{k.word}</span>
                    <div className="flex gap-4 items-center">
                      <span className="text-xs font-bold bg-white text-slate-500 px-3 py-1 rounded-full border border-slate-200">难度: {k.diff}</span>
                      <span className="text-green-600 font-black">{k.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 方案板块 */}
            <div id="roadmap" className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl scroll-mt-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lightbulb size={120} />
              </div>
              <h3 className="mb-10 flex items-center gap-3 text-2xl font-bold relative z-10">
                <Lightbulb size={28} className="text-yellow-400" /> 出海优化全流程方案
              </h3>
              <div className="space-y-6 relative z-10">
                {dynamicData.suggestions.map((s, i) => (
                  <div key={i} className="flex gap-5 items-start bg-white/10 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 font-black text-white shadow-lg">
                      {i + 1}
                    </div>
                    <p className="text-lg text-slate-100 leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-24 border-t border-slate-200 bg-white py-12 text-center text-slate-400">
        <div className="flex justify-center gap-2 items-center mb-4">
          <Globe size={18} />
          <span className="font-bold text-slate-800">YMTEA LABS GLOBAL</span>
        </div>
        <p className="text-sm">© 2026 YMTEA Labs · Data-Driven Insights for Global Trade</p>
      </footer>
    </div>
  );
}
