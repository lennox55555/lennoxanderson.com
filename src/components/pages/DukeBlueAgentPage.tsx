import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface DukeBlueAgentPageProps {
  onNavigate: (page: PageType) => void;
}

export function DukeBlueAgentPage({ onNavigate }: DukeBlueAgentPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Duke Blue Agent</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Duke Blue Agent</div>
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
            AI Agent<br/>System
          </div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Duke Blue Agent in action
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">AI Agent Project</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Domain</div>
            <div className="wiki-infobox-value">Artificial Intelligence<br />Autonomous Systems</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Institution</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('duke')}>Duke University</WikiLink>
            </div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Technologies</div>
            <div className="wiki-infobox-value">Machine Learning<br />AI Agents<br />Autonomous Decision Making</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Status</div>
            <div className="wiki-infobox-value">Active Development</div>
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
          <strong>Duke Blue Agent</strong> is an advanced artificial intelligence agent system developed at <WikiLink onClick={() => onNavigate('duke')}>Duke University</WikiLink> as part of cutting-edge research in autonomous AI systems and intelligent decision-making. The project represents a significant advancement in creating AI agents capable of independent reasoning, learning, and task execution across complex problem domains.
        </p>

        <p>
          The Duke Blue Agent project embodies Duke University's commitment to pushing the boundaries of artificial intelligence research, combining theoretical foundations with practical applications to create intelligent systems that can operate autonomously in dynamic environments.
        </p>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <video 
            src="/media/DukeBlueAgent.mp4" 
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
            Duke Blue Agent autonomous AI system demonstration
          </div>
        </div>

        <h2>About Duke Blue Agent</h2>
        <p>
          The Duke Blue Agent project was conceived and developed as part of advanced AI research initiatives at Duke University. The project focuses on creating sophisticated AI agents that can operate independently, make complex decisions, and adapt to changing conditions without constant human oversight.
        </p>

        <p>
          This innovative AI system development was led by <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>, incorporating state-of-the-art machine learning techniques and autonomous decision-making frameworks to create a versatile and capable artificial intelligence agent.
        </p>

        <h2>System Architecture and Capabilities</h2>

        <h3>Autonomous Decision Making</h3>
        <p>
          The Duke Blue Agent incorporates advanced decision-making algorithms that enable it to evaluate complex scenarios, weigh multiple variables, and make informed decisions without human intervention. The system's decision-making framework is built on sophisticated AI architectures that can process multiple data streams and contextual information simultaneously.
        </p>

        <p>
          The agent's autonomous capabilities extend beyond simple rule-based responses to include adaptive learning, strategic planning, and dynamic problem-solving that can adjust to new situations and unexpected challenges in real-time.
        </p>

        <h3>Machine Learning Integration</h3>
        <p>
          The system leverages cutting-edge machine learning techniques to continuously improve its performance and expand its capabilities. The Duke Blue Agent incorporates multiple ML paradigms including supervised learning, reinforcement learning, and unsupervised learning to create a comprehensive intelligent system.
        </p>

        <p>
          Through advanced learning algorithms, the agent can adapt its behavior based on experience, optimize its performance over time, and develop new strategies for handling complex tasks and environments.
        </p>

        <h3>Multi-Domain Operation</h3>
        <p>
          One of the key strengths of the Duke Blue Agent is its ability to operate across multiple problem domains. The system's architecture is designed to be domain-agnostic, allowing it to apply its intelligence and decision-making capabilities to diverse challenges and applications.
        </p>

        <p>
          This versatility makes the Duke Blue Agent particularly valuable for research applications and real-world deployments where flexibility and adaptability are essential requirements.
        </p>

        <h2>Research Applications and Impact</h2>

        <h3>AI Research Advancement</h3>
        <p>
          The Duke Blue Agent serves as a testbed for advanced AI research, enabling researchers to explore new approaches to autonomous intelligence, decision-making algorithms, and human-AI collaboration. The project contributes valuable insights to the broader AI research community.
        </p>

        <p>
          The system's development has led to advances in understanding how AI agents can be designed to operate safely and effectively in complex, unpredictable environments while maintaining alignment with human values and objectives.
        </p>

        <h3>Educational Impact</h3>
        <p>
          As part of Duke University's academic mission, the Duke Blue Agent project provides valuable learning opportunities for students and researchers working in artificial intelligence, computer science, and related fields. The project serves as both a research platform and an educational resource.
        </p>

        <p>
          Students and researchers gain hands-on experience with cutting-edge AI technologies, autonomous systems development, and the practical challenges of creating intelligent agents that can operate in real-world environments.
        </p>

        <h2>Technical Innovation</h2>

        <h3>Adaptive Learning Systems</h3>
        <p>
          The Duke Blue Agent incorporates sophisticated adaptive learning mechanisms that enable it to improve its performance over time. These systems allow the agent to learn from its experiences, adjust its strategies, and develop new approaches to problem-solving.
        </p>

        <p>
          The adaptive learning capabilities ensure that the agent becomes more effective and efficient as it gains experience, making it particularly valuable for long-term deployments and complex problem-solving scenarios.
        </p>

        <h3>Safe AI Development</h3>
        <p>
          The project places strong emphasis on developing AI systems that operate safely and reliably. The Duke Blue Agent incorporates multiple safety mechanisms and ethical considerations to ensure that its autonomous operations align with human values and safety requirements.
        </p>

        <p>
          This focus on AI safety makes the Duke Blue Agent a valuable contribution to the broader effort to develop artificial intelligence systems that can be trusted to operate autonomously in critical applications.
        </p>

        <h2>Future Development and Applications</h2>
        <p>
          The Duke Blue Agent project continues to evolve as new AI technologies and techniques become available. The system serves as a platform for ongoing research into autonomous intelligence, human-AI collaboration, and the development of more sophisticated AI agents.
        </p>

        <p>
          Future developments may include expanded capabilities, new application domains, and enhanced safety and reliability features that will further advance the state of AI agent technology and contribute to the broader field of artificial intelligence research.
        </p>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Artificial intelligence systems</a> |
          <a href="#">Autonomous agents</a> |
          <a href="#">Duke University research</a> |
          <a href="#">Machine learning applications</a> |
          <a href="#">AI safety</a>
        </div>
      </div>
    </div>
  );
}