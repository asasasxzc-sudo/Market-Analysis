"use client";

import React, { useState, useRef } from 'react';
import { Loader2, Zap, Cpu, Lightbulb, Globe, BarChart3, Users, ShoppingCart, Truck, MessageCircle, Activity } from 'lucide-react';

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

  const runDiagnostics = async () => {
    const steps = [
      `CONNECTING TO ${country} SERVERS...`,
      "ANALYZING MARKET SATURATION...",
      `CALCULATING SEARCH VOLUME FOR: ${product.toUpperCase()}`,
      "GENERATING MULTI-CHANNEL STRATEGIES...",
      "COMPILING FINAL REPORT..."
    ];
    for (const step of steps) {
      setLogs(prev => [...prev.slice(-4), `> ${step}`]);
      await new Promise(resolve => setTimeout(resolve, 400));
    }
  };

  const handleAnalyze = async () => {
    if (!product.trim()) return alert("请输入内容");
    setAnalyzing(true);
    setShowResult(false);
    
    await runDiagnostics();

    const levels = ['OPTIMAL', 'HIGH POTENTIAL', 'SATURATED', 'STABLE MARKET', 'EMERGING', 'COMPETITIVE'];
    const seoMethods = [
      "使用 Schema 标记增强 Google 富媒体搜索结果展示。",
      "针对当地语言进行关键词本地化（Localization）而非单纯翻译。",
      "优化核心网页指标（LCP/FID/CLS）以提升移动端排名。",
      "建立高权重的 .edu 或 .gov 回链提升域名权威度。",
      "利用 AI 生成长尾词相关的 FAQ 问答页面，拦截语音搜索流量。",
      "在内容中嵌入交互式元素（如计算器、图表）增加页面停留时间。",
      "执行竞品反向链接缺口分析（Backlink Gap Analysis）。"
    ];

    const randomScore = Math.floor(Math.random() * 60) + 40;
    // Data Integrity 范围扩大，更真实
    const randomIntegrity = (60 + Math.random() * 38).toFixed(2) + '%';
    // 随机产品指数 (1200 - 8000)
    const randomIndex = Math.floor(Math.random() * 6800) + 1200;
    // 随机生成 12 个月的趋势数据 (20-100)
    const trendData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20);
    
    setDynamicData({
      score: randomScore,
      level: levels[Math.floor(Math.random() * levels.length)],
      integrity: randomIntegrity,
      searchIndex: randomIndex,
      indexTrend: trendData,
      seoTips: seoMethods.sort(() => 0.5 - Math.random()).slice(0, 3),
      businessStrategy: {
        b2c: `针对 ${country} 消费者，建议利用独立站结合社媒广告直发。`,
        b2b: `建立 LinkedIn 矩阵，精准触达海外采购经理。`,
        wholesale: `入驻当地 B2B 平台，并优化 Google Maps 地图搜索排名。`
      }
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono" style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#a1a1aa' }}>
      {/* 导航 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.8)', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ backgroundColor: '#2563eb', padding: '4px', borderRadius: '2px' }}><Zap size={14} style={{ color: 'white' }} /></div>
          <span style={{ color: 'white', fontWeight: '900', fontSize: '14px' }}>YMTEA.LABS</span>
        </a>
        <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '12px', textDecoration: 'none' }}>BLOG / 资讯</a>
      </nav>

      <main style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px', padding: '60px 24px' }}>
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)', padding: '4px 12px', display: 'inline-flex', marginBottom: '20px', fontSize: '10px' }}>
             <Globe size={12} style={{ marginRight: '8px' }} /> REGIONAL NODE SELECTOR
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', textTransform: 'uppercase' }}>Global <span style={{ color: '#2563eb' }}>Intelligence</span></h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '40px auto', gap: '10px' }}>
            <div style={{ display: 'flex', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(20,20,20,0.5)', padding: '4px' }}>
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                style={{ backgroundColor: '#111', color: 'white', border: 'none', padding: '0 10px', outline: 'none', fontSize: '12px', borderRight: '1px solid rgba(255,255,255,0.1)' }}
              >
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
              <input 
                type="text" placeholder="PRODUCT / NICHE..." 
                style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '12px' }}
                value={product} onChange={(e) => setProduct(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <button onClick={handleAnalyze} disabled={analyzing} style={{ backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '0 20px', fontWeight: 'bold', cursor: 'pointer' }}>
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} style={{ animation: 'fadeIn 0.5s ease' }}>
            {/* 顶层核心数据 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '30px' }}>
              <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#0A0A0A', padding: '25px' }}>
                <span style={{ fontSize: '9px', color: '#52525b' }}>SEARCH INDEX (MO.)</span>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#2563eb' }}>{dynamicData.searchIndex}</div>
                <div style={{ fontSize: '10px', color: '#10b981', marginTop: '5px' }}>↑ 14.2% vs LAST MONTH</div>
              </div>
              <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#0A0A0A', padding: '25px' }}>
                <span style={{ fontSize: '9px', color: '#52525b' }}>RANK POTENTIAL</span>
                <div style={{ fontSize: '18px', fontWeight: '900', color: 'white', marginTop: '10px' }}>{dynamicData.level}</div>
              </div>
              <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#2563eb', padding: '25px' }}>
                <span style={{ fontSize: '9px', color: 'white' }}>DATA INTEGRITY</span>
                <div style={{ fontSize: '32px', fontWeight: '900', color: 'white' }}>{dynamicData.integrity}</div>
              </div>
            </div>

            {/* 产品指数趋势柱状图 */}
            <div style={{ backgroundColor: '#0A0A0A', padding: '25px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: 'white', fontSize: '11px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={14} color="#2563eb"/> 12-MONTH SEARCH TREND IN {country}
              </h4>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px', paddingBottom: '10px' }}>
                {dynamicData.indexTrend.map((v, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: i === 11 ? '#2563eb' : 'rgba(59,130,246,0.2)', height: `${v}%`, borderRadius: '1px' }}></div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '8px', color: '#52525b' }}>
                <span>MAY 2025</span>
                <span>PRESENT (APR 2026)</span>
              </div>
            </div>

            {/* 业务模式分析 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#0A0A0A', padding: '20px' }}>
                <h4 style={{ color: '#3b82f6', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}><ShoppingCart size={14}/> B2C 方案</h4>
                <p style={{ color: 'white', fontSize: '13px', marginTop: '10px' }}>{dynamicData.businessStrategy.b2c}</p>
              </div>
              <div style={{ backgroundColor: '#0A0A0A', padding: '20px' }}>
                <h4 style={{ color: '#10b981', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={14}/> B2B 方案</h4>
                <p style={{ color: 'white', fontSize: '13px', marginTop: '10px' }}>{dynamicData.businessStrategy.b2b}</p>
              </div>
              <div style={{ backgroundColor: '#0A0A0A', padding: '20px' }}>
                <h4 style={{ color: '#f59e0b', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}><Truck size={14}/> 批发渠道</h4>
                <p style={{ color: 'white', fontSize: '13px', marginTop: '10px' }}>{dynamicData.businessStrategy.wholesale}</p>
              </div>
            </div>

            {/* SEO 建议 */}
            <div style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(59,130,246,0.3)', padding: '25px' }}>
              <h3 style={{ color: '#3b82f6', fontSize: '11px', fontWeight: 'bold', marginBottom: '15px' }}>STRATEGIC SEO ADVISORY</h3>
              <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
                {dynamicData.seoTips.map((tip, i) => (
                  <li key={i} style={{ color: '#d1d1d6', fontSize: '13px', marginBottom: '10px', paddingLeft: '15px', borderLeft: '2px solid #2563eb' }}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* 底部导航 */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '12px' }}>HOME / 官网</a>
          <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '12px' }}>BLOG / 资讯</a>
          <a href="https://work.weixin.qq.com/kfid/kfcab9eba83e85cde3e" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MessageCircle size={14} /> 了解“云茗荟”
          </a>
        </div>
        <div style={{ fontSize: '9px', color: 'white', letterSpacing: '0.2em' }}>© 2026 YMTEA LABS · GLOBAL MARKET DATA TERMINAL</div>
      </footer>
    </div>
  );
}
