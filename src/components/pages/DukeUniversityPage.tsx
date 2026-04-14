import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface DukeUniversityPageProps {
  onNavigate: (page: PageType) => void;
}

export function DukeUniversityPage({ onNavigate }: DukeUniversityPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Duke University</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Duke University</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/Dukehackathon.png" 
            alt="Duke University" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Duke AI 2025 Hackathon Interview
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Private research university</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Established</div>
            <div className="wiki-infobox-value">1838</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Location</div>
            <div className="wiki-infobox-value">Durham, North Carolina<br />United States</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Campus</div>
            <div className="wiki-infobox-value">Suburban, 8,600 acres</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Notable alumni</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> (MEng, 2025)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>Academic programs</h2>

        <h3>Engineering and Technology</h3>
        <p>
          Duke's Pratt School of Engineering offers comprehensive programs in various engineering disciplines, including a Master of Engineering (MEng) program in Artificial Intelligence. This program is designed for working professionals and recent graduates seeking to deepen their understanding of AI technologies and their practical applications.
        </p>

        <p>
          The AI program at Duke focuses on advanced machine learning techniques, deep learning architectures, and their applications across various industries including energy systems, healthcare, and autonomous systems. Students engage in hands-on projects and research that prepare them for leadership roles in technology-driven organizations.
        </p>

        <h2>Notable students and alumni</h2>

        <h3>Lennox Anderson</h3>
        <p>
          <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> completed a Master of Engineering degree in Artificial Intelligence at Duke University in April 2025. The graduate studies focused on advanced machine learning techniques and artificial intelligence applications.
        </p>

        <p>
          The academic work at Duke focused on advancing theoretical understanding of artificial intelligence and machine learning through rigorous coursework and independent research projects.
        </p>

        <p>
          This combination of academic study at Duke and professional experience represented the type of industry-academia collaboration that Duke's engineering programs are designed to foster. The work demonstrates the practical application of advanced AI techniques to real-world challenges.
        </p>

        <h3>Coursework and Academic Focus</h3>
        <p>
          During the Master's program, the curriculum included specialized courses in artificial intelligence and machine learning. In <strong>Deep Learning Applications</strong>, the coursework explored advanced neural network architectures and their implementation in real-world scenarios. The work in <strong>Modeling Process & Algorithms</strong> focused on developing systematic approaches to machine learning model development and optimization.
        </p>

        <p>
          The studies in <strong>Large Language Models</strong> involved understanding transformer architectures and natural language processing applications. In <strong>Explainable AI</strong>, the coursework developed methods for making AI systems more interpretable and transparent. The <strong>Operational AI</strong> coursework emphasized the deployment and management of AI systems in production environments.
        </p>

        <p>
          The <strong>Sourcing for Data Analytics</strong> course provided expertise in data acquisition and preparation strategies for analytical projects. The <strong>Independent Study in Audio Adversarial Attacks</strong> involved research into security vulnerabilities in audio processing systems. Finally, <strong>AI Implications</strong> explored the ethical, social, and economic impacts of artificial intelligence technologies.
        </p>



        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Duke University</a> |
          <a href="#">Universities in North Carolina</a> |
          <a href="#">Private universities in the United States</a> |
          <a href="#">Research universities</a> |
          <a href="#">Educational institutions established in 1838</a>
        </div>
      </div>
    </div>
  );
}