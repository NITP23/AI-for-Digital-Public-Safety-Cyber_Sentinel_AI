import React from 'react';

const PoliceDashboard = () => {
  const connectedNumbers = [
    { number: '+91 98765-XXXXX', type: 'VOIP', status: 'Active', reports: 47, state: 'Delhi' },
    { number: '+91 87654-XXXXX', type: 'Prepaid', status: 'Active', reports: 32, state: 'Jharkhand' },
    { number: '+91 76543-XXXXX', type: 'VOIP', status: 'Blocked', reports: 89, state: 'Rajasthan' },
    { number: '+91 65432-XXXXX', type: 'Prepaid', status: 'Active', reports: 15, state: 'Haryana' },
  ];

  const fakeWebsites = [
    { url: 'sbi-secure-update.in', mimics: 'SBI Online', age: '2 days', status: 'ACTIVE', victims: 234 },
    { url: 'rbi-verification.com', mimics: 'RBI Portal', age: '5 days', status: 'ACTIVE', victims: 156 },
    { url: 'customs-clearance.org', mimics: 'Indian Customs', age: '1 day', status: 'TAKEDOWN REQUESTED', victims: 89 },
    { url: 'epfo-refund-claim.in', mimics: 'EPFO', age: '3 days', status: 'BLOCKED', victims: 67 },
  ];

  const bankAccounts = [
    { bank: 'HDFC', account: '****8902', upi: 'scam@okhdfc', txns: 156, amount: '₹34.5L', status: 'FROZEN' },
    { bank: 'Axis', account: '****4521', upi: 'fraud@okaxis', txns: 89, amount: '₹18.2L', status: 'ACTIVE' },
    { bank: 'ICICI', account: '****7834', upi: 'fake@oicicici', txns: 45, amount: '₹8.7L', status: 'FROZEN' },
  ];

  const alerts = [
    { time: '10:42 AM', type: 'HIGH PRIORITY', desc: 'Cluster #OP-PHANTOM activated. 50+ victims targeted in last hour.', color: 'var(--neon-red)' },
    { time: '10:38 AM', type: 'VOICE MATCH', desc: 'Voice signature match for suspect "Alpha" across 3 states (Delhi, UP, Rajasthan).', color: 'var(--neon-yellow)' },
    { time: '10:25 AM', type: 'DEEPFAKE', desc: 'New AI-generated voice pattern detected. Added to deepfake database.', color: 'var(--neon-purple)' },
    { time: '10:15 AM', type: 'SEIZURE', desc: '₹18.2L frozen in Axis Bank mule account ****4521.', color: 'var(--neon-green)' },
    { time: '09:50 AM', type: 'SYSTEM', desc: 'Daily intelligence sync completed. 1,247 new data points ingested.', color: 'var(--text-muted)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Police Command Center</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Module 3 — Backend dashboard for law enforcement intelligence</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="glass-panel" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--neon-red)' }}>🔴</span> 12 Active Threats
          </div>
          <div className="glass-panel" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--neon-green)' }}>🟢</span> API Connected
          </div>
        </div>
      </header>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { label: 'Scam Hotspots', value: '23', icon: '📍', color: 'var(--neon-red)' },
          { label: 'Flagged Numbers', value: '1,847', icon: '📞', color: 'var(--neon-yellow)' },
          { label: 'Fake Websites', value: '342', icon: '🌐', color: 'var(--neon-purple)' },
          { label: 'Frozen Accounts', value: '156', icon: '🏦', color: 'var(--neon-cyan)' },
        ].map((stat, i) => (
          <div key={i} className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '700', color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', letterSpacing: '1px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', flex: 1, minHeight: 0 }}>

        {/* Left Column — Tables */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'auto' }}>

          {/* Connected Phone Numbers */}
          <div className="glass-panel" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '0.9rem' }}>📞 Connected Phone Numbers</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)' }}>View All →</span>
            </div>
            <div style={{ padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--panel-border)' }}>
                    {['Number', 'Type', 'State', 'Reports', 'Status'].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '1px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {connectedNumbers.map((num, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '10px 16px', fontFamily: 'monospace', color: 'var(--neon-cyan)' }}>{num.number}</td>
                      <td style={{ padding: '10px 16px' }}>
                        <span style={{ padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', background: num.type === 'VOIP' ? 'rgba(255,51,102,0.15)' : 'rgba(255,204,0,0.15)', color: num.type === 'VOIP' ? 'var(--neon-red)' : 'var(--neon-yellow)' }}>{num.type}</span>
                      </td>
                      <td style={{ padding: '10px 16px', color: 'var(--text-secondary)' }}>{num.state}</td>
                      <td style={{ padding: '10px 16px', color: 'var(--neon-red)' }}>{num.reports}</td>
                      <td style={{ padding: '10px 16px' }}>
                        <span style={{ padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', background: num.status === 'Active' ? 'rgba(255,51,102,0.15)' : 'rgba(0,255,102,0.15)', color: num.status === 'Active' ? 'var(--neon-red)' : 'var(--neon-green)' }}>{num.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fake Websites */}
          <div className="glass-panel" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '0.9rem' }}>🌐 Fake Websites Detected</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)' }}>View All →</span>
            </div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {fakeWebsites.map((site, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', borderLeft: `3px solid ${site.status === 'ACTIVE' ? 'var(--neon-red)' : site.status === 'BLOCKED' ? 'var(--neon-green)' : 'var(--neon-yellow)'}` }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'monospace', color: 'var(--neon-red)', fontSize: '0.85rem' }}>{site.url}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mimics: {site.mimics} · Age: {site.age} · {site.victims} victims</div>
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: '10px', fontSize: '0.65rem', fontFamily: 'var(--font-display)', letterSpacing: '0.5px', background: site.status === 'ACTIVE' ? 'rgba(255,51,102,0.15)' : site.status === 'BLOCKED' ? 'rgba(0,255,102,0.15)' : 'rgba(255,204,0,0.15)', color: site.status === 'ACTIVE' ? 'var(--neon-red)' : site.status === 'BLOCKED' ? 'var(--neon-green)' : 'var(--neon-yellow)' }}>
                    {site.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Accounts */}
          <div className="glass-panel" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '0.9rem' }}>🏦 Flagged Bank Accounts</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)' }}>View All →</span>
            </div>
            <div style={{ padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--panel-border)' }}>
                    {['Bank', 'Account', 'UPI ID', 'Txns', 'Amount', 'Status'].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '1px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bankAccounts.map((acc, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: '600' }}>{acc.bank}</td>
                      <td style={{ padding: '10px 16px', fontFamily: 'monospace' }}>{acc.account}</td>
                      <td style={{ padding: '10px 16px', fontFamily: 'monospace', color: 'var(--neon-red)', fontSize: '0.8rem' }}>{acc.upi}</td>
                      <td style={{ padding: '10px 16px' }}>{acc.txns}</td>
                      <td style={{ padding: '10px 16px', color: 'var(--neon-yellow)' }}>{acc.amount}</td>
                      <td style={{ padding: '10px 16px' }}>
                        <span style={{ padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', background: acc.status === 'FROZEN' ? 'rgba(0,240,255,0.15)' : 'rgba(255,51,102,0.15)', color: acc.status === 'FROZEN' ? 'var(--neon-cyan)' : 'var(--neon-red)' }}>{acc.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column — Live Alert Feed */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)' }}>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '2px' }}>Live Alert Feed</h3>
            <div style={{ fontSize: '0.7rem', color: 'var(--neon-green)' }} className="animate-pulse">● LIVE</div>
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', flex: 1 }}>
            {alerts.map((alert, i) => (
              <div key={i} style={{
                padding: '12px 14px', background: 'rgba(255,255,255,0.03)',
                borderLeft: `3px solid ${alert.color}`, borderRadius: '0 8px 8px 0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  <span style={{ color: alert.color, fontFamily: 'var(--font-display)', letterSpacing: '0.5px' }}>{alert.type}</span>
                  <span>{alert.time}</span>
                </div>
                <div style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{alert.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '16px', borderTop: '1px solid var(--panel-border)' }}>
            <button className="btn-primary" style={{ width: '100%', padding: '10px', textAlign: 'center', fontSize: '0.8rem' }}>
              📊 GENERATE INVESTIGATION REPORT
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PoliceDashboard;
