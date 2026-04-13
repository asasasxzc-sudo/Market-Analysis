"use client";
import React, { useState } from 'react';
import { Search, BarChart3, FileText, Lightbulb, Globe, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // 模拟分析逻辑
  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 导航栏 */}
      <nav className="border-bottom bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-2 text-white">
              <Globe size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">YMTEA Labs <span className="text-blue-600">Global</span></span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium md:flex">
            <a href="#" className="text-blue-600">市场指数</a>
            <a href="#" className="hover:text-blue-600">关键词分析</a>
            <a href="#" className="hover:text-blue-600">文章诊断</a>
            <a href="#" className="hover:text-blue-600">优化路线图</a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* 搜索区域 */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">欧美市场产品前景分析站</h1>
          <p className="mb-8 text-lg text-slate-600 text-center">输入任何产品，获取实时市场指数与 SEO 优化方案</p>
          <div className="mx-auto flex max-w-2xl gap-2 rounded-2xl bg-white p-2 shadow-xl border border-slate-200">
            <input 
              type="text" 
              placeholder="输入产品名称 (例如: Portable Power Station)" 
              className="flex-1 px-4 py-3 outline-none"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            <button 
              onClick={handleAnalyze}
              className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition hover:bg-blue-700 active:scale-95"
            >
              {analyzing ? '分析中...' : '开始诊断'}
            </button>
          </div>
        </section>

        {showResult && (
          <div className="space-y-8">
            {/* 核心指标卡片 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase">市场指数 (Global Index)</span>
                  <BarChart3 className="text-blue-600" size={20} />
                </div>
                <div className="text-4xl font-black text-blue-600">84/100</div>
                <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
                  <ArrowUpRight size={14} /> 较上周增长 4.2%
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase">竞争强度 (Competition)</span>
                  <Search className="text-orange-500" size={20} />
                </div>
                <div className="text-4xl font-black text-orange-500">中等</div>
                <p className="mt-2 text-sm text-slate-500 text-center">蓝海市场，适合新品牌切入</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase">SEO 潜力</span>
                  <FileText className="text-purple-600" size={20} />
                </div>
                <div className="text-4xl font-black text-purple-600">极高</div>
                <p className="mt-2 text-sm text-slate-500 text-center">长尾词搜索量持续放大中</p>
              </div>
            </div>

            {/* 详细分析板块 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* 关键词分析 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <Search size={22} className="text-blue-600" /> 欧美热搜关键词分析
                </h3>
                <div className="space-y-4">
                  {[
                    { word: 'Best portable power for camping', diff: '容易', trend: '+120%' },
                    { word: 'Eco-friendly battery station', diff: '中等', trend: '+85%' },
                    { word: 'Home backup power price', diff: '难', trend: '+40%' },
                  ].map((k, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                      <span className="font-medium">{k.word}</span>
                      <div className="flex gap-4 text-sm font-bold text-center">
                        <span className="text-blue-600">{k.diff}</span>
                        <span className="text-green-600">{k.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 优化路线图 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-center">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <Lightbulb size={22} className="text-yellow-500" /> 优化建议与方案
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    <span>针对北美地区撰写“Sustainability”主题博客，提升 E-E-A-T。</span>
                  </li>
                  <li className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    <span>在产品详情页添加“User Manual PDF”下载，增加内链权重。</span>
                  </li>
                  <li className="flex gap-3 text-slate-700">
                    <AlertCircle className="text-orange-500 shrink-0" size={20} />
                    <span>检测到移动端加载速度为 3.2s，需优化图片资源以通过 Core Web Vitals。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white py-12 text-center text-slate-400">
        <p>© 2026 YMTEA Labs · 助力 ymtea.club 品牌出海</p>
      </footer>
    </div>
  );
}
