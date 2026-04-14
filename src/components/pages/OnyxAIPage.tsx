
type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface OnyxAIPageProps {
  onNavigate: (page: PageType) => void;
}

export function OnyxAIPage({ onNavigate }: OnyxAIPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">ONYX AI LLC</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">ONYX AI LLC</div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Limited Liability Company</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Industry</div>
            <div className="wiki-infobox-value">Artificial Intelligence<br />Software Engineering</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Founded</div>
            <div className="wiki-infobox-value">2025</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Founder</div>
            <div className="wiki-infobox-value">Lennox Anderson</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Headquarters</div>
            <div className="wiki-infobox-value">Durham, North Carolina<br />United States</div>
          </div>
        </div>
      </div>

      <div className="wiki-text">

        <h2>Lennox Anderson's Role at ONYX AI</h2>

        <p>
          ONYX AI LLC was founded by <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('lennox'); }}>Lennox Anderson</a> in 2025 as an independent AI consulting and development firm. The company specializes in delivering end-to-end artificial intelligence solutions, leveraging expertise gained from prior roles at <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('flexgen'); }}>FlexGen Power Systems</a> and <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('manifest'); }}>Manifest Supply Studies</a>.
        </p>

        <h3>AI Consulting &amp; Solution Architecture</h3>
        <p>
          As founder and principal engineer, Anderson leads client engagements focused on designing and implementing custom AI systems. Projects span agentic automation, machine learning model development, and intelligent workflow integration across enterprise platforms.
        </p>

        <h3>Full-Stack AI Development</h3>
        <p>
          ONYX AI delivers production-grade AI applications combining modern frontend frameworks with scalable backend infrastructure. The development stack encompasses cloud-native architectures on AWS, CI/CD pipeline automation, and deployment of machine learning models into real-time production environments.
        </p>

        <h3>Agentic Systems &amp; Automation</h3>
        <p>
          Building on experience with LangGraph and MCP (Model Context Protocol) from prior work, ONYX AI develops autonomous agent systems that integrate with client toolchains including CRMs, communication platforms, and data warehouses to automate complex business workflows.
        </p>

        <h2>About ONYX AI</h2>
        <p>
          ONYX AI LLC operates as a boutique AI consultancy and development firm, providing organizations with access to advanced artificial intelligence capabilities. The company focuses on bridging the gap between cutting-edge AI research and practical business applications, delivering solutions that drive measurable operational improvements.
        </p>

        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Artificial intelligence companies</a> |
          <a href="#">Technology consulting firms</a> |
          <a href="#">Companies based in North Carolina</a> |
          <a href="#">Machine learning</a> |
          <a href="#">Companies established in 2025</a>
        </div>
      </div>
    </div>
  );
}
