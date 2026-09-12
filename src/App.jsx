import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModelsOverview from './pages/ModelsOverview';
import ModelSelection from './pages/ModelSelection';
import DigitalResources from './pages/DigitalResources';
import Redesign from './pages/Redesign';
import EvaluationApplication from './pages/EvaluationApplication';
import References from './pages/References';

export default function App() {
  // Navigation state: 'home', 'models', 'models-selection', 'models-resources', 'redesign', 'evaluation', 'references'
  const [activePage, setActivePage] = useState('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'models':
        return <ModelsOverview onNavigate={setActivePage} />;
      case 'models-selection':
        return <ModelSelection onNavigate={setActivePage} />;
      case 'models-resources':
        return <DigitalResources onNavigate={setActivePage} />;
      case 'redesign':
        return <Redesign onNavigate={setActivePage} />;
      case 'evaluation':
        return <EvaluationApplication onNavigate={setActivePage} />;
      case 'references':
        return <References onNavigate={setActivePage} />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="app-container" id="top">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderActivePage()}
      </main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
}
