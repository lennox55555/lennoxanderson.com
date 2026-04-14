import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface EnergyAnalyticsPageProps {
  onNavigate: (page: PageType) => void;
}

export function EnergyAnalyticsPage({ onNavigate }: EnergyAnalyticsPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Energy Analytics</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Energy Analytics</div>
        <div className="wiki-infobox-image">
          <div style={{ 
            width: '200px', 
            height: '120px', 
            backgroundColor: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px solid #ccc',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#666',
            textAlign: 'center'
          }}>
            Energy Analytics<br/>Platform
          </div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Energy Analytics Dashboard Interface
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Data Analytics Platform</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Domain</div>
            <div className="wiki-infobox-value">Energy Systems<br />Data Analytics</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Application</div>
            <div className="wiki-infobox-value">Energy Management<br />Performance Optimization</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Technologies</div>
            <div className="wiki-infobox-value">Data Visualization<br />Real-time Analytics<br />Dashboard Development</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Status</div>
            <div className="wiki-infobox-value">Production Deployment</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Principal Developer</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <p>
          <strong>Energy Analytics</strong> is a comprehensive data analytics platform designed to provide real-time insights and performance optimization capabilities for energy systems. The platform combines advanced data processing, visualization technologies, and analytical tools to enable comprehensive monitoring, analysis, and optimization of energy operations across multiple scales and applications.
        </p>

        <p>
          The Energy Analytics platform addresses the growing need for sophisticated data-driven decision making in energy management, providing stakeholders with the tools and insights necessary to optimize performance, reduce costs, and improve operational efficiency in complex energy systems.
        </p>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <video 
            src="/media/EnergyAnalytics.mp4" 
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
            Energy Analytics dashboard showing real-time performance metrics and visualizations
          </div>
        </div>

        <h2>About Energy Analytics</h2>
        <p>
          The Energy Analytics platform was developed to address the complex challenges of modern energy system management and optimization. The platform provides comprehensive analytical capabilities that enable energy professionals to make informed decisions based on real-time data and advanced analytical insights.
        </p>

        <p>
          This sophisticated analytics platform was designed and developed by <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>, incorporating cutting-edge data visualization techniques, real-time processing capabilities, and intuitive dashboard interfaces to create a comprehensive solution for energy system analytics.
        </p>

        <h2>Platform Architecture and Features</h2>

        <h3>Real-Time Data Processing</h3>
        <p>
          The Energy Analytics platform incorporates advanced real-time data processing capabilities that enable continuous monitoring and analysis of energy system performance. The platform can handle high-volume data streams from multiple sources, providing up-to-the-minute insights into system operations and performance metrics.
        </p>

        <p>
          The real-time processing architecture ensures that critical information is available immediately, enabling rapid response to changing conditions and proactive management of energy systems for optimal performance and reliability.
        </p>

        <h3>Advanced Data Visualization</h3>
        <p>
          The platform features sophisticated data visualization capabilities that transform complex energy data into intuitive, actionable insights. The visualization tools support multiple chart types, interactive dashboards, and customizable displays that can be tailored to specific user needs and operational requirements.
        </p>

        <p>
          The advanced visualization features enable users to quickly identify trends, anomalies, and optimization opportunities within their energy systems, facilitating more effective decision-making and operational management.
        </p>

        <h3>Interactive Dashboard Interface</h3>
        <p>
          The Energy Analytics platform provides a comprehensive dashboard interface that serves as the central hub for energy system monitoring and analysis. The dashboard is designed for ease of use while providing access to sophisticated analytical capabilities and detailed performance metrics.
        </p>

        <p>
          The interactive dashboard allows users to customize their view, drill down into specific data points, and access detailed analytical reports that provide comprehensive insights into energy system performance and optimization opportunities.
        </p>

        <h2>Applications and Use Cases</h2>

        <h3>Energy Management Optimization</h3>
        <p>
          The platform provides comprehensive tools for energy management optimization, enabling users to identify inefficiencies, optimize consumption patterns, and implement strategies that reduce costs while maintaining or improving system performance.
        </p>

        <p>
          Through detailed analysis of energy consumption patterns, system performance metrics, and operational data, the platform helps organizations make informed decisions about energy usage, infrastructure investments, and operational strategies.
        </p>

        <h3>Performance Monitoring and Analysis</h3>
        <p>
          The Energy Analytics platform excels in providing continuous performance monitoring and detailed analysis of energy system operations. The platform can track key performance indicators, identify performance trends, and alert users to potential issues before they become critical problems.
        </p>

        <p>
          The comprehensive monitoring capabilities ensure that energy systems operate at peak efficiency while providing the data necessary for proactive maintenance, strategic planning, and continuous improvement initiatives.
        </p>

        <h3>Predictive Analytics and Forecasting</h3>
        <p>
          The platform incorporates predictive analytics capabilities that enable users to forecast future energy needs, predict system performance, and anticipate potential challenges before they impact operations.
        </p>

        <p>
          These predictive capabilities support strategic planning, resource allocation, and proactive management strategies that help organizations optimize their energy operations and minimize risks.
        </p>

        <h2>Technical Innovation</h2>

        <h3>Scalable Data Architecture</h3>
        <p>
          The Energy Analytics platform is built on a scalable data architecture that can handle growing data volumes and expanding analytical requirements. The platform's architecture ensures that performance remains optimal as data sources and analytical complexity increase.
        </p>

        <p>
          This scalability makes the platform suitable for organizations of all sizes, from small-scale energy systems to large utility companies with complex, multi-site operations and massive data processing requirements.
        </p>

        <h3>Integration Capabilities</h3>
        <p>
          The platform features comprehensive integration capabilities that enable it to work seamlessly with existing energy management systems, databases, and analytical tools. This integration flexibility ensures that organizations can leverage their existing investments while adding powerful analytical capabilities.
        </p>

        <p>
          The platform's integration features support multiple data formats, communication protocols, and system architectures, making it adaptable to diverse organizational needs and technical environments.
        </p>

        <h2>Industry Impact and Applications</h2>

        <h3>Utility Operations</h3>
        <p>
          The Energy Analytics platform has significant applications in utility operations, providing comprehensive tools for grid management, demand forecasting, and operational optimization. Utility companies can use the platform to improve service reliability, optimize resource allocation, and enhance customer satisfaction.
        </p>

        <p>
          The platform's capabilities support both traditional utility operations and the integration of renewable energy sources, distributed generation, and smart grid technologies that are transforming the energy industry.
        </p>

        <h3>Industrial Energy Management</h3>
        <p>
          Industrial organizations use the Energy Analytics platform to optimize their energy consumption, reduce operational costs, and improve sustainability performance. The platform provides detailed insights into energy usage patterns and optimization opportunities across complex industrial operations.
        </p>

        <p>
          The platform supports both operational optimization and strategic planning for industrial energy management, helping organizations achieve their sustainability goals while maintaining operational efficiency and competitiveness.
        </p>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Energy analytics</a> |
          <a href="#">Data visualization</a> |
          <a href="#">Energy management systems</a> |
          <a href="#">Real-time analytics</a> |
          <a href="#">Dashboard development</a>
        </div>
      </div>
    </div>
  );
}