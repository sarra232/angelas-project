import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModelsOverview from './pages/ModelsOverview';
import Redesign from './pages/Redesign';
import EvaluationApplication from './pages/EvaluationApplication';
import References from './pages/References';

export default function App() {
  // Navigation tabs: 'home', 'models', 'redesign', 'evaluation', 'references'
  const [activePage, setActivePage] = useState('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'models':
      case 'models-selection':
      case 'models-resources':
        return <ModelsOverview onNavigate={setActivePage} />;
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
    <div className="app-container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="wix-main-container">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
}
