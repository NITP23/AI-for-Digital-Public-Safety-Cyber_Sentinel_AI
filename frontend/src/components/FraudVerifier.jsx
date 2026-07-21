import React, { useState } from 'react';

const FraudVerifier = () => {
  const [activeInput, setActiveInput] = useState(null); // screenshot, voice, website, upi
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState(null);

  const inputTypes = [
    { id: 'screenshot', icon: '📸', label: 'Screenshot', desc: 'Upload a screenshot of suspicious message or app', placeholder: 'screenshot_fraud.png' },
    { id: 'voice', icon: '🎤', label: 'Voice Recording', desc: 'Upload audio of a suspicious phone call', placeholder: 'suspicious_call.mp3' },
    { id: 'website', icon: '🌐', label: 'Website URL', desc: 'Paste a suspicious website link to verify', placeholder: 'https://suspicious-bank-update.com' },
    { id: 'upi', icon: '💳', label: 'UPI ID', desc: 'Enter a UPI ID to check against fraud database', placeholder: 'scammer@okaxis' },
  ];

  const mockResults = {
    screenshot: {
      risk: 95, verdict: 'PHISHING MESSAGE', type: 'SMS Phishing',
      reasons: ['Contains fake bank URL', 'Urgent language pattern detected', 'Requests PAN/Aadhaar', 'Sender ID spoofed'],
      action: 'Do NOT click any links. Block this number immediately.'
    },
    voice: {
      risk: 92, verdict: 'DIGITAL ARREST SCAM', type: 'Voice Fraud',
      reasons: ['AI-generated voice detected (deepfake)', 'Impersonating police officer', 'Threatening arrest', 'Demanding money transfer'],
      action: 'Disconnect immediately. Real police never demand money over phone.'
    },
    website: {
      risk: 98, verdict: 'FAKE BANKING PORTAL', type: 'Phishing Website',
      reasons: ['Domain registered 2 days ago', 'SSL certificate mismatch', 'Mimics SBI login page', 'Data exfiltration scripts found'],
      action: 'Do NOT enter any credentials. Report to cert-in.org.in'
    },
    upi: {
      risk: 88, verdict: 'FLAGGED UPI ID', type: 'Mule Account',
      reasons: ['Linked to 47 fraud reports', 'Connected to Cluster #OP-PHANTOM', 'Multiple state complaints', 'High-frequency transactions'],
      action: 'Do NOT transfer money. This UPI ID is linked to organized fraud.'
    },
  };

  const startVerification = (type) => {
    setActiveInput(type);
    setVerifying(true);
    setResult(null);
    setTimeout(() => {
      setVerifying(false);
      setResult(mockResults[type]);
    }, 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      <header>
        <h1 style={{ fontSize: '2rem' }}>Fraud Verifier</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Module 2 — Upload any suspicious content for instant AI verification</p>
      </header>

      {/* Input Type Selection */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {inputTypes.map(type => (
          <div
            key={type.id}
            className="glass-panel"
            onClick={() => startVerification(type.id)}
            style={{
              padding: '24px 20px', textAlign: 'center', cursor: 'pointer',
              transition: 'all 0.3s',
              border: activeInput === type.id ? '1px solid var(--neon-cyan)' : '1px solid var(--panel-border)',
              boxShadow: activeInput === type.id ? 'var(--glow-cyan)' : 'none',
              transform: activeInput === type.id ? 'translateY(-4px)' : 'none',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{type.icon}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', marginBottom: '6px' }}>{type.label}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{type.desc}</div>
          </div>
        ))}
      </div>

      {/* Verification Area */}
      <div style={{ display: 'grid', gridTemplateColumns: result ? '1fr 1fr' : '1fr', gap: '20px', flex: 1, minHeight: 0 }}>

        {/* Upload / Input Panel */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {!activeInput ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px', opacity: 0.3 }}>🔍</div>
              <p style={{ fontSize: '1.1rem' }}>Select an input type above to begin verification</p>
              <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>AI will analyze your submission using NLP, Computer Vision, and Threat Intelligence databases</p>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>{inputTypes.find(t => t.id === activeInput)?.icon}</span>
                <h3 style={{ fontSize: '1rem' }}>{inputTypes.find(t => t.id === activeInput)?.label} Verification</h3>
              </div>

              {/* Mock Input Display */}
              <div style={{
                padding: '20px', borderRadius: '12px', background: 'rgba(0,0,0,0.4)',
                border: '2px dashed var(--panel-border)', textAlign: 'center', minHeight: '120px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}>
                {activeInput === 'website' || activeInput === 'upi' ? (
                  <div style={{ width: '100%' }}>
                    <input
                      type="text"
                      readOnly
                      value={inputTypes.find(t => t.id === activeInput)?.placeholder}
                      style={{
                        width: '100%', padding: '14px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--panel-border)', background: 'rgba(0,0,0,0.5)', color: 'var(--neon-cyan)',
                        fontSize: '0.95rem', outline: 'none'
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{activeInput === 'screenshot' ? '🖼️' : '🎵'}</div>
                    <div style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      {inputTypes.find(t => t.id === activeInput)?.placeholder}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>File uploaded successfully</div>
                  </>
                )}
              </div>

              {/* AI Processing Steps */}
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '12px' }}>AI PROCESSING PIPELINE</div>
                {[
                  { label: 'Input Validation', status: !verifying ? 'done' : 'done' },
                  { label: activeInput === 'voice' ? 'Whisper Speech-to-Text' : activeInput === 'screenshot' ? 'OCR Text Extraction' : activeInput === 'website' ? 'DOM Analysis & Crawl' : 'Database Lookup', status: !verifying ? 'done' : verifying ? 'active' : 'pending' },
                  { label: 'LLM Scam Pattern Analysis', status: !verifying && result ? 'done' : verifying ? 'active' : 'pending' },
                  { label: 'Threat Intelligence Cross-Reference', status: !verifying && result ? 'done' : 'pending' },
                  { label: 'Risk Score Generation', status: !verifying && result ? 'done' : 'pending' },
                ].map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0',
                    fontSize: '0.82rem',
                    color: step.status === 'done' ? 'var(--neon-green)' : step.status === 'active' ? 'var(--neon-yellow)' : 'var(--text-muted)'
                  }}>
                    {step.status === 'done' ? '✅' : step.status === 'active' ? <span className="animate-pulse">⚡</span> : '○'}
                    <span>{step.label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Result Panel */}
        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Risk Score */}
            <div className="glass-panel" style={{
              padding: '24px', textAlign: 'center',
              background: result.risk > 90 ? 'rgba(255, 51, 102, 0.08)' : 'rgba(255, 204, 0, 0.08)',
              border: `1px solid ${result.risk > 90 ? 'var(--neon-red)' : 'var(--neon-yellow)'}`
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '8px' }}>SCAM PROBABILITY</div>
              <div style={{
                fontSize: '3.5rem', fontFamily: 'var(--font-display)', fontWeight: '700',
                color: result.risk > 90 ? 'var(--neon-red)' : 'var(--neon-yellow)',
                textShadow: `0 0 25px ${result.risk > 90 ? 'rgba(255,51,102,0.5)' : 'rgba(255,204,0,0.5)'}`
              }}>{result.risk}%</div>
              <div style={{ fontSize: '0.95rem', fontFamily: 'var(--font-display)', color: result.risk > 90 ? 'var(--neon-red)' : 'var(--neon-yellow)', marginTop: '4px' }}>
                🚨 {result.verdict}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>Type: {result.type}</div>
            </div>

            {/* Explainability */}
            <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '14px' }}>EXPLAINABLE AI — REASONS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {result.reasons.map((reason, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px',
                    borderRadius: '8px', background: 'rgba(255, 51, 102, 0.06)',
                    borderLeft: '3px solid var(--neon-red)'
                  }}>
                    <span style={{ color: 'var(--neon-red)', fontSize: '0.9rem' }}>✓</span>
                    <span style={{ fontSize: '0.88rem' }}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisory */}
            <div style={{
              padding: '16px', background: 'rgba(255, 204, 0, 0.1)',
              borderLeft: '4px solid var(--neon-yellow)', borderRadius: '0 8px 8px 0'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--neon-yellow)', fontFamily: 'var(--font-display)', marginBottom: '4px' }}>⚠️ ADVISORY</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{result.action}</div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-primary" style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '0.8rem' }}>
                🚨 REPORT TO NCRB
              </button>
              <button className="btn-outline" style={{ flex: 1, padding: '12px', textAlign: 'center', fontSize: '0.8rem' }}>
                📋 EXPORT REPORT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FraudVerifier;
