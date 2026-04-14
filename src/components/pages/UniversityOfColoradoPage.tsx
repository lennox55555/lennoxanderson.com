import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface UniversityOfColoradoPageProps {
  onNavigate: (page: PageType) => void;
}

export function UniversityOfColoradoPage({ onNavigate }: UniversityOfColoradoPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">University of Colorado Boulder</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">University of Colorado Boulder</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/BoulderGradphoto.jpg" 
            alt="University of Colorado Boulder" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Graduation ceremony at CU Boulder
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Public research university</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Established</div>
            <div className="wiki-infobox-value">1876</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Location</div>
            <div className="wiki-infobox-value">Boulder, Colorado<br />United States</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Campus</div>
            <div className="wiki-infobox-value">Urban, 600 acres</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Notable alumni</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> (BS Computer & Information Sciences, 2024)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>Academic programs</h2>

        <h3>Computer & Information Sciences</h3>
        <p>
          CU Boulder's Computer & Information Sciences program is housed within the College of Media, Communication and Information and offers a comprehensive curriculum that combines computer science, data analysis, human-computer interaction, and information systems design. The program is designed to prepare students for careers in technology, data science, and digital media.
        </p>

        <p>
          The Computer & Information Sciences degree at CU Boulder emphasizes both technical skills and critical thinking about the role of information and technology in society. Students learn programming, database design, user experience design, and data analysis while also studying the social and ethical implications of information technologies.
        </p>

        <h2>Notable alumni</h2>

        <h3>Lennox Anderson</h3>
        <p>
          <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> graduated from the University of Colorado Boulder in June 2024 with a Bachelor of Science degree in Computer & Information Sciences. Anderson completed his undergraduate studies from January 2022 to June 2024, transferring from <WikiLink onClick={() => onNavigate('greenriver')}>Green River College</WikiLink> where he had completed his associate degree.
        </p>

        <p>
          During time at CU Boulder, Anderson developed expertise in programming, data analysis, and information systems that would later prove valuable in professional career. Academic background in information science provided the foundation for subsequent work in software engineering and machine learning applications.
        </p>

        <p>
          Anderson's transition from CU Boulder to graduate studies at <WikiLink onClick={() => onNavigate('duke')}>Duke University</WikiLink> and his career at <WikiLink onClick={() => onNavigate('flexgen')}>FlexGen Power Systems</WikiLink> demonstrates the practical applicability of CU Boulder's Computer & Information Sciences program in preparing students for advanced study and careers in technology.
        </p>

        <h3>Coursework and Academic Foundation</h3>
        <p>
          During undergraduate studies, Anderson completed a comprehensive curriculum that provided both theoretical knowledge and practical programming skills. In <strong>Applied Machine Learning</strong>, gained hands-on experience implementing machine learning algorithms and models for real-world applications. Foundational programming skills were developed through <strong>Computational Reasoning 1</strong> and <strong>Computational Reasoning 2</strong>, both taught in Python and focusing on algorithmic thinking and problem-solving methodologies.
        </p>

        <p>
          Analytical foundation was strengthened through <strong>Quantitative Reasoning</strong> and <strong>Data Science</strong> courses, both conducted in Python, which provided expertise in statistical analysis, data manipulation, and scientific computing. Mathematical background was built through <strong>Calculus</strong> and <strong>Statistics</strong>, providing the theoretical foundation necessary for advanced data analysis and machine learning applications.
        </p>

        <p>
          The curriculum was rounded out with <strong>Web Programming</strong>, which provided practical software development skills and understanding of modern web technologies, preparing for the diverse technical challenges encountered in information science careers.
        </p>



        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">University of Colorado Boulder</a> |
          <a href="#">Universities in Colorado</a> |
          <a href="#">Public universities in the United States</a> |
          <a href="#">Research universities</a> |
          <a href="#">Educational institutions established in 1876</a>
        </div>
      </div>
    </div>
  );
}