import React, { useState, useEffect } from 'react';

const LiveCallAnalyzer = () => {
  const [callState, setCallState] = useState('idle'); // idle, ringing, connected, analyzing, verdict
  const [sttText, setSttText] = useState([]);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const transcriptLines = [
    { time: '00:02', speaker: 'Caller', text: 'Hello, this is Inspector Sharma from CBI Cyber Cell, Delhi.', flag: 'fake-identity' },
    { time: '00:08', speaker: 'Caller', text: 'Your Aadhaar number has been linked to suspicious money laundering activities.', flag: 'threat' },
    { time: '00:15', speaker: 'Citizen', text: 'What? I have not done anything like that!', flag: null },
    { time: '00:19', speaker: 'Caller', text: 'You are under digital arrest. Do NOT disconnect this call or we will send police.', flag: 'intimidation' },
    { time: '00:28', speaker: 'Caller', text: 'To clear your name, you must transfer ₹2,50,000 to a secure RBI verification account.', flag: 'money-request' },
    { time: '00:35', speaker: 'Caller', text: 'Here is the account number. Transfer immediately or face arrest.', flag: 'urgency' },
  ];

  const riskReasons = [
    { label: 'Threatening Language', icon: '⚠️', confidence: 97 },
    { label: 'Fake Officer Identity', icon: '🎭', confidence: 94 },
    { label: 'Money Transfer Request', icon: '💸', confidence: 99 },
    { label: 'Spoofed Phone Number', icon: '📵', confidence: 91 },
    { label: 'Urgency Pressure Tactics', icon: '⏰', confidence: 96 },
    { label: 'Voice Deepfake Detected', icon: '🤖', confidence: 87 },
  ];

  const timelineEvents = [
    { time: '10:15 AM', event: 'Call Started', desc: 'Incoming call from +91 98765-XXXXX (VOIP detected)', color: 'var(--text-muted)' },
    { time: '10:17 AM', event: 'Threat Detected', desc: 'AI flagged "digital arrest" + impersonation pattern', color: 'var(--neon-yellow)' },
    { time: '10:19 AM', event: 'Bank Details Requested', desc: 'Caller demanded transfer to third-party account', color: 'var(--neon-red)' },
    { time: '10:20 AM', event: 'Money Transfer Attempt', desc: 'UPI ID shared — flagged in threat database', color: 'var(--neon-red)' },
  ];

  const startSimulation = () => {
    setCallState('ringing');
    setSttText([]);
    setAnalysisStep(0);
    setShowTimeline(false);
    setElapsedTime(0);

    setTimeout(() => {
      setCallState('connected');
      // Start speech-to-text simulation
      transcriptLines.forEach((line, idx) => {
        setTimeout(() => {
          setSttText(prev => [...prev, line]);
          if (idx === transcriptLines.length - 1) {
            setTimeout(() => {
              setCallState('analyzing');
              // Analysis steps
              [1, 2, 3, 4].forEach((step, i) => {
                setTimeout(() => {
                  setAnalysisStep(step);
                  if (step === 4) {
                    setTimeout(() => {
                      setCallState('verdict');
                      setShowTimeline(true);
                    }, 800);
                  }
                }, i * 600);
              });
            }, 800);
          }
        }, (idx + 1) * 1200);
      });
    }, 1500);
  };

  // Timer
  useEffect(() => {
    let interval;
    if (callState === 'connected' || callState === 'analyzing') {
      interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Live Call Analyzer</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Module 1 — Real-time AI-powered call interception & fraud detection</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div className="glass-panel" style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--neon-green)' }}>●</span> Whisper STT Active
          </div>
          <div className="glass-panel" style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--neon-purple)' }}>●</span> LLM Ready
          </div>
        </div>
      </header>

      {/* Architecture Flow */}
      <div className="glass-panel" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '0.78rem' }}>
        {['📞 Call Received', '→', '🎙️ Whisper STT', '→', '🧠 LLM Analysis', '→', '📊 Risk Score', '→', '🕸️ Knowledge Graph', '→', '🚨 Alert'].map((item, i) => (
          <span key={i} style={{
            color: item === '→' ? 'var(--text-muted)' : 'var(--neon-cyan)',
            fontFamily: item === '→' ? 'inherit' : 'var(--font-display)',
            letterSpacing: '0.5px',
            padding: item !== '→' ? '4px 10px' : '0',
            background: item !== '→' ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
            borderRadius: '6px',
            border: item !== '→' ? '1px solid rgba(0, 240, 255, 0.15)' : 'none',
          }}>{item}</span>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: callState === 'verdict' ? '1fr 1fr' : '1fr', gap: '20px', flex: 1, minHeight: 0 }}>

        {/* Left — Call + Transcript */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Call Header */}
          <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: callState === 'idle' ? 'rgba(255,255,255,0.1)' : callState === 'ringing' ? 'rgba(255,204,0,0.2)' : 'rgba(255,51,102,0.2)',
                border: `2px solid ${callState === 'idle' ? 'var(--text-muted)' : callState === 'ringing' ? 'var(--neon-yellow)' : 'var(--neon-red)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                boxShadow: callState !== 'idle' ? 'var(--glow-red)' : 'none'
              }} className={callState === 'ringing' ? 'animate-pulse' : ''}>
                {callState === 'idle' ? '📞' : callState === 'ringing' ? '📳' : '🔴'}
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                  {callState === 'idle' ? 'No Active Call' : callState === 'ringing' ? 'Incoming Call...' : '+91 98765-XXXXX'}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {callState === 'idle' ? 'Start simulation to demo' : callState === 'ringing' ? 'VOIP Number Detected' : `Connected · ${formatTime(elapsedTime)}`}
                </div>
                {callState !== 'idle' && callState !== 'ringing' && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--neon-red)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="animate-pulse">●</span> RECORDING · DEEPFAKE SCAN ACTIVE
                  </div>
                )}
              </div>
            </div>
            {callState === 'idle' ? (
              <button className="btn-primary" onClick={startSimulation} style={{ padding: '12px 28px' }}>
                ▶ SIMULATE CALL
              </button>
            ) : (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>AI STATUS</div>
                <div style={{ color: callState === 'analyzing' ? 'var(--neon-yellow)' : callState === 'verdict' ? 'var(--neon-red)' : 'var(--neon-green)', fontSize: '0.85rem', fontFamily: 'var(--font-display)' }}>
                  {callState === 'connected' ? 'LISTENING...' : callState === 'analyzing' ? 'ANALYZING...' : 'SCAM DETECTED'}
                </div>
              </div>
            )}
          </div>

          {/* Speech-to-Text Transcript */}
          <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🎙️</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem' }}>Speech-to-Text (Whisper)</span>
              </div>
              {sttText.length > 0 && (
                <span style={{ fontSize: '0.75rem', color: 'var(--neon-green)', fontFamily: 'var(--font-mono)' }} className="animate-pulse">● LIVE TRANSCRIPTION</span>
              )}
            </div>
            <div style={{ flex: 1, padding: '16px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sttText.length === 0 && callState === 'idle' && (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px', opacity: 0.3 }}>🎙️</div>
                  <p>Click "Simulate Call" to begin live speech-to-text transcription</p>
                </div>
              )}
              {callState === 'ringing' && (
                <div style={{ textAlign: 'center', color: 'var(--neon-yellow)', padding: '40px 0' }} className="animate-pulse">
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📳</div>
                  <p>Connecting... Whisper engine initializing</p>
                </div>
              )}
              {sttText.map((line, idx) => (
                <div key={idx} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '10px 14px', borderRadius: '10px',
                  background: line.flag ? 'rgba(255, 51, 102, 0.08)' : 'rgba(255,255,255,0.03)',
                  borderLeft: line.flag ? '3px solid var(--neon-red)' : '3px solid transparent',
                }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', minWidth: '36px', fontFamily: 'var(--font-mono)', paddingTop: '2px' }}>{line.time}</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: line.speaker === 'Caller' ? 'var(--neon-red)' : 'var(--neon-green)', marginBottom: '2px', fontFamily: 'var(--font-display)' }}>
                      {line.speaker === 'Caller' ? '🔴 Unknown Caller' : '🟢 Citizen'}
                    </div>
                    <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{line.text}</div>
                    {line.flag && (
                      <span style={{
                        display: 'inline-block', marginTop: '4px', padding: '2px 8px', borderRadius: '10px',
                        fontSize: '0.65rem', background: 'rgba(255, 51, 102, 0.2)', color: 'var(--neon-red)',
                        border: '1px solid rgba(255, 51, 102, 0.3)', letterSpacing: '0.5px'
                      }}>
                        🚩 {line.flag === 'fake-identity' ? 'FAKE IDENTITY' : line.flag === 'threat' ? 'THREAT' : line.flag === 'intimidation' ? 'INTIMIDATION' : line.flag === 'money-request' ? 'MONEY REQUEST' : 'URGENCY TACTIC'}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Analysis Steps */}
              {callState === 'analyzing' && (
                <div style={{ padding: '16px', borderTop: '1px solid var(--panel-border)', marginTop: '8px' }}>
                  {['Whisper STT Complete', 'LLM Pattern Matching...', 'Knowledge Graph Lookup...', 'Generating Risk Score...'].map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0', fontSize: '0.85rem', color: analysisStep > i ? 'var(--neon-green)' : analysisStep === i ? 'var(--neon-yellow)' : 'var(--text-muted)' }}>
                      {analysisStep > i ? '✅' : analysisStep === i ? <span className="animate-pulse">⚡</span> : '○'}
                      <span style={{ fontFamily: 'var(--font-mono)' }}>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right — Verdict Panel (appears after analysis) */}
        {callState === 'verdict' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Risk Score Card */}
            <div className="glass-panel" style={{ padding: '24px', background: 'rgba(255, 51, 102, 0.08)', border: '1px solid var(--neon-red)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '8px' }}>SCAM PROBABILITY</div>
              <div style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--neon-red)', textShadow: '0 0 30px rgba(255,51,102,0.5)' }}>98%</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', color: 'var(--neon-red)', marginTop: '4px' }}>🚨 HIGH RISK — DIGITAL ARREST SCAM</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Cluster Match: #OP-PHANTOM-99</div>
            </div>

            {/* Explainability — Reasons */}
            <div className="glass-panel" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '14px' }}>EXPLAINABLE AI — WHY IT'S A SCAM</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {riskReasons.map((reason, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '1.1rem' }}>{reason.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--neon-red)' }}>✓ {reason.label}</div>
                    </div>
                    <div style={{
                      padding: '2px 10px', borderRadius: '10px', fontSize: '0.7rem', fontFamily: 'var(--font-display)',
                      background: reason.confidence > 95 ? 'rgba(255,51,102,0.2)' : reason.confidence > 90 ? 'rgba(255,204,0,0.2)' : 'rgba(0,240,255,0.2)',
                      color: reason.confidence > 95 ? 'var(--neon-red)' : reason.confidence > 90 ? 'var(--neon-yellow)' : 'var(--neon-cyan)',
                    }}>
                      {reason.confidence}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Voice Deepfake Detection */}
            <div className="glass-panel" style={{ padding: '16px', border: '1px solid var(--neon-purple)', background: 'rgba(176, 38, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.4rem' }}>🤖</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-display)', color: 'var(--neon-purple)' }}>VOICE DEEPFAKE DETECTED</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>87% probability of AI-generated voice. Spectral anomalies found.</div>
                </div>
              </div>
            </div>

            {/* Investigation Timeline */}
            <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '16px' }}>CALL TIMELINE</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timelineEvents.map((evt, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', paddingBottom: idx < timelineEvents.length - 1 ? '16px' : '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '20px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: evt.color, boxShadow: `0 0 8px ${evt.color}`, flexShrink: 0 }}></div>
                      {idx < timelineEvents.length - 1 && <div style={{ width: '2px', flex: 1, background: 'var(--panel-border)', marginTop: '4px' }}></div>}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{evt.time}</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: evt.color }}>{evt.event}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{evt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="btn-primary" style={{ padding: '14px', textAlign: 'center', width: '100%', fontSize: '0.85rem' }}>
              🚨 SEND ALERT TO POLICE DASHBOARD
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveCallAnalyzer;
