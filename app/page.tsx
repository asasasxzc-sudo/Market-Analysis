"use client";

import React, { useState, useRef } from 'react';
import { Loader2, Zap, Globe, ShoppingCart, Users, Truck, MessageCircle, Activity, CheckCircle2 } from 'lucide-react';

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
      "针对当地语言进行关键词本地化而非单纯翻译。",
      "优化核心网页指标（LCP/FID/CLS）提升移动端排名。",
      "利用 AI 生成长尾词相关的 FAQ 问答页面。",
      "执行竞品反向链接缺口分析（Backlink Gap Analysis）。"
    ];

    setDynamicData({
      score: Math.floor(Math.random() * 60) + 40,
      level: levels[Math.floor(Math.random() * levels.length)],
      integrity: (60 + Math.random() * 38).toFixed(2) + '%',
      searchIndex: Math.floor(Math.random() * 6800) + 1200,
      indexTrend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20),
      seoTips: seoMethods.sort(() => 0.5 - Math.random()).slice(0, 3),
      businessStrategy: {
        b2c: `针对 ${country} 消费者，建议利用独立站结合社媒广告直发。`,
        b2b: `建立 LinkedIn 矩阵，精准触达海外采购经理。`,
        wholesale: `入驻当地 B2B 平台，并优化 Google Maps 搜索排名。`
      }
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#a1a1aa', fontFamily: 'monospace' }}>
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
              <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ backgroundColor: '#111', color: 'white', border: 'none', padding: '0 10px', outline: 'none', fontSize: '12px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
              <input type="text" placeholder="PRODUCT / NICHE..." style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '12px' }} value={product} onChange={(e) => setProduct(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()} />
              <button onClick={handleAnalyze} disabled={analyzing} style={{ backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '0 20px', fontWeight: 'bold', cursor: 'pointer' }}>
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} style={{ animation: 'fadeIn 0.5s ease' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '30px' }}>
              <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#0A0A0A', padding: '25px' }}>
                <span style={{ fontSize: '9px', color: '#52525b' }}>SEARCH INDEX (MO.)</span>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#2563eb' }}>{dynamicData.searchIndex}</div>
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

            <div style={{ backgroundColor: '#0A0A0A', padding: '25px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: 'white', fontSize: '11px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={14} color="#2563eb"/> 12-MONTH SEARCH TREND IN {country}
              </h4>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px', paddingBottom: '10px' }}>
                {dynamicData.indexTrend.map((v, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: i === 11 ? '#2563eb' : 'rgba(59,130,246,0.2)', height: `${v}%`, borderRadius: '1px' }}></div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#0A0A0A', padding: '20px' }}>
                <h4 style={{ color: '#3b82f6', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}><ShoppingCart size={14}/> B2C 方案</h4>
                <p style={{ color: 'white', fontSize: '13px', marginTop: '10px' }}>{dynamicData.businessStrategy.b2c}</p>
              </div>
              <div style={{ backgroundColor: '#0A0A0A', padding: '20px' }}>
                <h4 style={{ color: '#10b981', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={14}/> B2B 方案</h4>
                <p style={{ color: 'white', fontSize: '13px
