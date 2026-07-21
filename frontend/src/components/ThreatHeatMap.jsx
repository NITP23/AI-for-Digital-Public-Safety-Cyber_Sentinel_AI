import React, { useState } from 'react';

const ThreatHeatMap = () => {
  const [selectedCity, setSelectedCity] = useState('mumbai');

  const cities = [
    { id: 'mumbai', name: 'Mumbai', risk: 'VERY HIGH', riskLevel: 98, color: 'var(--neon-red)', x: 24, y: 68, cases: 3420, officers: 45, suggestion: 'Deploy 20 additional cyber cell officers. Activate real-time call interception in identified hotspots.' },
    { id: 'delhi', name: 'Delhi NCR', risk: 'MEDIUM', riskLevel: 72, color: 'var(--neon-yellow)', x: 35, y: 28, cases: 1890, officers: 32, suggestion: 'Increase monitoring on VOIP number registrations. Coordinate with Haryana police for cross-border operations.' },
    { id: 'lucknow', name: 'Lucknow', risk: 'HIGH', riskLevel: 85, color: 'var(--neon-red)', x: 45, y: 35, cases: 2150, officers: 18, suggestion: 'Establish dedicated cyber fraud unit. Focus on UPI-based scams targeting elderly population.' },
    { id: 'jamtara', name: 'Jamtara', risk: 'CRITICAL', riskLevel: 99, color: 'var(--neon-red)', x: 55, y: 42, cases: 5670, officers: 12, suggestion: 'National priority zone. Deploy inter-state task force. Shut down identified SIM farms and VOIP centers.' },
    { id: 'mewat', name: 'Mewat', risk: 'HIGH', riskLevel: 88, color: 'var(--neon-red)', x: 33, y: 33, cases: 2890, officers: 8, suggestion: 'Coordinate with Rajasthan STF. Focus on sextortion and dating app fraud rings.' },
    { id: 'bengaluru', name: 'Bengaluru', risk: 'MEDIUM', riskLevel: 65, color: 'var(--neon-yellow)', x: 30, y: 78, cases: 1230, officers: 28, suggestion: 'Monitor tech support scam operations. Coordinate with IT companies for domain takedowns.' },
    { id: 'hyderabad', name: 'Hyderabad', risk: 'LOW', riskLevel: 45, color: 'var(--neon-green)', x: 35, y: 70, cases: 780, officers: 22, suggestion: 'Maintain current deployment. Focus on awareness campaigns in rural areas.' },
    { id: 'kolkata', name: 'Kolkata', risk: 'MEDIUM', riskLevel: 68, color: 'var(--neon-yellow)', x: 60, y: 42, cases: 1560, officers: 15, suggestion: 'Increase cyber patrol presence. Target fake loan app networks.' },
  ];

  const selectedCityData = cities.find(c => c.id === selectedCity);

  const predictions = [
    { label: 'Digital Arrest Scams', trend: '↑ 34%', period: 'Next 30 days', risk: 'HIGH', color: 'var(--neon-red)' },
    { label: 'UPI Fraud', trend: '↑ 12%', period: 'Next 30 days', risk: 'MEDIUM', color: 'var(--neon-yellow)' },
    { label: 'Phishing Websites', trend: '↑ 45%', period: 'Next 30 days', risk: 'VERY HIGH', color: 'var(--neon-red)' },
    { label: 'Deepfake Voice Scams', trend: '↑ 67%', period: 'Next 30 days', risk: 'CRITICAL', color: 'var(--neon-red)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Threat Heat Map</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Module 5 — Geospatial risk visualization & AI-powered police deployment</p>
        </div>
        <div className="glass-panel" style={{ padding: '8px 16px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="animate-pulse" style={{ color: 'var(--neon-green)' }}>●</span> Crime Prediction Engine Active
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', flex: 1, minHeight: 0 }}>

        {/* Map View */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '0.9rem' }}>🗺️ India — Fraud Risk Density</h3>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.7rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-red)', display: 'inline-block' }}></span> Critical/High</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-yellow)', display: 'inline-block' }}></span> Medium</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', display: 'inline-block' }}></span> Low</span>
            </div>
          </div>

          {/* India Map Simulation */}
          <div style={{
            flex: 1, position: 'relative', background: 'rgba(0,0,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {/* Map outline (simplified India shape) */}
            <svg viewBox="0 0 100 100" style={{ width: '80%', height: '90%', opacity: 0.15 }}>
              <path d="M30,5 L45,5 L50,10 L55,8 L60,12 L58,18 L62,22 L65,20 L70,25 L68,30 L65,28 L60,32 L62,38 L58,42 L60,48 L55,55 L58,60 L55,65 L50,70 L45,75 L40,80 L35,85 L30,90 L28,85 L25,80 L22,75 L20,68 L18,60 L20,55 L22,48 L20,42 L22,35 L25,30 L22,25 L25,18 L28,12 Z" fill="none" stroke="var(--neon-cyan)" strokeWidth="0.5"/>
            </svg>

            {/* City Markers */}
            {cities.map(city => (
              <div
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                style={{
                  position: 'absolute', left: `${city.x}%`, top: `${city.y}%`,
                  transform: 'translate(-50%, -50%)', cursor: 'pointer', zIndex: 2,
                  textAlign: 'center'
                }}
              >
                {/* Glow / Heatmap Effect */}
                <div style={{
                  width: selectedCity === city.id ? '60px' : '40px',
                  height: selectedCity === city.id ? '60px' : '40px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${city.color === 'var(--neon-red)' ? 'rgba(255,51,102,0.4)' : city.color === 'var(--neon-yellow)' ? 'rgba(255,204,0,0.3)' : 'rgba(0,255,102,0.3)'} 0%, transparent 70%)`,
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.3s'
                }} className="animate-pulse"></div>

                <div style={{
                  width: selectedCity === city.id ? '14px' : '10px',
                  height: selectedCity === city.id ? '14px' : '10px',
                  borderRadius: '50%',
                  background: city.color,
                  border: selectedCity === city.id ? '2px solid white' : 'none',
                  boxShadow: `0 0 12px ${city.color}`,
                  position: 'relative', zIndex: 3,
                  margin: '0 auto',
                  transition: 'all 0.3s'
                }}></div>

                <div style={{
                  marginTop: '4px', fontSize: '0.6rem', fontFamily: 'var(--font-display)',
                  color: selectedCity === city.id ? 'white' : 'var(--text-muted)',
                  whiteSpace: 'nowrap', position: 'relative', zIndex: 3,
                  background: selectedCity === city.id ? 'rgba(0,0,0,0.6)' : 'transparent',
                  padding: selectedCity === city.id ? '2px 6px' : '0',
                  borderRadius: '4px'
                }}>
                  {city.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'auto' }}>

          {/* Selected City Info */}
          <div className="glass-panel" style={{
            padding: '20px',
            border: `1px solid ${selectedCityData?.color}`,
            background: selectedCityData?.color === 'var(--neon-red)' ? 'rgba(255,51,102,0.06)' : selectedCityData?.color === 'var(--neon-yellow)' ? 'rgba(255,204,0,0.06)' : 'rgba(0,255,102,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>{selectedCityData?.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Risk Assessment</div>
              </div>
              <span style={{
                padding: '4px 12px', borderRadius: '12px', fontSize: '0.7rem',
                fontFamily: 'var(--font-display)', letterSpacing: '1px',
                background: selectedCityData?.color === 'var(--neon-red)' ? 'rgba(255,51,102,0.2)' : selectedCityData?.color === 'var(--neon-yellow)' ? 'rgba(255,204,0,0.2)' : 'rgba(0,255,102,0.2)',
                color: selectedCityData?.color
              }}>
                {selectedCityData?.risk}
              </span>
            </div>

            {/* Risk Meter */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                <span>Risk Level</span>
                <span style={{ color: selectedCityData?.color, fontFamily: 'var(--font-display)' }}>{selectedCityData?.riskLevel}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${selectedCityData?.riskLevel}%`, height: '100%', borderRadius: '4px',
                  background: `linear-gradient(90deg, var(--neon-green), var(--neon-yellow), var(--neon-red))`,
                  transition: 'width 0.5s'
                }}></div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--neon-red)' }}>{selectedCityData?.cases.toLocaleString()}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Active Cases</div>
              </div>
              <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--neon-cyan)' }}>{selectedCityData?.officers}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Officers Deployed</div>
              </div>
            </div>
          </div>

          {/* AI Deployment Suggestion */}
          <div className="glass-panel" style={{ padding: '20px', border: '1px solid var(--neon-purple)', background: 'rgba(176, 38, 255, 0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>🧠</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--neon-purple)', letterSpacing: '1px' }}>AI DEPLOYMENT RECOMMENDATION</div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              {selectedCityData?.suggestion}
            </p>
          </div>

          {/* Crime Predictions */}
          <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '14px' }}>🔮 AI CRIME PREDICTIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {predictions.map((pred, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)',
                  borderLeft: `3px solid ${pred.color}`
                }}>
                  <div>
                    <div style={{ fontSize: '0.85rem' }}>{pred.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{pred.period}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: pred.color }}>{pred.trend}</div>
                    <div style={{
                      fontSize: '0.6rem', padding: '1px 8px', borderRadius: '8px', marginTop: '2px',
                      background: pred.color === 'var(--neon-red)' ? 'rgba(255,51,102,0.15)' : 'rgba(255,204,0,0.15)',
                      color: pred.color, fontFamily: 'var(--font-display)'
                    }}>{pred.risk}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="btn-primary" style={{ padding: '12px', textAlign: 'center', width: '100%', fontSize: '0.8rem' }}>
            📊 GENERATE DEPLOYMENT PLAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreatHeatMap;
