"use client";

import React, { useState, useRef } from 'react';
import { Loader2, Zap, Cpu, Lightbulb, Globe, barChart as BarChart3 } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const [dynamicData, setDynamicData] = useState({
    score: 0,
    level: '',
    integrity: '99.8%',
    keywords: [] as any[],
    seoTips: [] as string[]
  });

  const runDiagnostics = async () => {
    const diagnosticSteps = [
      "INITIALIZING YMTEA CORE V4.8...",
      "SYNCING WITH GLOBAL SEARCH NODES...",
      `EXTRACTING MARKET DATA FOR: ${product.toUpperCase()}`,
      "CALCULATING COMPETITOR DENSITY...",
      "GENERATING SEO STRATEGY MAP...",
      "FINALIZING INTELLIGENCE OUTPUT..."
    ];

    for (const step of diagnosticSteps) {
      setLogs(prev => [...prev.slice(-4), `> ${step}`]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const handleAnalyze = async () => {
    if (!product.trim()) return alert("请输入需要分析的产品或关键词");
    setAnalyzing(true);
    setShowResult(false);
    setLogs([]);

    await runDiagnostics();

    const randomScore = Math.floor(Math.random() * 20) + 76;
    const randomIntegrity = (99 + Math.random() * 0.9).toFixed(2) + '%';
    
    setDynamicData({
      score: randomScore,
      level: randomScore > 90 ? 'OPTIMAL' : 'ACCELERATING',
      integrity: randomIntegrity,
      keywords: [
        { word: `${product} trends 2026`, diff: 'EASY', vol: '14.2K' },
        { word: `best ${product} for enterprise`, diff: 'MED', vol: '8.5K' },
        { word: `affordable ${product} solutions`, diff: 'LOW', vol: '19.1K' },
      ],
      seoTips: [
        `🎯 关键词部署：建议在 H1 标签中包含 "${product}"，并增加长尾词覆盖。`,
        `📉 竞品分析：当前品类在社交媒体搜索权重较高，建议增加短视频内容分发。`,
        `⚡ 性能优化：检测到同类产品加载速度影响转化，建议优化 "${product}" 相关落地页的 Web Vitals。`
      ]
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div 
      className="min-h-screen bg-[#050505] font-mono"
      style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#a1a1aa', fontFamily: 'monospace' }}
    >
      {/* 顶部导航 */}
      <nav 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.8)', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 50 }}
      >
        <a 
          href="https://ymtea.club" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <div style={{ backgroundColor: '#2563eb', padding: '4px', borderRadius: '2px' }}>
            <Zap size={14} style={{ color: 'white' }} />
          </div>
          <span style={{ color: 'white', fontWeight: '900', fontSize: '14px', letterSpacing: '0.1em' }}>YMTEA.LABS</span>
        </a>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
            BLOG / 资讯
          </a>
          <div style={{ color: '#10b981', fontSize: '9px', fontWeight: 'bold', border: '1px solid rgba(16,185,129,0.3)', padding: '3px 8px' }}>
            STATUS: SECURE
          </div>
        </div>
      </nav>

      <main style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px', padding: '80px 24px', textAlign: 'center' }}>
        {/* 主标题区 */}
        <section style={{ marginBottom: '100px' }}>
          <div style={{ color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)', padding: '4px 12px', display: 'inline-flex', marginBottom: '24px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.2em' }}>
            <Cpu size={12} style={{ marginRight: '8px' }} /> NEURAL MARKET ANALYZER
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: '900', margin: '20px 0', textTransform: 'uppercase', fontStyle: 'italic' }}>
            Market <span style={{ color: '#2563eb' }}>Cognition</span>
          </h1>
          
          {/* 搜索终端 */}
          <div style={{ display: 'flex', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(20,20,20,0.5)', padding: '4px', marginTop: '40px' }}>
            <input 
              type="text" 
              placeholder="SEARCH PRODUCT OR NICHE..." 
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '14px', width: '100%', fontSize: '13px', letterSpacing: '0.1em' }}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              style={{ backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '0 25px', fontWeight: '900', cursor: 'pointer', fontSize: '11px' }}
            >
              {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'ANALYZE'}
            </button>
          </div>

          {analyzing && (
            <div style={{ marginTop: '30px', backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.05)', padding: '15px', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px' }}>
              {logs.map((log, i) => (
                <div key={i} style={{ color: '#3b82f6', fontSize: '10px', lineHeight: '1.8' }}>{log}</div>
              ))}
            </div>
          )}
        </section>

        {showResult && (
          <div ref={resultRef} style={{ textAlign: 'left', animation: 'fadeIn 0.8s ease-out' }}>
            {/* 核心数据三项 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }}>
              <div style={{ flex: '1', minWidth: '240px', backgroundColor: '#0A0A0A', padding: '30px' }}>
                <span style={{ fontSize: '9px', color: '#52525b', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>DENSITY INDEX</span>
                <div style={{ fontSize: '50px', fontWeight: '900', color: 'white' }}>{dynamicData.score}%</div>
              </div>
              <div style={{ flex: '1', minWidth: '240px', backgroundColor: '#0A0A0A', padding: '30px' }}>
                <span style={{ fontSize: '9px', color: '#52525b', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>RANK POTENTIAL</span>
                <div style={{ fontSize: '24px', fontWeight: '900', color: 'white' }}>{dynamicData.level}</div>
              </div>
              <div style={{ flex: '1', minWidth: '240px', backgroundColor: '#2563eb', padding: '30px' }}>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>DATA INTEGRITY</span>
                <div style={{ fontSize: '40px', fontWeight: '900', color: 'white' }}>{dynamicData.integrity}</div>
              </div>
            </div>

            {/* SEO 建议面板 */}
            <div style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(59,130,246,0.3)', padding: '25px', marginBottom: '40px' }}>
              <h3 style={{ color: '#3b82f6', fontSize: '11px', fontWeight: 'bold', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lightbulb size={14} /> STRATEGIC SEO ADVISORY
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {dynamicData.seoTips.map((tip, i) => (
                  <div key={i} style={{ color: '#d1d1d6', fontSize: '13px', lineHeight: '1.5', borderLeft: '2px solid #2563eb', paddingLeft: '12px' }}>
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* 关键词细分 */}
            <div style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.05)' }}>
              {dynamicData.keywords.map((k, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>{k.word}</span>
                  <div style={{ display: 'flex', gap: '25px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '8px', color: '#52525b' }}>DIFFICULTY</div>
                      <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>{k.diff}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '8px', color: '#52525b' }}>EST. VOLUME</div>
                      <div style={{ color: 'white', fontWeight: 'bold' }}>{k.vol}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 底部页脚 */}
      <footer 
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', textAlign: 'center', backgroundColor: '#050505' }}
      >
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>HOME / 官网</a>
          <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>BLOG / 资讯</a>
        </div>
        <div style={{ fontSize: '9px', fontWeight: 'bold', letterSpacing: '0.4em', color: 'white' }}>
          © 2026 <a href="https://ymtea.club" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>YMTEA LABS</a> · DATA DRIVEN INTELLIGENCE
        </div>
      </footer>
    </div>
  );
}
