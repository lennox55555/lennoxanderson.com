import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface AdversarialResearchPageProps {
  onNavigate: (page: PageType) => void;
}

export function AdversarialResearchPage({ onNavigate }: AdversarialResearchPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Adversarial Perturbations Research</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Adversarial Perturbations Research</div>
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
            Audio Security<br/>Research
          </div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Adversarial ML for audio systems
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Security Research</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Domain</div>
            <div className="wiki-infobox-value">Audio Security<br />Adversarial ML</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Target Systems</div>
            <div className="wiki-infobox-value">Generative Voice Models<br />Voice Cloning Systems</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Attack Type</div>
            <div className="wiki-infobox-value">Imperceptible Audio Perturbations</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Architecture</div>
            <div className="wiki-infobox-value">Modular ML Framework</div>
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
          <strong>Adversarial Perturbations Research</strong> is a cybersecurity research project focused on developing adversarial machine learning techniques specifically targeting vocal audio systems and generative voice models. The research aims to create imperceptible audio perturbations that can successfully attack state-of-the-art voice cloning and vocal pattern recognition systems.
        </p>

        <p>
          This research addresses critical security vulnerabilities in audio-based AI systems, particularly those used for voice authentication, speech synthesis, and voice cloning applications, by demonstrating how subtle adversarial modifications can compromise their reliability and security.
        </p>

        <h2>Research Overview</h2>
        <p>
          The Adversarial Perturbations Research project was developed to explore security vulnerabilities in modern audio processing and voice synthesis systems. The research focuses on creating sophisticated attack vectors that can manipulate generative models while remaining imperceptible to human listeners.
        </p>

        <p>
          This research was conducted by <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> to advance understanding of adversarial machine learning in the audio domain, contributing to both offensive security research and defensive countermeasure development.
        </p>

        <h2>Technical Approach</h2>

        <h3>Adversarial Machine Learning Framework</h3>
        <p>
          The research employs advanced adversarial machine learning techniques specifically adapted for the audio domain. Unlike traditional image-based adversarial examples, audio perturbations must account for temporal dynamics, frequency characteristics, and human auditory perception constraints.
        </p>

        <p>
          The adversarial framework is designed to generate perturbations that are optimized for effectiveness against target voice models while maintaining imperceptibility to human listeners, requiring sophisticated optimization across multiple perceptual and technical dimensions.
        </p>

        <h3>Imperceptible Audio Perturbations</h3>
        <p>
          A core focus of the research is developing methods to create audio perturbations that remain below the threshold of human auditory perception while being sufficiently powerful to compromise target AI systems. This requires deep understanding of psychoacoustic principles and human auditory processing.
        </p>

        <p>
          The perturbation generation process incorporates perceptual masking techniques, frequency domain analysis, and temporal smoothing to ensure that adversarial modifications do not create detectable artifacts or distortions in the audio signal.
        </p>

        <h2>Target Systems and Applications</h2>

        <h3>Generative Voice Models</h3>
        <p>
          The research specifically targets state-of-the-art generative models used for voice synthesis and voice cloning applications. These systems, which have become increasingly sophisticated and widely deployed, represent critical infrastructure that could be vulnerable to adversarial attacks.
        </p>

        <p>
          By demonstrating successful attacks against these systems, the research highlights potential security risks in applications ranging from voice authentication systems to synthetic media detection and voice-based user interfaces.
        </p>

        <h3>Voice Cloning Systems</h3>
        <p>
          Voice cloning technology, which can replicate individual vocal patterns and characteristics, represents a particular area of concern for security and privacy. The research explores how adversarial perturbations might be used to compromise or manipulate these systems.
        </p>

        <p>
          The findings have implications for detecting and preventing malicious use of voice cloning technology, as well as improving the robustness of legitimate voice synthesis applications.
        </p>

        <h2>Modular Architecture Design</h2>

        <h3>Learning Framework</h3>
        <p>
          The research developed a modular architecture that learns to create perturbations through sophisticated loss functions designed to operate across various audio domains. This modular approach enables the system to adapt to different types of audio content and target models.
        </p>

        <p>
          The learning framework incorporates multiple loss function components that balance attack effectiveness, perceptual imperceptibility, and transferability across different target systems, creating a comprehensive optimization framework for adversarial audio generation.
        </p>

        <h3>Multi-Domain Optimization</h3>
        <p>
          The modular architecture supports optimization across multiple audio domains, including speech, music, and environmental sounds. This versatility demonstrates the broad applicability of the adversarial techniques and highlights potential vulnerabilities across diverse audio processing applications.
        </p>

        <p>
          The multi-domain approach also enables research into transferability of adversarial examples, investigating how perturbations designed for one type of audio content or target system might affect other related systems.
        </p>

        <h2>Security Implications and Defensive Applications</h2>

        <h3>Vulnerability Assessment</h3>
        <p>
          The research provides valuable insights into the security vulnerabilities of contemporary audio AI systems, revealing potential attack vectors that could be exploited by malicious actors. This vulnerability assessment is crucial for developing more robust and secure audio processing systems.
        </p>

        <p>
          By demonstrating effective attack methodologies, the research enables developers and security researchers to better understand the threat landscape and develop appropriate countermeasures and defensive strategies.
        </p>

        <h3>Defensive Security Development</h3>
        <p>
          The findings from this adversarial research directly inform the development of defensive techniques and robust AI systems. Understanding how adversarial attacks operate enables the creation of more resilient models and detection systems.
        </p>

        <p>
          The research contributes to the broader field of AI security by providing both attack methodologies and insights that can be used to improve the defensive capabilities of audio processing systems.
        </p>

        <h2>Research Impact and Applications</h2>
        <p>
          The Adversarial Perturbations Research project has significant implications for AI security, particularly in the rapidly growing field of audio AI applications. The research findings contribute to understanding the security landscape of voice-based systems and generative audio models.
        </p>

        <p>
          The work has applications in cybersecurity, AI safety research, and the development of robust machine learning systems for audio processing applications, contributing to the advancement of secure AI technologies.
        </p>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Adversarial machine learning</a> |
          <a href="#">Audio security research</a> |
          <a href="#">AI safety</a> |
          <a href="#">Voice cloning security</a> |
          <a href="#">Cybersecurity research</a>
        </div>
      </div>
    </div>
  );
}