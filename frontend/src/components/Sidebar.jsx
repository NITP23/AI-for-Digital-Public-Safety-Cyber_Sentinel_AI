import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'call-analyzer', label: 'Live Call Analyzer', icon: '📞', desc: 'Module 1' },
    { id: 'fraud-verifier', label: 'Fraud Verifier', icon: '🔍', desc: 'Module 2' },
    { id: 'dashboard', label: 'Police Dashboard', icon: '🛡️', desc: 'Module 3' },
    { id: 'graph', label: 'Graph Intelligence', icon: '🕸️', desc: 'Module 4' },
    { id: 'heatmap', label: 'Threat Heat Map', icon: '🗺️', desc: 'Module 5' },
  ];

  return (
    <aside style={{
      width: '280px',
      borderRight: '1px solid var(--panel-border)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      background: 'rgba(10, 10, 25, 0.8)',
      backdropFilter: 'var(--glass-blur)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Cyber Sentinel</h2>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>AI CORE V2.0</div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: activeTab === item.id ? 'var(--panel-border)' : 'transparent',
              color: activeTab === item.id ? 'var(--neon-cyan)' : 'var(--text-secondary)',
              border: '1px solid',
              borderColor: activeTab === item.id ? 'var(--neon-cyan)' : 'transparent',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.9rem',
              transition: 'all 0.2s',
              boxShadow: activeTab === item.id ? 'var(--glow-cyan)' : 'none'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <div>
              <div>{item.label}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '1px' }}>{item.desc}</div>
            </div>
          </button>
        ))}
      </nav>

      {/* AI Pipeline Indicator */}
      <div style={{ marginTop: 'auto', padding: '16px', borderRadius: '8px', border: '1px solid var(--panel-border)', background: 'rgba(0, 240, 255, 0.05)' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '2px' }}>AI PIPELINE</div>
        {['Whisper STT', 'LLM Analyzer', 'Knowledge Graph', 'Risk Engine'].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--neon-green)', marginBottom: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-green)' }} className="animate-pulse"></span>
            {item}
          </div>
        ))}
      </div>

      <div style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--panel-border)', background: 'rgba(176, 38, 255, 0.05)' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '2px' }}>SYSTEM STATUS</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-green)', fontSize: '0.85rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)' }} className="animate-pulse"></span>
          All Systems Nominal
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
