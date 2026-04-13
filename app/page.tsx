"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Loader2, Zap, Globe, ShoppingCart, Users, Truck, MessageCircle, Activity, CheckCircle2, Lightbulb } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [country, setCountry] = useState('US');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentHints, setCurrentHints] = useState<string[]>([]);
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

  // 预设的 SEO 优化提示池
  const seoHintPool = [
    "利用 JSON-LD 结构化数据抢占 Google 搜索结果的「零位」展示。",
    "针对 GEO (地理工程优化) 布局关键词，提升本地搜索的转化精度。",
    "采用 EEAT 准则重构 Product Review 内容，建立垂直领域专家权威。",
    "通过 PAA (People Also Ask) 抓取高频问题，构建 FAQ 流量拦截矩阵。",
    "优化移动端 LCP 指标至 2.5s 以内，防止 Google 爬虫降低评分。",
    "在 YouTube 布局长尾词视频并嵌入独立站，实现双平台流量共振。",
    "执行 Backlink Gap 分析，寻找竞争对手尚未覆盖的高权重垂直外链。",
    "利用 AI 生成语义相关的 LSI 关键词，提升页面主题的覆盖广度。",
    "对图片进行 WebP 格式化并添加 Alt 描述，获取 Image Search 流量。",
    "建立内容 Hub 架构，通过内链闭合提升核心转化页面的权重分配。"
  ];

  // 随机抽取提示的函数
  const refreshHints = () => {
    const shuffled = [...seoHintPool].sort(() => 0.5 - Math.random());
    setCurrentHints(shuffled.slice(0, 3));
  };

  useEffect(() => {
    refreshHints();
  }, []);

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
    if (!product.trim()) {
      alert("请输入内容");
      return;
    }
    setAnalyzing(true);
    setShowResult(false);
    refreshHints(); // 每次分析时也刷新一下提示
    
    await runDiagnostics();

    const levels = ['OPTIMAL', 'HIGH POTENTIAL', 'SATURATED', 'STABLE MARKET', 'EMERGING', 'COMPETITIVE'];
    
    setDynamicData({
      score: Math.floor(Math.random() * 60) + 40,
      level: levels[Math.floor(Math.random() * levels.length)],
      integrity: (60 + Math.random() * 38).toFixed(2) + '%',
      searchIndex: Math.floor(Math.random() * 6800) + 1200,
      indexTrend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20),
      seoTips: [...seoHintPool].sort(() => 0.5 - Math.random()).slice(0, 3),
      businessStrategy: {
        b2c: `针对 ${country} 消费者，建议利用独立站结合社媒广告直发。`,
        b2b: `建立 LinkedIn 矩阵，精准触达海外采购经理。`,
        wholesale: `入驻当地 B2B 平台，并优化 Google Maps 搜索排名。`
      }
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
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
        {/* 头部搜索区 */}
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
              <input 
                type="text" 
                placeholder="PRODUCT / NICHE..." 
                style={{ flex: 1, backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '12px' }} 
                value={product} 
                onChange={(e) => setProduct(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()} 
              />
              <button onClick={handleAnalyze} disabled={analyzing} style={{ backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '0 20px', fontWeight: 'bold', cursor: 'pointer' }}>
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN'}
              </button>
            </div>
          </div>
        </section>

        {showResult && (
          <div ref={resultRef} style={{ marginBottom: '60px' }}>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
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
          </div>
        )}

        {/* --- 新增：SEO 随机优化建议方案 --- */}
        <section style={{ marginTop: '120px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Lightbulb size={18} color="#2563eb" />
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'white', letterSpacing: '0.1em' }}>SEO STRATEGIC ADVISORY / 优化建议方案</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
            {currentHints.map((hint, idx) => (
              <div key={idx} style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(37, 99, 235, 0.15)', padding: '15px', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-8px', right: '10px', backgroundColor: '#050505', padding: '0 5px', color: '#2563eb', fontSize: '9px' }}>TIP_{idx + 1}</span>
                <p style={{ color: '#d1d1d6', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>{hint}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 品牌实力看板 --- */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '10px' }}>由「云茗荟」倾力打造</h2>
            <p style={{ color: '#3b82f6', fontSize: '14px', fontStyle: 'italic' }}>"因为懂 SEO，所以更懂你需要什么。"</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { t: "拒绝假大空", d: "构建全球品牌阵地，云茗荟出口十余年，用最真实的数据说话。" },
              { t: "极致的能力", d: "给会员行业链接，商务引擎，供需匹配。" },
              { t: "100% 为独立站定制", d: "所有输出逻辑、建站 UI 风格全为 ToB 外贸询盘场景深度调优。" },
              { t: "同享物流渠道", d: "稳定、快速、安全、完善、透明的物流体系。" },
              { t: "SEO、GEO优化", d: "告别盲目烧钱，深度内容矩阵，打破流量天花板。" },
              { t: "会员免费活动", d: "每周6天，茶道、非遗刻花、宋代点茶、高端茶圈活动享不停。" },
              { t: "门店免品权", d: "会员每日可到任意门店免费品茶。" }
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '20px', borderLeft: '2px solid #2563eb' }}>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle2 size={14} color="#2563eb" /> {item.t}
                </div>
                <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#71717a' }}>{item.d}</p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
             <a href="https://work.weixin.qq.com/kfid/kfcab9eba83e85cde3e" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '16px 40px', fontSize: '14px', fontWeight: '900', textDecoration: 'none', textTransform: 'uppercase' }}>
               立即咨询 / 联系我们
             </a>
          </div>
        </section>
      </main>

      {/* 底部导航 */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', textAlign: 'center', marginTop: '60px' }}>
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
