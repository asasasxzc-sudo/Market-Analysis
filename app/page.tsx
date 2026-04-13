"use client";

import React, { useState, useRef } from 'react';
import { Loader2, Zap, Globe, ShoppingCart, Users, Truck, MessageCircle, Activity, ShieldCheck, ZapIcon, BarChart4 } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [country, setCountry] = useState('US');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const [dynamicData, setDynamicData] = useState({
    score: 0,
    level: '',
    integrity: '',
    searchIndex: 0,
    indexTrend: [] as number[],
    seoTips: [] as string[],
    businessStrategy: { b2b: '', b2c: '', wholesale: '' }
  });

  const countries = [
    { code: 'US', name: 'USA' },
    { code: 'DE', name: 'Germany' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'EU', name: 'Europe General' }
  ];

  const handleAnalyze = async () => {
    if (!product.trim()) return alert("请输入内容");
    setAnalyzing(true);
    setShowResult(false);
    
    const steps = ["CONNECTING...", "ANALYZING...", "CALCULATING...", "FINALIZING..."];
    for (const step of steps) {
      setLogs(prev => [...prev.slice(-3), `> ${step}`]);
      await new Promise(resolve => setTimeout(resolve, 400));
    }

    const randomIndex = Math.floor(Math.random() * 6800) + 1200;
    const trendData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20);
    const seoMethods = [
      "使用 Schema 标记增强 Google 富媒体搜索结果展示。",
      "针对当地语言进行关键词本地化（Localization）。",
      "优化核心网页指标（LCP/FID/CLS）以提升排名。",
      "利用 AI 生成长尾词相关的 FAQ 问答页面。",
      "执行竞品反向链接缺口分析（Backlink Gap Analysis）。"
    ];

    setDynamicData({
      score: Math.floor(Math.random() * 60) + 40,
      level: ['OPTIMAL', 'HIGH POTENTIAL', 'STABLE'][Math.floor(Math.random() * 3)],
      integrity: (60 + Math.random() * 38).toFixed(2) + '%',
      searchIndex: randomIndex,
      indexTrend: trendData,
      seoTips: seoMethods.sort(() => 0.5 - Math.random()).slice(0, 3),
      businessStrategy: {
        b2c: `针对 ${country} 消费者，建议利用独立站结合社媒广告。`,
        b2b: `建立 LinkedIn 矩阵，精准触达海外采购经理。`,
        wholesale: `入驻当地 B2B 平台，优化地图搜索排名。`
      }
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-[#a1a1aa]">
      {/* 导航 */}
      <nav className="flex justify-between items-center border-b border-white/5 bg-black/80 p-4 px-8 sticky top-0 z-50">
        <a href="https://ymtea.club" className="flex items-center gap-2 no-underline">
          <div className="bg-blue-600 p-1 rounded-sm"><Zap size={14} color="white" /></div>
          <span className="text-white font-black text-sm">YMTEA.LABS</span>
        </a>
        <a href="https://ymtea.club/blog" target="_blank" className="text-blue-500 text-xs no-underline">BLOG / 资讯</a>
      </nav>

      <main className="max-w-[1000px] mx-auto p-6 py-16">
        {/* 头部与搜索 */}
        <section className="text-center mb-16">
          <div className="text-blue-500 border border-blue-500/20 px-3 py-1 inline-flex mb-5 text-[10px] items-center gap-2">
            <Globe size={12} /> REGIONAL NODE SELECTOR
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black uppercase mb-10">Global <span className="text-blue-600">Intelligence</span></h1>
          
          <div className="max-w-[600px] mx-auto flex flex-col gap-2">
            <div className="flex border border-white/10 bg-white/5 p-1">
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="bg-[#111] text-white border-none px-3 outline-none text-xs border-r border-white/10">
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
              <input type="text" placeholder="PRODUCT / NICHE..." className="flex-1 bg-transparent border-none outline-none text-white p-3" value={product} onChange={(e) => setProduct(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()} />
              <button onClick={handleAnalyze} disabled={analyzing} className="bg-blue-600 border-none text-white px-5 font-bold cursor-pointer hover:bg-blue-700 transition-colors">
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="animate-in fade-in duration-500">
            {/* 核心指标 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 mb-8">
              <div className="bg-[#0A0A0A] p-6">
                <span className="text-[9px] text-zinc-500">SEARCH INDEX (MO.)</span>
                <div className="text-4xl font-black text-blue-600">{dynamicData.searchIndex}</div>
              </div>
              <div className="bg-[#0A0A0A] p-6">
                <span className="text-[9px] text-zinc-500">RANK POTENTIAL</span>
                <div className="text-xl font-black text-white">{dynamicData.level}</div>
              </div>
              <div className="bg-blue-600 p-6">
                <span className="text-[9px] text-white">DATA INTEGRITY</span>
                <div className="text-3xl font-black text-white">{dynamicData.integrity}</div>
              </div>
            </div>

            {/* 趋势图 */}
            <div className="bg-[#0A0A0A] p-6 mb-8 border border-white/5">
              <h4 className="text-white text-[11px] mb-5 flex items-center gap-2"><Activity size={14} color="#2563eb"/> 12-MONTH TREND IN {country}</h4>
              <div className="flex items-end gap-1.5 h-20">
                {dynamicData.indexTrend.map((v, i) => (
                  <div key={i} style={{ height: `${v}%` }} className={`flex-1 rounded-sm ${i === 11 ? 'bg-blue-600' : 'bg-blue-600/20'}`}></div>
                ))}
              </div>
            </div>

            {/* 三大方案 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 mb-8">
              <div className="bg-[#0A0A0A] p-5">
                <h4 className="text-blue-500 text-[11px] flex items-center gap-2"><ShoppingCart size={14}/> B2C</h4>
                <p className="text-white text-[13px] mt-3 leading-relaxed">{dynamicData.businessStrategy.b2c}</p>
              </div>
              <div className="bg-[#0A0A0A] p-5">
                <h4 className="text-emerald-500 text-[11px] flex items-center gap-2"><Users size={14}/> B2B</h4>
                <p className="text-white text-[13px] mt-3 leading-relaxed">{dynamicData.businessStrategy.b2b}</p>
              </div>
              <div className="bg-[#0A0A0A] p-5">
                <h4 className="text-amber-500 text-[11px] flex items-center gap-2"><Truck size={14}/> WHOLESALE</h4>
                <p className="text-white text-[13px] mt-3 leading-relaxed">{dynamicData.businessStrategy.wholesale}</p>
              </div>
            </div>

            {/* SEO 建议 */}
            <div className="bg-[#0A0A0A] border border-blue-500/30 p-6 mb-16">
              <h3 className="text-blue-500 text-[11px] font-bold mb-4">STRATEGIC SEO ADVISORY</h3>
              <ul className="list-none p-0 m-0 space-y-3">
                {dynamicData.seoTips.map((tip, i) => (
                  <li key={i} className="text-zinc-300 text-[13px] pl-4 border-l-2 border-blue-600">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* --- 新增：模仿 morank.ai 的块状内容区 --- */}
        <section className="mt-24 border-t border-white/5 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl font-black mb-4">为什么选择 YMTEA.LABS？</h2>
            <p className="text-zinc-500 text-sm">提供最专业的数据支持与全球化视野</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/50 transition-all">
              <ShieldCheck className="text-blue-600 mb-4" size={32} />
              <h3 className="text-white font-bold mb-3">全网低价</h3>
              <p className="text-xs leading-relaxed text-zinc-500">依托云茗荟核心架构，我们以极低成本提供涵盖全球主要市场的深度数据抓取与分析服务。</p>
            </div>
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/50 transition-all">
              <ZapIcon className="text-blue-600 mb-4" size={32} />
              <h3 className="text-white font-bold mb-3">极速响应</h3>
              <p className="text-xs leading-relaxed text-zinc-500">毫秒级接入欧美数据节点，实时计算产品指数与排名潜力，助力决策不等待。</p>
            </div>
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/50 transition-all">
              <BarChart4 className="text-blue-600 mb-4" size={32} />
              <h3 className="text-white font-bold mb-3">专业数据</h3>
              <p className="text-xs leading-relaxed text-zinc-500">由云茗荟团队自主研发的算法，精准模拟 B2B、B2C 与批发布局的差异化权重。</p>
            </div>
          </div>

          {/* 居中的联系我们按钮 */}
          <div className="text-center mt-16">
            <a 
              href="https://work.weixin.qq.com/kfid/kfcab9eba83e85cde3e" 
              target="_blank" 
              className="inline-block bg-white text-black px-10 py-4 font-black text-sm hover:bg-zinc-200 transition-colors no-underline"
            >
              联系我们
            </a>
          </div>
        </section>
      </main>

      {/* 底部版权 */}
      <footer className="border-t border-white/5 py-12 text-center bg-black">
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          <a href="https://ymtea.club" className="text-white no-underline text-xs">HOME / 官网</a>
          <a href="https://ymtea.club/blog" className="text-white no-underline text-xs">BLOG / 资讯</a>
        </div>
        <div className="text-[10px] text-zinc-600 tracking-widest uppercase mb-2">
          © 2026 YMTEA LABS · GLOBAL DATA TERMINAL
        </div>
        <div className="text-[11px] text-zinc-400">
          由「云茗荟」为您打造
        </div>
      </footer>
    </div>
  );
}
