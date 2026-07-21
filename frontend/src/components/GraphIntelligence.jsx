import React, { useState } from 'react';

const GraphIntelligence = () => {
  const [selectedNode, setSelectedNode] = useState('phone');

  const graphNodes = [
    { id: 'phone', label: '📞 Phone', data: '+91 98765-XXXXX', type: 'VOIP Number', risk: 98, x: 10, y: 30, color: 'var(--neon-red)' },
    { id: 'sim', label: '📶 SIM', data: 'SIM #89914800001234567', type: 'Prepaid SIM', risk: 94, x: 30, y: 15, color: 'var(--neon-yellow)' },
    { id: 'upi', label: '💳 UPI', data: 'scammer@okaxis', type: 'UPI Virtual Address', risk: 97, x: 50, y: 35, color: 'var(--neon-purple)' },
    { id: 'bank', label: '🏦 Bank', data: 'HDFC ****8902', type: 'Mule Account', risk: 92, x: 70, y: 18, color: 'var(--neon-cyan)' },
    { id: 'victims', label: '👥 Victims', data: '47 Identified', type: 'Affected Citizens', risk: 0, x: 90, y: 32, color: 'var(--neon-green)' },
    { id: 'imei', label: '📱 IMEI', data: '3589XXXXXXX', type: 'Device Identifier', risk: 89, x: 30, y: 55, color: 'var(--neon-red)' },
    { id: 'ip', label: '🌐 IP', data: '103.XX.XX.45', type: 'VPN Exit Node', risk: 85, x: 55, y: 60, color: 'var(--neon-yellow)' },
    { id: 'website', label: '🕸️ Website', data: 'sbi-secure-update.in', type: 'Phishing Domain', risk: 99, x: 75, y: 55, color: 'var(--neon-red)' },
  ];

  const edges = [
    { from: 'phone', to: 'sim', label: 'Registered to' },
    { from: 'sim', to: 'upi', label: 'Linked' },
    { from: 'upi', to: 'bank', label: 'Receives funds' },
    { from: 'bank', to: 'victims', label: 'Defrauded' },
    { from: 'phone', to: 'imei', label: 'Device used' },
    { from: 'imei', to: 'ip', label: 'Connected from' },
    { from: 'ip', to: 'website', label: 'Hosts' },
    { from: 'upi', to: 'ip', label: 'API calls' },
  ];

  const selected = graphNodes.find(n => n.id === selectedNode);

  const chainNodes = ['phone', 'sim', 'upi', 'bank', 'victims'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      <header>
        <h1 style={{ fontSize: '2rem' }}>Graph Intelligence</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Module 4 — Knowledge graph connecting fraud entities across the network</p>
      </header>

      {/* Primary Chain: Phone → SIM → UPI → Bank → Victims */}
      <div className="glass-panel" style={{ padding: '16px 24px' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '14px' }}>PRIMARY FRAUD CHAIN</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0' }}>
          {chainNodes.map((nodeId, idx) => {
            const node = graphNodes.find(n => n.id === nodeId);
            return (
              <React.Fragment key={nodeId}>
                <div
                  onClick={() => setSelectedNode(nodeId)}
                  style={{
                    padding: '14px 20px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer',
                    background: selectedNode === nodeId ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${selectedNode === nodeId ? 'var(--neon-cyan)' : 'var(--panel-border)'}`,
                    boxShadow: selectedNode === nodeId ? 'var(--glow-cyan)' : 'none',
                    transition: 'all 0.2s', minWidth: '120px'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{node.label.split(' ')[0]}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: node.color }}>{node.label.split(' ').slice(1).join(' ')}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>{node.data}</div>
                </div>
                {idx < chainNodes.length - 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 4px' }}>
                    <div style={{ fontSize: '1.2rem', color: 'var(--neon-cyan)' }}>→</div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px', flex: 1, minHeight: 0 }}>

        {/* Graph Visualization */}
        <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between' }}>
            <div>Active Cluster: <span style={{ color: 'var(--neon-purple)' }}>#OP-PHANTOM-99</span></div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Nodes: {graphNodes.length} | Edges: {edges.length}</div>
          </div>

          {/* SVG Graph */}
          <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 52px)', background: 'radial-gradient(circle at center, rgba(176, 38, 255, 0.08) 0%, transparent 70%)' }}>
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              {edges.map((edge, i) => {
                const from = graphNodes.find(n => n.id === edge.from);
                const to = graphNodes.find(n => n.id === edge.to);
                return (
                  <line key={i}
                    x1={`${from.x}%`} y1={`${from.y}%`}
                    x2={`${to.x}%`} y2={`${to.y}%`}
                    stroke={selectedNode === edge.from || selectedNode === edge.to ? 'var(--neon-cyan)' : 'rgba(100,116,139,0.3)'}
                    strokeWidth={selectedNode === edge.from || selectedNode === edge.to ? 2 : 1}
                    strokeDasharray={selectedNode === edge.from || selectedNode === edge.to ? 'none' : '4,4'}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {graphNodes.map(node => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                style={{
                  position: 'absolute',
                  left: `${node.x}%`, top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  zIndex: 1,
                  transition: 'all 0.3s',
                }}
              >
                <div style={{
                  width: selectedNode === node.id ? '48px' : '36px',
                  height: selectedNode === node.id ? '48px' : '36px',
                  borderRadius: '50%',
                  background: `rgba(${node.color === 'var(--neon-red)' ? '255,51,102' : node.color === 'var(--neon-cyan)' ? '0,240,255' : node.color === 'var(--neon-purple)' ? '176,38,255' : node.color === 'var(--neon-yellow)' ? '255,204,0' : '0,255,102'}, 0.2)`,
                  border: `2px solid ${node.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: selectedNode === node.id ? '1.3rem' : '1rem',
                  boxShadow: selectedNode === node.id ? `0 0 20px ${node.color}` : `0 0 8px ${node.color}`,
                  transition: 'all 0.3s',
                  margin: '0 auto'
                }} className={selectedNode === node.id ? 'animate-pulse' : ''}>
                  {node.label.split(' ')[0]}
                </div>
                <div style={{
                  marginTop: '6px', fontSize: '0.65rem', fontFamily: 'var(--font-display)',
                  color: selectedNode === node.id ? node.color : 'var(--text-muted)',
                  whiteSpace: 'nowrap'
                }}>
                  {node.label.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entity Details Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Selected Node Info */}
          <div className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '12px' }}>SELECTED ENTITY</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ fontSize: '2rem' }}>{selected?.label.split(' ')[0]}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: selected?.color }}>{selected?.label.split(' ').slice(1).join(' ')}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selected?.type}</div>
              </div>
            </div>
            <div style={{ padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ fontFamily: 'monospace', color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>{selected?.data}</div>
            </div>
            {selected?.id !== 'victims' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem' }}>Risk Score</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${selected?.risk}%`, height: '100%', background: selected?.risk > 90 ? 'var(--neon-red)' : 'var(--neon-yellow)', borderRadius: '3px' }}></div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: selected?.risk > 90 ? 'var(--neon-red)' : 'var(--neon-yellow)' }}>{selected?.risk}/100</span>
                </div>
              </div>
            )}
          </div>

          {/* Connected Entities */}
          <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '12px' }}>CONNECTIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {edges.filter(e => e.from === selectedNode || e.to === selectedNode).map((edge, i) => {
                const connectedId = edge.from === selectedNode ? edge.to : edge.from;
                const connectedNode = graphNodes.find(n => n.id === connectedId);
                return (
                  <div key={i}
                    onClick={() => setSelectedNode(connectedId)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px',
                      borderRadius: '8px', background: 'rgba(255,255,255,0.03)', cursor: 'pointer',
                      borderLeft: `3px solid ${connectedNode.color}`, transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{connectedNode.label.split(' ')[0]}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.82rem', color: connectedNode.color }}>{connectedNode.label.split(' ').slice(1).join(' ')}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{edge.label}</div>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>→</span>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="btn-primary" style={{ padding: '12px', textAlign: 'center', width: '100%', fontSize: '0.8rem' }}>
            📄 EXPORT INVESTIGATION DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphIntelligence;
