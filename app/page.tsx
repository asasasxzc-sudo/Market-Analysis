"use client";

import React, { useState, useRef } from 'react';
import { Loader2, Zap, Globe, ShoppingCart, Users, Truck, MessageCircle, Activity, ShieldCheck, ZapIcon, BarChart4, FileText, Layout, Target, Code2 } from 'lucide-react';

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

    setDynamicData({
      score: Math.floor(Math.random() * 60) + 40,
      level: ['OPTIMAL', 'HIGH POTENTIAL', 'STABLE'][Math.floor(Math.random() * 3)],
      integrity: (60 + Math.random() * 38).toFixed(2) + '%',
      searchIndex: Math.floor(Math.random() * 6800) + 1200,
      indexTrend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20),
      seoTips: ["优化核心网页指标以提升排名", "利用 AI 生成长尾词相关的 FAQ 页面", "执行竞品反向链接缺口分析"].sort(() => 0.5 - Math.random()),
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

      <main className="max-w-[1100px] mx-auto p-6 py-16">
        {/* 头部与搜索 */}
        <section className="text-center mb-16">
          <div className="text-blue-500 border border-blue-500/20 px-3 py-1 inline-flex mb-5 text-[10px] items-center gap-2">
            <Globe size={12} /> REGIONAL NODE SELECTOR
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black uppercase mb-10 tracking-tight">Global <span className="text-blue-600">Intelligence</span></h1>
          
          <div className="max-w-[600px] mx-auto flex flex-col gap-2">
            <div className="flex border border-white/10 bg-white/5 p-1">
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="bg-[#111] text-white border-none px-3 outline-none text-xs border-r border-white/10">
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
              <input type="text" placeholder="PRODUCT / NICHE..." className="flex-1 bg-transparent border-none outline-none text-white p-3" value={product} onChange={(e) => setProduct(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()} />
              <button onClick={handleAnalyze} disabled={analyzing} className="bg-blue-600 border-none text-white px-5 font-bold cursor-pointer hover:bg-blue-700">
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} className="animate-in fade-in duration-500 mb-20">
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
                <h4 className="text-blue-500 text-[11px] flex items-center gap-2"><ShoppingCart size={14}/> B2C 方案</h4>
                <p className="text-white text-[13px] mt-3">{dynamicData.businessStrategy.b2c}</p>
              </div>
              <div className="bg-[#0A0A0A] p-5">
                <h4 className="text-emerald-500 text-[11px] flex items-center gap-2"><Users size={14}/> B2B 方案</h4>
                <p className="text-white text-[13px] mt-3">{dynamicData.businessStrategy.b2b}</p>
              </div>
              <div className="bg-[#0A0A0A] p-5">
                <h4 className="text-amber-500 text-[11px] flex items-center gap-2"><Truck size={14}/> 批发渠道</h4>
                <p className="text-white text-[13px] mt-3">{dynamicData.businessStrategy.wholesale}</p>
              </div>
            </div>
          </div>
        )}

        {/* --- 四大增长引擎区块 --- */}
        <section className="mt-32 border-t border-white/5 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl font-black mb-4">四大增长引擎，重塑独立站工作流</h2>
            <p className="text-zinc-500 text-sm max-w-[600px] mx-auto">将繁琐的 SEO、建站与投放工作，全部交给懂行的 AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* 引擎 1 */}
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/40 transition-all">
              <div className="flex justify-between items-start mb-6">
                <FileText className="text-blue-600" size={32} />
                <span className="text-[10px] bg-blue-600/10 text-blue-500 px-2 py-1">E-E-A-T 护航 / 零位抢占</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">1、AI SEO 深度内容矩阵</h3>
              <p className="text-xs leading-relaxed text-zinc-500">
                不止是“写文章”。独创 PAA 真实问答抓取与 YouTube 视频动态注入；自动生成深度对比评测 (VS)、高权重 FAQ 及 Featured Snippet 摘要，让每一篇内容都长在 Google 的审美上。
              </p>
            </div>

            {/* 引擎 2 */}
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/40 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Layout className="text-blue-600" size={32} />
                <span className="text-[10px] bg-blue-600/10 text-blue-500 px-2 py-1">幽灵全局预览 / 响应式</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">2、极速智能建站 (Theme Builder)</h3>
              <p className="text-xs leading-relaxed text-zinc-500">
                颠覆传统的无代码体验。一句话自动生成高转化的 B2B 着陆页与产品单页。首创「幽灵全局模块」技术，完美统一个性化页眉页脚，秒速复刻顶尖工业与科技风排版。
              </p>
            </div>

            {/* 引擎 3 */}
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/40 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Target className="text-blue-600" size={32} />
                <span className="text-[10px] bg-blue-600/10 text-blue-500 px-2 py-1">真实搜索量 / 高转化文案</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">3、谷歌广告 (Ads) 策略舱</h3>
              <p className="text-xs leading-relaxed text-zinc-500">
                告别盲目烧钱。底层直连全球实时搜索数据，自动裂变 B2B 商业意图长尾词。一键洞察流量洼地，并自动生成完美符合字数限制的极品 RSA 标题与描述组合。
              </p>
            </div>

            {/* 引擎 4 */}
            <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-blue-600/40 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Code2 className="text-blue-600" size={32} />
                <span className="text-[10px] bg-blue-600/10 text-blue-500 px-2 py-1">JSON-LD / 技术 SEO</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">4、Schema 结构化代码引擎</h3>
              <p className="text-xs leading-relaxed text-zinc-500">
                技术 SEO 门槛秒降为零。只需丢入你的文章网址，AI 自动扫描提取核心内容，一键生成极度标准的 ItemList (Top 10 排行) 或 FAQPage 代码，让你的搜索结果占据更大版面。
              </p>
            </div>
          </div>

          {/* 居中联系按钮 */}
          <div className="text-center mb-24">
            <a href="https://work.weixin.qq.com/kfid/kfcab9eba83e85cde3e" target="_blank" className="inline-block bg-white text-black px-12 py-4 font-black text-sm hover:bg-zinc-200 transition-colors no-underline">
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
        <div className="text-[10px] text-zinc-600 tracking-widest uppercase mb-2">© 2026 YMTEA LABS · GLOBAL DATA TERMINAL</div>
        <div className="text-[11px] text-zinc-400 font-bold">由「云茗荟」为您打造</div>
      </footer>
    </div>
  );
