"use client";
import React, { useState, useRef } from 'react';
import { Search, BarChart3, FileText, Lightbulb, Globe, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // 模拟动态生成的数据
  const [dynamicData, setDynamicData] = useState({
    score: 0,
    level: '',
    keywords: [] as any[],
    suggestions: [] as string[]
  });

  const handleAnalyze = () => {
    if (!product) return alert("请输入产品名称");
    
    setAnalyzing(true);
    setShowResult(false);

    // 模拟数据计算逻辑
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 30) + 65; // 生成 65-95 之间的分
      setDynamicData({
        score: randomScore,
        level: randomScore > 85 ? '极高' : '中等偏上',
        keywords: [
          { word: `Best ${product} for 2026`, diff: '容易', trend: '+145%' },
          { word: `Affordable ${product} reviews`, diff: '中等', trend: '+92%' },
          { word: `${product} wholesale Europe`, diff: '容易', trend: '+60%' },
        ],
        suggestions: [
          `针对欧美市场撰写关于 "${product}" 的可持续性分析报告。`,
          `优化 "${product}" 相关的长尾关键词，当前竞争度较低。`,
          `建议在 TikTok 增加展示视频，该品类在社交媒体声量正红。`
        ]
      });
      setAnalyzing(false);
      setShowResult(true);
      
      // 自动滚动到结果区
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* 导航栏 */}
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
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-blue-600 transition">优化路线图</button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* 搜索区域 */}
        <section className="mb-16 text-center pt-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">欧美市场产品前景分析站</h1>
          <p className="mb-8 text-lg text-slate-600">输入产品名称，AI 将为您生成专属欧美市场的 B2B 报告</p>
          <div className="mx-auto flex max-w-2xl gap-2 rounded-2xl bg-white p-2 shadow-2xl border border-slate-200 focus-within:ring-2 ring-blue-500 transition-all">
            <input 
              type="text" 
              placeholder="例如: Pu-erh Tea Wholesale" 
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
          <div ref={resultRef} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 市场指数板块 */}
            <div id="market-index" className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-blue-100 ring-4 ring-blue-50 ring-opacity-50">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase">市场健康度</span>
                  <BarChart3 className="text-blue-600" size={20} />
                </div>
                <div className="text-5xl font-black text-blue-600">{dynamicData.score}<span className="text-lg text-slate-400">/100</span></div>
                <div className="mt-2 text-sm text-green-600 flex items-center gap-1 font-bold">
                  <ArrowUpRight size={14} /> 需求处于上升通道
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase">SEO 难度</span>
                  <Search className="text-orange-500" size={20} />
                </div>
                <div className="text-4xl font-black text-slate-800">{dynamicData.level}</div>
                <p className="mt-2 text-sm text-slate-500">建议针对特定人群做垂直内容</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase">出海建议</span>
                  <FileText className="text-purple-600" size={20} />
                </div>
                <div className="text-4xl font-black text-purple-600">推荐</div>
                <p className="mt-2 text-sm text-slate-500 text-center">当前利润空间大于 35%</p>
              </div>
            </div>

            {/* 关键词板块 */}
            <div id="keyword-analysis" className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Search size={22} className="text-blue-600" /> "{product}" 欧美热搜关键词预测
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dynamicData.keywords.map((k, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-slate-50 p-5 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <span className="font-semibold text-slate-700">{k.word}</span>
                    <div className="flex gap-4 items-center">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">难度: {k.diff}</span>
                      <span className="text-green-600 font-bold">{k.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 优化路线图 */}
