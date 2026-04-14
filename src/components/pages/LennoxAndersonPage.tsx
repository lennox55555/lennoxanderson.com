import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface LennoxAndersonPageProps {
  onNavigate: (page: PageType) => void;
}

export function LennoxAndersonPage({ onNavigate }: LennoxAndersonPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Lennox Anderson</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Lennox Anderson</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/headshot.jpg" 
            alt="Lennox Anderson" 
            style={{ width: '200px', height: '250px', objectFit: 'cover', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Anderson in 2025
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Born</div>
            <div className="wiki-infobox-value">Seattle, Washington</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Education</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('duke')}>Duke University</WikiLink> (MEng)<br />
              <WikiLink onClick={() => onNavigate('colorado')}>University of Colorado Boulder</WikiLink> (BS)<br />
              <WikiLink onClick={() => onNavigate('greenriver')}>Green River College</WikiLink> (AS)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <p>
          <strong>Lennox Anderson</strong> is a researcher in AI Automation from Seattle, Washington, specializing in artificial intelligence and machine learning systems for energy applications. Currently employed at <WikiLink onClick={() => onNavigate('flexgen')}>FlexGen Power Systems</WikiLink> in Durham, North Carolina, leading engineering teams and developing machine learning solutions for battery energy storage systems.
        </p>

        <p>
          Known for research in time-series analysis and computer vision applications. Professional experience includes developing agentic automation systems for production software environments, as well as software engineering and data science work in supply chain operations & optimization.
        </p>

        <h2>Early life and education</h2>
        <p>
          Academic journey began at <WikiLink onClick={() => onNavigate('greenriver')}>Green River College</WikiLink>, earning an Associate of Applied Science degree in <b>Software Development & Data Analytics</b> from August 2019 to January 2022. Subsequently attended the <WikiLink onClick={() => onNavigate('colorado')}>University of Colorado Boulder</WikiLink>, completing a Bachelor of Science degree in <b>Computer & Information Sciences</b> from January 2022 to May 2024.
        </p>

        <p>
          Completed a Master of Engineering degree in <b>Artificial Intelligence</b> at <WikiLink onClick={() => onNavigate('duke')}>Duke University</WikiLink> from July 2024 to May 2025. Graduate studies focused on advanced machine learning techniques and their applications in energy systems.
        </p>

        <h2>Career</h2>

        <p>
          Anderson has worked across multiple organizations in the AI and technology sector, focusing on machine learning applications and automation systems:
        </p>

        <table className="wikitable">
          <thead>
            <tr>
              <th>Years</th>
              <th>Company</th>
              <th>Position</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024–present</td>
              <td><WikiLink onClick={() => onNavigate('flexgen')}>FlexGen Power Systems</WikiLink></td>
              <td>Machine Learning Engineer</td>
              <td>Durham, NC</td>
              <td>AI automation for battery management systems and predictive modeling with time-series data</td>
            </tr>
            <tr>
              <td>2023–2024</td>
              <td><WikiLink onClick={() => onNavigate('manifest')}>Manifest Supply Studies</WikiLink></td>
              <td>Software Engineer</td>
              <td>New York/Remote</td>
              <td>Interactive supply chain visualization platforms and temporal data analytics</td>
            </tr>
            <tr>
              <td>2022</td>
              <td><WikiLink onClick={() => onNavigate('iwp')}>International Wood Products</WikiLink></td>
              <td>Data Scientist</td>
              <td>Clackamas, OR</td>
              <td>Logistics optimization and warehouse automation through machine learning algorithms</td>
            </tr>
            <tr>
              <td>2020</td>
              <td><WikiLink onClick={() => onNavigate('codeday')}>CodeDay</WikiLink></td>
              <td>Software Engineer</td>
              <td>Seattle, WA</td>
              <td>Software development and engineering projects during early career internship experience</td>
            </tr>
          </tbody>
        </table>


        <h2>Research and projects</h2>

        <p>
          Anderson has conducted research across multiple domains in artificial intelligence and machine learning:
        </p>

        <table className="wikitable">
          <thead>
            <tr>
              <th>Project</th>
              <th>Domain</th>
              <th>Description</th>
              <th>Key Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><WikiLink onClick={() => onNavigate('driving-detection')}>Human Aligned Hazardous Driving Detection</WikiLink></td>
              <td>Computer Vision</td>
              <td>Gathered 35+ hours of raw driving footage and built a driving simulation that obtained eye gaze data and ground truth of hazardous situations. Developed and trained ML and DL models to predict bounding boxes of hazardous driving instances.</td>
              <td>Computer Vision, Eye Tracking, Deep Learning</td>
            </tr>
            {/* Commented out until ready to show to the world
            <tr>
              <td><WikiLink onClick={() => onNavigate('energy-forecasting')}>Forecasting Energy Market Data</WikiLink></td>
              <td>Time Series Analysis</td>
              <td>Hybrid ML/deep learning architecture combining Random Forest, XGBoost, and LSTM models in a multi-horizon framework (15min-7day predictions) to achieve up to 6% improved accuracy over current energy trading models for battery storage arbitrage optimization across 1,046 ERCOT settlement points.</td>
              <td>Random Forest, XGBoost, LSTM, Time Series Forecasting</td>
            </tr>
            <tr>
              <td><WikiLink onClick={() => onNavigate('adversarial-research')}>Adversarial Perturbations Research</WikiLink></td>
              <td>Audio Security</td>
              <td>Research in adversarial machine learning, focusing on creating imperceptible perturbations in vocal audio. Developed modular architecture to generate adversarial attacks against state-of-the-art generative models that clone vocal patterns.</td>
              <td>Adversarial ML, Audio Processing, Generative Models</td>
            </tr>
            <tr>
              <td><WikiLink onClick={() => onNavigate('mozambique-migration')}>Mozambique Migration Prediction Patterns</WikiLink></td>
              <td>Wildlife Conservation</td>
              <td>Developed machine learning models to predict and analyze animal migration patterns across Mozambique's diverse ecosystems. Combined geospatial analysis, wildlife tracking data, and predictive modeling for conservation planning.</td>
              <td>Machine Learning, GIS Analysis, Wildlife Conservation</td>
            </tr>
            <tr>
              <td><WikiLink onClick={() => onNavigate('duke-blue-agent')}>Duke Blue Agent</WikiLink></td>
              <td>AI Systems</td>
              <td>Advanced artificial intelligence agent system developed at Duke University for autonomous decision-making and intelligent task execution across complex problem domains.</td>
              <td>AI Agents, Autonomous Systems, Machine Learning</td>
            </tr>
            <tr>
              <td><WikiLink onClick={() => onNavigate('energy-analytics')}>Energy Analytics</WikiLink></td>
              <td>Data Analytics</td>
              <td>Comprehensive data analytics platform providing real-time insights and performance optimization for energy systems through advanced visualization and dashboard development.</td>
              <td>Data Visualization, Real-time Analytics, Energy Management</td>
            </tr>
            */}
          </tbody>
        </table>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Living people</a> |
          <a href="#">American software engineers</a> |
          <a href="#">Machine learning researchers</a> |
          <a href="#">Energy systems engineers</a> |
          <a href="#">Duke University alumni</a> |
          <a href="#">University of Colorado Boulder alumni</a>
        </div>
      </div>
    </div>
  );
}