import React from 'react';

const FraudIntelligence = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
      <header>
        <h1>Intelligence Graph</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Automated discovery of organized fraud networks.</p>
      </header>

      <div style={{ display: 'flex', gap: '24px', flex: 1, minHeight: 0 }}>
        
        {/* Main Graph Area */}
        <div className="glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between' }}>
            <div>Active Cluster: <span style={{ color: 'var(--neon-purple)' }}>#OP-PHANTOM-99</span></div>
            <div style={{ color: 'var(--text-muted)' }}>Nodes: 248 | Edges: 1.2k</div>
          </div>
          
          {/* Simulated Node Graph Background */}
          <div style={{ 
            flex: 1, 
            background: 'radial-gradient(circle at center, rgba(176, 38, 255, 0.1) 0%, transparent 70%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '4rem', opacity: 0.2, marginBottom: '16px' }}>🕸️</div>
              <p>[ Interactive Network Graph Visualization ]</p>
              <p style={{ fontSize: '0.8rem' }}>Connecting Phone Numbers &rarr; UPI IDs &rarr; IP Addresses</p>
            </div>

            {/* Mock Nodes */}
            <div style={{ position: 'absolute', top: '30%', left: '40%', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--neon-red)', boxShadow: 'var(--glow-red)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--neon-purple)', boxShadow: 'var(--glow-purple)' }}></div>
            <div style={{ position: 'absolute', top: '60%', left: '45%', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--neon-cyan)', boxShadow: 'var(--glow-cyan)' }}></div>
            
            {/* Mock Edge Line */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.3 }}>
              <line x1="40%" y1="30%" x2="50%" y2="50%" stroke="var(--neon-red)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="45%" y2="60%" stroke="var(--neon-cyan)" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="glass-panel" style={{ width: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          <h3>Entity Details</h3>
          
          <div style={{ padding: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', borderLeft: '2px solid var(--neon-purple)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SELECTED NODE</div>
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--neon-cyan)', margin: '8px 0' }}>+91 98765-XXXXX</div>
            <div style={{ fontSize: '0.9rem' }}>Type: VOIP Number</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--neon-red)' }}>Risk Score: 98/100</div>
          </div>

          <div>
            <h4 style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>Connected Entities</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.85rem', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                🏦 Account: HDFC****8902 (3 transfers)
              </div>
              <div style={{ fontSize: '0.85rem', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                💳 UPI: scammer@okaxis (Active)
              </div>
              <div style={{ fontSize: '0.85rem', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                📱 Device: IMEI 3589*******
              </div>
            </div>
          </div>

          <button className="btn-primary" style={{ marginTop: 'auto' }}>EXPORT DOSSIER</button>
        </div>

      </div>
    </div>
  );
};

export default FraudIntelligence;
