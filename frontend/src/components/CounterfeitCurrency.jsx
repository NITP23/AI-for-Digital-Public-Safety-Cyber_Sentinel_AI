import React, { useState } from 'react';

const CounterfeitCurrency = () => {
  const [isScanning, setIsScanning] = useState(false);

  const toggleScanner = () => {
    setIsScanning(!isScanning);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto', height: '100%' }}>
      <header>
        <h1>Currency Authenticator</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Identify fake notes instantly using computer vision.</p>
      </header>

      <div className="glass-panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Camera Viewport Placeholder */}
        <div style={{ 
          flex: 1, 
          background: '#000', 
          borderRadius: '12px', 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px'
        }}>
          {!isScanning ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📷</div>
              <p>Camera is offline. Click below to start scanning.</p>
            </div>
          ) : (
            <>
              {/* Simulated video feed background */}
              <div style={{ position: 'absolute', inset: 0, background: 'url("https://upload.wikimedia.org/wikipedia/commons/4/4e/Indian_Rupee_500.jpg") center/cover', opacity: 0.5, filter: 'grayscale(0.8)' }}></div>
              
              {/* Scanner Grid and Line */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,240,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="animate-pulse" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'var(--neon-cyan)', boxShadow: '0 0 15px var(--neon-cyan)', animation: 'scan 2s linear infinite' }}></div>
              
              {/* Overlay elements */}
              <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'var(--neon-green)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '4px' }}>
                GEO: 28.7041° N, 77.1025° E
              </div>
              <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '4px' }}>
                AI CONFIDENCE: 92%
              </div>
              
              {/* Targeting Reticle */}
              <div style={{ width: '200px', height: '100px', border: '2px solid var(--neon-cyan)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '20px', height: '20px', borderTop: '4px solid var(--neon-cyan)', borderLeft: '4px solid var(--neon-cyan)' }}></div>
                <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '20px', height: '20px', borderTop: '4px solid var(--neon-cyan)', borderRight: '4px solid var(--neon-cyan)' }}></div>
                <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '20px', height: '20px', borderBottom: '4px solid var(--neon-cyan)', borderLeft: '4px solid var(--neon-cyan)' }}></div>
                <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '20px', borderBottom: '4px solid var(--neon-cyan)', borderRight: '4px solid var(--neon-cyan)' }}></div>
              </div>

              <style>{`
                @keyframes scan {
                  0% { top: 0; }
                  50% { top: 100%; }
                  100% { top: 0; }
                }
              `}</style>
            </>
          )}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary" onClick={toggleScanner} style={{ padding: '12px 32px' }}>
            {isScanning ? 'STOP SCANNER' : 'ACTIVATE SCANNER'}
          </button>
          <button className="btn-outline" style={{ padding: '12px 24px' }}>
            UPLOAD IMAGE
          </button>
        </div>

        {/* Results Area (visible only when scanning) */}
        {isScanning && (
          <div style={{ padding: '16px', background: 'rgba(255, 204, 0, 0.1)', border: '1px solid var(--neon-yellow)', borderRadius: '8px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem' }}>🔍</div>
            <div>
              <h4 style={{ color: 'var(--neon-yellow)', margin: '0 0 4px 0' }}>Analysis in Progress...</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Detecting micro-printing, watermark anomalies, and UV fluorescent thread mismatches.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterfeitCurrency;
