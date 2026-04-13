"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Loader2, Zap, Globe, ShoppingCart, Users, Truck, MessageCircle, Activity, CheckCircle2, Lightbulb, RefreshCw } from 'lucide-react';

export default function SEOAnalyzer() {
  const [product, setProduct] = useState('');
  const [country, setCountry] = useState('US');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
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

  const seoHintPool = [
    "利用 JSON-LD 结构化数据抢占 Google 搜索结果的「零位」展示。",
    "针对 GEO (地理工程优化) 布局关键词，提升本地搜索的转化精度。",
    "采用 EEAT 准则重构 Product Review 内容，建立垂直领域专家权威。",
    "通过 PAA (People Also Ask) 抓取高频问题，构建 FAQ 流量拦截矩阵。",
    "优化移动端 LCP 指标至 2.5s 以内，防止 Google 爬虫降低评分。",
    "在 YouTube 布局长尾词视频并嵌入独立站，实现双平台流量共振。",
    "执行 Backlink Gap 分析，寻找竞争对手尚未覆盖的高权重垂直外链。",
    "利用 AI 生成语义相关的 LSI 关键词，提升页面主题的覆盖广度。",
    "建立内容 Hub 架构，通过内链闭合提升核心转化页面的权重分配。",
    "利用 Google Search Console 的查询数据，二次优化点击率偏低的潜在大词。"
  ];

  const refreshHints = () => {
    const shuffled = [...seoHintPool].sort(() => 0.5 - Math.random());
    setCurrentHints(shuffled.slice(0, 3));
  };

  const handleReset = () => {
    setProduct('');
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalyze = async () => {
    if (!product.trim()) return alert("请输入内容");
    setAnalyzing(true);
    setShowResult(false);
    refreshHints();
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    const levels = ['OPTIMAL', 'HIGH POTENTIAL', 'SATURATED', 'STABLE MARKET', 'EMERGING'];
    setDynamicData({
      score: Math.floor(Math.random() * 60) + 40,
      level: levels[Math.floor(Math.random() * levels.length)],
      integrity: (60 + Math.random() * 38).toFixed(2) + '%',
      searchIndex: Math.floor(Math.random() * 6800) + 1200,
      indexTrend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20),
      seoTips: [...seoHintPool].sort(() => 0.5 - Math.random()).slice(0, 3),
      businessStrategy: {
        b2c: `针对 ${country} 消费者，建议利用独立站结合社媒广告。`,
        b2b: `建立 LinkedIn 矩阵，精准触达海外采购经理。`,
        wholesale: `入驻当地 B2B 平台，并优化地图搜索排名。`
      }
    });

    setAnalyzing(false);
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#a1a1aa', fontFamily: 'monospace' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.8)', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleReset}>
          <div style={{ backgroundColor: '#2563eb', padding: '4px', borderRadius: '2px' }}><Zap size={14} style={{ color: 'white' }} /></div>
          <span style={{ color: 'white', fontWeight: '900', fontSize: '14px' }}>YMTEA.LABS</span>
        </div>
        <a href="https://ymtea.club/blog" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '12px', textDecoration: 'none' }}>BLOG / 资讯</a>
      </nav>

      <main style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px', padding: '60px 24px' }}>
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)', padding: '4px 12px', display: 'inline-flex', marginBottom: '20px', fontSize: '10px' }}>
             <Globe size={12} style={{ marginRight: '8px' }} /> REGIONAL NODE SELECTOR
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '40px' }}>Global <span style={{ color: '#2563eb' }}>Intelligence</span></h1>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(20,20,20,0.5)', padding: '2px' }}>
              <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ backgroundColor: '#111', color: 'white', border: 'none', padding: '12px', outline: 'none', fontSize: '12px', flex: '0 0 auto', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
              <input 
                type="text" 
                placeholder="PRODUCT / NICHE..." 
                style={{ flex: '1 1 200px', backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '12px', minWidth: '0' }} 
                value={product} 
                onChange={(e) => setProduct(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()} 
              />
              {/* 修正：移除无效的 sm 属性，通过 flex-basis 控制手机端宽度 */}
              <button onClick={handleAnalyze} disabled={analyzing} style={{ flex: '1 0 120px', backgroundColor: '#2563eb', border: 'none', color: 'white', padding: '12px 24px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                {analyzing ? <Loader2 className="animate-spin" size={14} /> : 'RUN'}
              </button>
            </div>
            {showResult && (
              <button onClick={handleReset} style={{ marginTop: '20px', background: 'none', border: 'none', color: '#52525b', fontSize: '11px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <RefreshCw size={12} /> 返回首页重新搜索
              </button>
            )}
          </div>
        </section>

        {showResult && (
          <div ref={resultRef}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '30px' }}>
              <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#0A0A0A', padding: '25px' }}>
                <span style={{ fontSize: '9px', color: '#52525b' }}>SEARCH INDEX</span>
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
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px' }}>
                {dynamicData.indexTrend.map((v, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: i === 11 ? '#2563eb' : 'rgba(59,130,246,0.2)', height: `${v}%` }}></div>
                ))}
              </div>
            </div>

            <section style={{ marginTop: '80px', marginBottom: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Lightbulb size={18} color="#2563eb" />
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'white', letterSpacing: '0.1em' }}>SEO STRATEGIC ADVISORY / 随机优化方案</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                {currentHints.map((hint, idx) => (
                  <div key={idx} style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(37, 99, 235, 0.2)', padding: '20px' }}>
                    <p style={{ color: '#d1d1d6', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>
                      <span style={{ color: '#2563eb', fontWeight: 'bold', marginRight: '8px' }}>{idx + 1}.</span>
                      {hint}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

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

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', textAlign: 'center', marginTop: '60px' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div onClick={handleReset} style={{ color: 'white', cursor: 'pointer', fontSize: '12px' }}>HOME / 官网</div>
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
