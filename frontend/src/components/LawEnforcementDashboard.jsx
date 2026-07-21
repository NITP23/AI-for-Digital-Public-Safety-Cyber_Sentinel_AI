import React from 'react';

const LawEnforcementDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Command Center</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Global geospatial overview and live alerts.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--neon-red)' }}>🔴</span>
            <span>12 Active Threats</span>
          </div>
          <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--neon-green)' }}>🟢</span>
            <span>API Connected</span>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', flex: 1 }}>
        
        {/* Map View */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid var(--panel-border)', background: 'rgba(0,0,0,0.2)' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Geospatial Heatmap</h3>
          </div>
          <div style={{ 
            flex: 1, 
            background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/BlankMap-World_gray.svg/1024px-BlankMap-World_gray.svg.png") center/cover no-repeat',
            opacity: 0.6,
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 15, 0.7)' }}></div>
            {/* Heatmap markers */}
            <div className="animate-pulse" style={{ position: 'absolute', top: '40%', left: '68%', width: '40px', height: '40px', background: 'radial-gradient(circle, rgba(255,51,102,0.8) 0%, rgba(255,51,102,0) 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '45%', left: '72%', width: '20px', height: '20px', background: 'radial-gradient(circle, rgba(0,240,255,0.8) 0%, rgba(0,240,255,0) 70%)', borderRadius: '50%' }}></div>
            
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '12px', background: 'rgba(0,0,0,0.8)', border: '1px solid var(--panel-border)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>HOT ZONES</div>
              <div style={{ color: 'var(--neon-red)' }}>● High Density (Jamtara)</div>
              <div style={{ color: 'var(--neon-yellow)' }}>● Emerging (Mewat)</div>
            </div>
          </div>
        </div>

        {/* Live Alerts */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid var(--panel-border)' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Live Alert Feed</h3>
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
            
            {[
              { time: '10:42 AM', type: 'High Priority', desc: 'Cluster #OP-PHANTOM activated. 50+ victims targeted.', color: 'var(--neon-red)' },
              { time: '10:38 AM', type: 'Arrest Pattern', desc: 'Voice signature match for suspect "Alpha" across 3 states.', color: 'var(--neon-yellow)' },
              { time: '10:15 AM', type: 'Seizure Update', desc: 'Counterfeit nodes updated from Region B scan.', color: 'var(--neon-cyan)' },
              { time: '09:50 AM', type: 'System', desc: 'Daily intelligence sync completed successfully.', color: 'var(--text-muted)' },
            ].map((alert, i) => (
              <div key={i} style={{ 
                padding: '12px', 
                background: 'rgba(255,255,255,0.03)', 
                borderLeft: `2px solid ${alert.color}`,
                borderRadius: '0 4px 4px 0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  <span>{alert.type}</span>
                  <span>{alert.time}</span>
                </div>
                <div style={{ fontSize: '0.9rem' }}>{alert.desc}</div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default LawEnforcementDashboard;
