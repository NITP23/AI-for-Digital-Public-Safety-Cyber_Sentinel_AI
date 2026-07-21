import React, { useState, useEffect, useRef } from 'react';

const CitizenApp = () => {
  const [channel, setChannel] = useState('app'); // app, whatsapp, ivr
  const [language, setLanguage] = useState('English');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatState, setChatState] = useState('init'); // init, wait_user, analyzing, verdict
  const chatEndRef = useRef(null);

  const languages = ['English', 'Hindi (हिंदी)', 'Tamil (தமிழ்)', 'Telugu (తెలుగు)', 'Marathi (मराठी)', 'Bengali (বাংলা)', 'Gujarati (ગુજરાતી)', 'Kannada (ಕನ್ನಡ)', 'Malayalam (മലയാളം)', 'Punjabi (ਪੰਜਾਬੀ)', 'Odia (ଓଡ଼ିଆ)', 'Assamese (অসমীয়া)'];

  // Initialize Chat
  useEffect(() => {
    setMessages([
      { 
        role: 'ai', 
        text: `Hi! I am the Citizen Fraud Shield. I can help you verify suspicious calls, payment requests, or messages in real-time. Please share the suspicious message, phone number, or audio snippet.` 
      }
    ]);
    setChatState('wait_user');
  }, [channel, language]);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || chatState !== 'wait_user') return;

    // 1. Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setChatState('analyzing');
    setIsTyping(true);

    // 2. Simulate AI Analysis & Scanning
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'system', 
        type: 'scan', 
        text: 'Analyzing using NLP & Graph AI... Cross-referencing threat databases...' 
      }]);
      
      // 3. Deliver Verdict
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          type: 'verdict',
          text: `🚨 High Risk Detected: "Digital Arrest / Customs Extortion Scam"`,
          details: `The pattern matches known organized fraud networks (Cluster #OP-PHANTOM). They are impersonating law enforcement to extort money.`,
          action: `Do NOT transfer any funds. Disconnect immediately if on a call.`
        }]);
        setChatState('verdict');
      }, 2500);

    }, 1500);
  };

  const renderChannelIcon = (c) => {
    switch (c) {
      case 'whatsapp': return '💬 WhatsApp Mode';
      case 'ivr': return '📞 IVR Call Simulator';
      default: return '📱 Native App Mode';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto', height: '100%' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Citizen Fraud Shield</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Multi-channel conversational AI for real-time fraud risk assessment.</p>
        </div>
      </header>

      {/* Top Controls: Channel & Language */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div className="glass-panel" style={{ padding: '8px', display: 'flex', gap: '4px' }}>
          {['app', 'whatsapp', 'ivr'].map(c => (
            <button
              key={c}
              onClick={() => setChannel(c)}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                background: channel === c ? 'var(--panel-border)' : 'transparent',
                color: channel === c ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                border: 'none',
                fontWeight: channel === c ? '600' : '400',
                transition: 'all 0.2s'
              }}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        <select 
          className="glass-panel"
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          style={{ 
            padding: '12px 16px', 
            color: 'var(--text-primary)', 
            border: '1px solid var(--panel-border)',
            outline: 'none',
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer'
          }}
        >
          {languages.map(lang => (
            <option key={lang} value={lang} style={{ background: 'var(--bg-color)' }}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Main Chat Interface */}
      <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', border: channel === 'whatsapp' ? '1px solid #25D366' : '1px solid var(--panel-border)' }}>
        
        {/* Chat Header */}
        <div style={{ padding: '16px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '1.5rem' }}>{channel === 'whatsapp' ? '🟢' : channel === 'ivr' ? '🎙️' : '🛡️'}</div>
          <div>
            <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{renderChannelIcon(channel)}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--neon-green)' }}>● Online</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', background: channel === 'whatsapp' ? 'rgba(37, 211, 102, 0.05)' : 'transparent' }}>
          
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              
              {/* Normal AI/User Messages */}
              {!msg.type && (
                <div style={{ 
                  padding: '16px', 
                  borderRadius: '16px', 
                  background: msg.role === 'user' ? 'linear-gradient(45deg, var(--neon-purple), rgba(176,38,255,0.6))' : 'rgba(0,0,0,0.5)',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--panel-border)',
                  borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                  borderTopLeftRadius: msg.role === 'ai' ? '4px' : '16px',
                  color: 'white',
                  lineHeight: '1.5',
                  boxShadow: msg.role === 'user' ? 'var(--glow-purple)' : 'none'
                }}>
                  {msg.text}
                </div>
              )}

              {/* Scanning Animation */}
              {msg.type === 'scan' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--neon-cyan)', padding: '8px 16px' }}>
                  <span className="animate-pulse">⚡</span>
                  <span className="animate-pulse" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{msg.text}</span>
                </div>
              )}

              {/* Verdict Card */}
              {msg.type === 'verdict' && (
                <div style={{ 
                  background: 'rgba(255, 51, 102, 0.1)', 
                  border: '1px solid var(--neon-red)', 
                  borderRadius: '12px', 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: 'var(--glow-red)'
                }}>
                  <h3 style={{ color: 'var(--neon-red)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>⚠️</span> {msg.text}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{msg.details}</p>
                  <div style={{ padding: '12px', background: 'rgba(255, 204, 0, 0.1)', borderLeft: '3px solid var(--neon-yellow)', borderRadius: '4px' }}>
                    <span style={{ color: 'var(--neon-yellow)', fontWeight: 'bold' }}>ADVISORY:</span> {msg.action}
                  </div>
                  <button className="btn-primary" style={{ marginTop: '8px', textAlign: 'center', width: '100%' }}>
                    REPORT TO NCRB PORTAL 🔗
                  </button>
                </div>
              )}

            </div>
          ))}

          {isTyping && (
            <div style={{ alignSelf: 'flex-start', padding: '12px 16px', borderRadius: '16px', background: 'rgba(0,0,0,0.5)', borderTopLeftRadius: '4px', color: 'var(--text-muted)' }}>
              <span className="animate-pulse">● ● ●</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '16px', borderTop: '1px solid var(--panel-border)', background: 'rgba(0,0,0,0.3)' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px' }}>
            {channel !== 'ivr' && (
              <button type="button" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', transition: 'all 0.2s' }}>
                📎
              </button>
            )}
            
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={channel === 'ivr' ? "Speak to the IVR (Simulated via text)..." : "Type a suspicious message or paste a link..."}
              disabled={chatState !== 'wait_user'}
              style={{ 
                flex: 1, 
                padding: '16px', 
                borderRadius: '24px', 
                border: '1px solid var(--panel-border)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                opacity: chatState !== 'wait_user' ? 0.5 : 1
              }}
            />
            
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={chatState !== 'wait_user'}
              style={{ borderRadius: '24px', padding: '0 24px', opacity: chatState !== 'wait_user' ? 0.5 : 1 }}
            >
              {channel === 'ivr' ? 'SPEAK' : 'SEND'}
            </button>
          </form>
          
          {/* Preset Buttons for Demo */}
          {chatState === 'wait_user' && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>Test Scenarios:</span>
              <button 
                type="button" 
                onClick={() => setInput("Hello, I am calling from Customs. We found illegal items in a parcel under your name.")}
                style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', background: 'rgba(0,240,255,0.1)', border: '1px solid var(--neon-cyan)', padding: '4px 12px', borderRadius: '12px', cursor: 'pointer' }}
              >
                Digital Arrest Call
              </button>
              <button 
                type="button" 
                onClick={() => setInput("Dear customer, your electricity bill is pending. Update PAN via http://fake-update.com")}
                style={{ fontSize: '0.8rem', color: 'var(--neon-purple)', background: 'rgba(176,38,255,0.1)', border: '1px solid var(--neon-purple)', padding: '4px 12px', borderRadius: '12px', cursor: 'pointer' }}
              >
                Phishing SMS
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CitizenApp;
