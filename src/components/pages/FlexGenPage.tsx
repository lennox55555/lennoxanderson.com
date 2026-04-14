
type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface FlexGenPageProps {
  onNavigate: (page: PageType) => void;
}

export function FlexGenPage({ onNavigate }: FlexGenPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">FlexGen Power Systems</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">FlexGen Power Systems</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/FlexGen.png" 
            alt="FlexGen Power Systems" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Where software meets batteries
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Private Company</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Industry</div>
            <div className="wiki-infobox-value">Energy Storage<br />Power Systems</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Founded</div>
            <div className="wiki-infobox-value">2009</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Headquarters</div>
            <div className="wiki-infobox-value">Durham, North Carolina<br />United States</div>
          </div>
        </div>
      </div>

      <div className="wiki-text">

        <h2>Lennox Anderson's Contributions at FlexGen</h2>

        <h3>Autonomous AI Systems Development</h3>
        <p>
          Joining FlexGen Power Systems in September 2024 as a Machine Learning Engineer, the role involved leading the development of autonomous agentic solutions for root cause analysis and case escalation in battery management systems. Successfully being the tech lead through 3 phases of funding, until later formation of a AI/ML team resulting in an internal and external facing product.
        </p>

        <p>
          The work involved architecting and implementing systems using LangGraph and MCP (Model Context Protocol) to seamlessly integrate with multiple enterprise platforms including Salesforce, Slack, Operational Time Series Data, SharePoint, Confluence, and Jira, creating a unified intelligent workflow system.
        </p>

        <h3>Machine Learning for Battery Analytics</h3>
        <p>
          Development and deployment of comprehensive machine learning solutions incorporated naïve, traditional, and deep learning approaches to detect anomalies at rack, module, and cell levels in battery systems. These models were integrated into CI/CD pipelines on AWS, significantly cutting incident resolution time and improving operational reliability.
        </p>

        <h3>Hybrid OS Coordinate - ML/AI Research & Development</h3>
        <p>
          Leading the ML/AI research and development initiative under FlexGen's Hybrid OS Coordinate product involved building data pipelines to process and analyze a comprehensive 9TB dataset containing market price data, operational data, events, and fault data.
        </p>

        <p>
          Through extensive Exploratory Data Analysis (EDA) and Feature Engineering, optimized datasets were established for training advanced ML architectures. The work involved designing and implementing a novel architecture combining LSTM networks and Reinforcement Learning to predict the market forecasting and usage and health of battery sites, directly enabling customers to maximize energy trading opportunities.
        </p>

        {/* Three-column layout: Image - Video - Image */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', margin: '30px 0', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left Image */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/media/batterylab.png" 
              alt="FlexGen Battery Lab"
              style={{ 
                height: '225px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px', fontStyle: 'italic' }}>
              On site battery lab
            </div>
          </div>

          {/* Center Video */}
          <div style={{ textAlign: 'center' }}>
            <video 
              src="/media/therocspeed.mp4" 
              autoPlay
              loop
              muted
              playsInline
              style={{ 
                height: '225px',
                width: 'auto',
                border: '1px solid #ccc',
                objectFit: 'contain'
              }}
            >
              Your browser does not support the video tag.
            </video>
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px', fontStyle: 'italic' }}>
              Probably training, cleaning data, or feature engineering
            </div>
          </div>

          {/* Right Image */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/media/sitevisit.png" 
              alt="FlexGen Site Visit"
              style={{ 
                height: '225px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px', fontStyle: 'italic' }}>
              Where software meets hardware
            </div>
          </div>
        </div>

        <h2>About FlexGen</h2>
        <p>
          FlexGen Power Systems was established in 2009 with the mission of creating flexible, scalable energy storage solutions for the evolving electrical grid. The company has grown to become a significant player in the battery energy storage system (BESS) market, focusing on both hardware integration and software development for energy management.
        </p>

        <p>
          Over the years, FlexGen has expanded its operations to include advanced analytics, machine learning applications for predictive maintenance, and comprehensive energy management systems that integrate with various grid operators and energy trading platforms.
        </p>

        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Energy companies of the United States</a> |
          <a href="#">Battery technology companies</a> |
          <a href="#">Companies based in North Carolina</a> |
          <a href="#">Energy storage</a> |
          <a href="#">Power system technology</a> |
          <a href="#">Companies established in 2009</a>
        </div>
      </div>
    </div>
  );
}