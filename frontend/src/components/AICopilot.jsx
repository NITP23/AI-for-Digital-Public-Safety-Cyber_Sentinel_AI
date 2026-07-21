import React, { useState } from 'react';

const AICopilot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello, Officer. I am Sentinel AI. I can summarize cases, generate evidence timelines, or suggest next investigative steps. How can I assist you today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Analyzing requested data... Based on the recent cluster #OP-PHANTOM, the recommended next action is to subpoena telecom records for the primary node (+91 98765-XXXXX) and freeze the associated HDFC bank account to prevent further asset dispersion.' 
      }]);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', maxWidth: '900px', margin: '0 auto' }}>
      <header>
        <h1>Sentinel Copilot</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Your AI investigative assistant.</p>
      </header>

      <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Chat Area */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              display: 'flex',
              gap: '12px',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: msg.role === 'user' ? 'var(--neon-purple)' : 'var(--panel-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                {msg.role === 'user' ? '👮' : '🤖'}
              </div>
              <div style={{ 
                padding: '16px', 
                borderRadius: '12px', 
                background: msg.role === 'user' ? 'rgba(176, 38, 255, 0.2)' : 'rgba(0,0,0,0.3)',
                border: `1px solid ${msg.role === 'user' ? 'rgba(176, 38, 255, 0.5)' : 'var(--panel-border)'}`,
                borderTopRightRadius: msg.role === 'user' ? 0 : '12px',
                borderTopLeftRadius: msg.role === 'ai' ? 0 : '12px',
                color: 'var(--text-primary)',
                lineHeight: '1.5'
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div style={{ padding: '16px', borderTop: '1px solid var(--panel-border)', background: 'rgba(0,0,0,0.2)' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sentinel AI to summarize a case, suggest actions..."
              style={{ 
                flex: 1, 
                padding: '16px', 
                borderRadius: '8px', 
                border: '1px solid var(--panel-border)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0 24px' }}>
              SEND
            </button>
          </form>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Suggestions:</span>
            <button style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Summarize OP-PHANTOM</button>
            <button style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Draft Subpoena Request</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AICopilot;
