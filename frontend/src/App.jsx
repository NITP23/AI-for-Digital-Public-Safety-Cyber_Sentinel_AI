import { useState } from 'react';
import Sidebar from './components/Sidebar';
import LiveCallAnalyzer from './components/LiveCallAnalyzer';
import FraudVerifier from './components/FraudVerifier';
import PoliceDashboard from './components/PoliceDashboard';
import GraphIntelligence from './components/GraphIntelligence';
import ThreatHeatMap from './components/ThreatHeatMap';

function App() {
  const [activeTab, setActiveTab] = useState('call-analyzer');

  const renderContent = () => {
    switch (activeTab) {
      case 'call-analyzer':
        return <LiveCallAnalyzer />;
      case 'fraud-verifier':
        return <FraudVerifier />;
      case 'dashboard':
        return <PoliceDashboard />;
      case 'graph':
        return <GraphIntelligence />;
      case 'heatmap':
        return <ThreatHeatMap />;
      default:
        return <LiveCallAnalyzer />;
    }
  };

  return (
    <>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        {renderContent()}
      </main>
    </>
  );
}

export default App;
