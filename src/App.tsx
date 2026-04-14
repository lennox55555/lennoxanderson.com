import { useState, useEffect } from 'react';
import { WikipediaLayout } from './components/WikipediaLayout';
import { LennoxAndersonPage } from './components/pages/LennoxAndersonPage';
import { FlexGenPage } from './components/pages/FlexGenPage';
import { ManifestSupplyPage } from './components/pages/ManifestSupplyPage';
import { DukeUniversityPage } from './components/pages/DukeUniversityPage';
import { UniversityOfColoradoPage } from './components/pages/UniversityOfColoradoPage';
import { GreenRiverCollegePage } from './components/pages/GreenRiverCollegePage';
import { InternationalWoodProductsPage } from './components/pages/InternationalWoodProductsPage';
import { DrivingDetectionPage } from './components/pages/DrivingDetectionPage';
import { EnergyForecastingPage } from './components/pages/EnergyForecastingPage';
import { AdversarialResearchPage } from './components/pages/AdversarialResearchPage';
import { MozambiqueMigrationPage } from './components/pages/MozambiqueMigrationPage';
import { DukeBlueAgentPage } from './components/pages/DukeBlueAgentPage';
import { EnergyAnalyticsPage } from './components/pages/EnergyAnalyticsPage';
import { CodeDayPage } from './components/pages/CodeDayPage';
import { OnyxAIPage } from './components/pages/OnyxAIPage';
import './wikipedia.css';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('lennox');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || 'lennox';
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial history state
    if (!window.history.state) {
      window.history.replaceState({ page: currentPage }, '', `#${currentPage}`);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', `#${page}`);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'lennox':
        return <LennoxAndersonPage onNavigate={handleNavigate} />;
      case 'flexgen':
        return <FlexGenPage onNavigate={handleNavigate} />;
      case 'manifest':
        return <ManifestSupplyPage onNavigate={handleNavigate} />;
      case 'duke':
        return <DukeUniversityPage onNavigate={handleNavigate} />;
      case 'colorado':
        return <UniversityOfColoradoPage onNavigate={handleNavigate} />;
      case 'greenriver':
        return <GreenRiverCollegePage onNavigate={handleNavigate} />;
      case 'iwp':
        return <InternationalWoodProductsPage onNavigate={handleNavigate} />;
      case 'driving-detection':
        return <DrivingDetectionPage onNavigate={handleNavigate} />;
      case 'energy-forecasting':
        return <EnergyForecastingPage onNavigate={handleNavigate} />;
      case 'adversarial-research':
        return <AdversarialResearchPage onNavigate={handleNavigate} />;
      case 'mozambique-migration':
        return <MozambiqueMigrationPage onNavigate={handleNavigate} />;
      case 'duke-blue-agent':
        return <DukeBlueAgentPage onNavigate={handleNavigate} />;
      case 'energy-analytics':
        return <EnergyAnalyticsPage onNavigate={handleNavigate} />;
      case 'codeday':
        return <CodeDayPage onNavigate={handleNavigate} />;
      case 'onyx-ai':
        return <OnyxAIPage onNavigate={handleNavigate} />;
      default:
        return <LennoxAndersonPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <WikipediaLayout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderCurrentPage()}
    </WikipediaLayout>
  );
}

export default App;