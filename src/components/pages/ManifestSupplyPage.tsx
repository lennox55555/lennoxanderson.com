import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface ManifestSupplyPageProps {
  onNavigate: (page: PageType) => void;
}

export function ManifestSupplyPage({ onNavigate }: ManifestSupplyPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Manifest Supply Studies</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Manifest Supply Studies</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/Manifest.png" 
            alt="Manifest Supply Studies" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Manifest Supply Studies Website/Product
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Private Company</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Industry</div>
            <div className="wiki-infobox-value">Supply Chain Analytics<br />Data Visualization</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Headquarters</div>
            <div className="wiki-infobox-value">New York, New York<br />United States</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Services</div>
            <div className="wiki-infobox-value">Supply Chain Visualization<br />Geospatial Analytics<br />Route Optimization</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Notable employees</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> (Former Software Engineer)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>About Manifest Supply Studies</h2>
        <p>
          Manifest Supply Studies develops sophisticated visualization platforms that integrate multiple geospatial technologies including ArcGIS, D3.js, and Leaflet mapping libraries. These platforms enable clients to visualize complex supply chain networks and track temporal changes in routing and logistics operations.
        </p>

        <p>
          The company's visualization solutions are designed to handle large-scale datasets while maintaining optimal performance in client-side applications. Their systems provide real-time tracking capabilities and historical analysis for supply chain optimization.
        </p>

        <h2>Software Engineering Contributions at Manifest Supply Studies</h2>

        <h3>Interactive Supply Chain Visualization Platform</h3>
        <p>
          The Software Engineer role at Manifest Supply Studies from May 2023 to August 2024 involved collaborating with a team of engineers to develop cutting-edge temporal visualization capabilities for interactive supply chain mapping software.
        </p>

        <p>
          The work was instrumental in integrating multiple geospatial technologies including ArcGIS, D3.js, and Leaflet to create sophisticated interactive supply chain visualizations. This implementation enabled users to visualize complex route tracking across time dimensions for large-scale datasets and supply chain networks while maintaining optimal time complexity performance in client-side applications.
        </p>

        <h3>Advanced Testing Framework Implementation</h3>
        <p>
          Recognizing the critical importance of software reliability in supply chain visualization, the project involved designing and implementing comprehensive automated testing frameworks using JavaScript. This proactive approach to quality assurance included both end-to-end and unit testing solutions that systematically identified race conditions and potential bugs before they could impact production systems.
        </p>

        <p>
          The testing implementation achieved an impressive 81% code coverage across the entire client-side application, establishing robust maintainability standards and ensuring reliable performance for all future development rollouts. This comprehensive testing infrastructure became foundational to the platform's stability and scalability.
        </p>

        <h3>Technical Innovation and Impact</h3>
        <p>
          The work at Manifest Supply Studies demonstrated the ability to balance complex technical requirements with user experience considerations. The solutions successfully handled large-scale supply chain datasets while delivering responsive, interactive visualizations that provided valuable insights into temporal logistics patterns.
        </p>

        <p>
          The temporal visualization capabilities developed represented a significant advancement in supply chain analytics, enabling clients to understand complex geographical and temporal patterns in their logistics operations with unprecedented clarity and interactivity.
        </p>



        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Technology companies of the United States</a> |
          <a href="#">Supply chain management companies</a> |
          <a href="#">Data visualization companies</a> |
          <a href="#">Companies based in New York</a> |
          <a href="#">Geospatial technology companies</a>
        </div>
      </div>
    </div>
  );
}