import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface MozambiqueMigrationPageProps {
  onNavigate: (page: PageType) => void;
}

export function MozambiqueMigrationPage({ onNavigate }: MozambiqueMigrationPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Mozambique Migration Prediction Patterns</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Mozambique Migration Prediction Patterns</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/AnimalMigrationHome.png" 
            alt="Animal Migration Project" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Animal migration patterns in Mozambique
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Wildlife Research Project</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Domain</div>
            <div className="wiki-infobox-value">Geospatial Analysis<br />Wildlife Conservation</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Location</div>
            <div className="wiki-infobox-value">Mozambique, East Africa</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Focus Species</div>
            <div className="wiki-infobox-value">Large Mammals<br />Migratory Wildlife</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Technologies</div>
            <div className="wiki-infobox-value">Machine Learning<br />Predictive Modeling<br />GIS Analysis</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Principal Investigator</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <p>
          <strong>Mozambique Migration Prediction Patterns</strong> is a comprehensive wildlife conservation research project focused on developing machine learning models to predict and analyze animal migration patterns across Mozambique's diverse ecosystems. The project combines geospatial analysis, wildlife tracking data, and advanced predictive modeling to understand and forecast the movement patterns of large mammals and migratory species.
        </p>

        <p>
          This research addresses critical conservation challenges in East Africa by providing scientific insights into wildlife movement patterns that can inform conservation strategies, wildlife corridor planning, and ecosystem management decisions across Mozambique's national parks and protected areas.
        </p>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <video 
            src="/media/AnimalMigration.mp4" 
            autoPlay
            loop
            muted
            playsInline
            style={{ 
              maxWidth: '600px', 
              width: '100%',
              height: 'auto', 
              border: '1px solid #ccc'
            }}
          >
            Your browser does not support the video tag.
          </video>
          <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
            Animal migration patterns across Mozambique's diverse ecosystems
          </div>
        </div>

        <h2>Project Overview</h2>
        <p>
          The Mozambique Migration Prediction Patterns project was developed to address the urgent need for scientific understanding of wildlife movement in one of Africa's most biodiverse regions. Mozambique's strategic location along the East African coast, combined with its varied ecosystems ranging from coastal wetlands to inland savannas, creates complex migration corridors that require sophisticated analysis.
        </p>

        <p>
          This interdisciplinary research initiative was led by <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>, combining expertise in machine learning, geospatial analysis, and wildlife biology to create comprehensive predictive models for animal migration patterns.
        </p>

        <h2>Research Methodology</h2>

        <h3>Data Collection and Integration</h3>
        <p>
          The project involved the integration of multiple data sources to create a comprehensive dataset for migration pattern analysis. This included satellite tracking data from collared animals, camera trap observations, ranger patrol reports, and environmental monitoring data from across Mozambique's protected areas.
        </p>

        <p>
          The research team collaborated with local conservation organizations, national park authorities, and international wildlife monitoring programs to access high-quality wildlife tracking data spanning multiple years and covering diverse species and habitats.
        </p>

        <h3>Geospatial Analysis Framework</h3>
        <p>
          The project employed advanced Geographic Information Systems (GIS) analysis to map migration corridors, identify critical habitat connections, and analyze the relationship between environmental factors and animal movement patterns. This spatial analysis formed the foundation for understanding the geographic context of wildlife migrations.
        </p>

        <p>
          The geospatial framework incorporated elevation data, vegetation mapping, water source locations, human settlement patterns, and seasonal climate variations to create comprehensive environmental context for migration pattern analysis.
        </p>

        <h2>Machine Learning Development</h2>

        <h3>Predictive Modeling Architecture</h3>
        <p>
          The project developed sophisticated machine learning models capable of predicting animal migration patterns based on environmental conditions, seasonal variations, and historical movement data. The predictive modeling framework incorporated multiple algorithmic approaches to handle the complex, multi-dimensional nature of wildlife movement data.
        </p>

        <p>
          The models were designed to account for species-specific behaviors, environmental constraints, human-wildlife interactions, and seasonal patterns that influence migration timing and routes across Mozambique's diverse landscapes.
        </p>

        <h3>Species-Specific Analysis</h3>
        <p>
          The research focused on large mammals and migratory species that play critical roles in Mozambique's ecosystems. This included elephants, buffalo, wildebeest, and other species whose movements significantly impact ecosystem dynamics and conservation planning requirements.
        </p>

        <p>
          Each species required specialized modeling approaches that accounted for unique behavioral patterns, habitat preferences, social structures, and environmental sensitivities that influence their migration decisions and movement patterns.
        </p>

        <h2>Conservation Applications</h2>

        <h3>Wildlife Corridor Planning</h3>
        <p>
          The predictive models developed through this research provide crucial insights for wildlife corridor planning and habitat connectivity conservation. By understanding predicted migration routes, conservation managers can prioritize corridor protection and identify critical areas for habitat restoration.
        </p>

        <p>
          The research findings directly inform land-use planning decisions, protected area management strategies, and conservation investment priorities across Mozambique's national parks and wildlife management areas.
        </p>

        <h3>Human-Wildlife Conflict Mitigation</h3>
        <p>
          Understanding migration patterns is essential for predicting and preventing human-wildlife conflicts. The project's predictive capabilities enable proactive management strategies that can reduce conflicts between migrating wildlife and local communities.
        </p>

        <p>
          The research provides valuable insights for developing early warning systems, seasonal management protocols, and community-based conservation programs that account for predicted wildlife movement patterns.
        </p>

        <h2>Environmental Impact Assessment</h2>

        <h3>Climate Change Considerations</h3>
        <p>
          The project incorporates climate change projections and environmental variability into migration pattern predictions, providing insights into how changing environmental conditions may affect wildlife movement patterns in the future.
        </p>

        <p>
          This forward-looking approach enables conservation planners to develop adaptive management strategies that can respond to changing migration patterns caused by climate change, habitat alteration, and human development pressures.
        </p>

        <h3>Ecosystem Monitoring</h3>
        <p>
          The research contributes to broader ecosystem monitoring efforts by providing quantitative measures of wildlife movement patterns that serve as indicators of ecosystem health and environmental change across Mozambique's protected areas.
        </p>

        <p>
          The migration pattern data serves as a valuable baseline for long-term monitoring programs and helps identify early indicators of ecosystem stress or environmental degradation that could affect wildlife populations.
        </p>

        <h2>Research Impact and Applications</h2>
        <p>
          The Mozambique Migration Prediction Patterns project has significant implications for wildlife conservation across East Africa, providing scientific foundations for evidence-based conservation planning and ecosystem management decisions.
        </p>

        <p>
          The research findings contribute to international conservation efforts, supporting transboundary conservation initiatives and regional wildlife management programs that require understanding of cross-border migration patterns and habitat connectivity.
        </p>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Wildlife conservation</a> |
          <a href="#">Animal migration research</a> |
          <a href="#">Geospatial analysis</a> |
          <a href="#">Conservation biology</a> |
          <a href="#">East African wildlife</a> |
          <a href="#">Predictive modeling</a>
        </div>
      </div>
    </div>
  );
}