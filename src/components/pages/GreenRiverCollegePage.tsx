import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface GreenRiverCollegePageProps {
  onNavigate: (page: PageType) => void;
}

export function GreenRiverCollegePage({ onNavigate }: GreenRiverCollegePageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Green River College</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Green River College</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/GreenRiver.jpg" 
            alt="Green River College" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Green River College mascot representation
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Public community college</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Established</div>
            <div className="wiki-infobox-value">1963</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Location</div>
            <div className="wiki-infobox-value">Auburn, Washington<br />United States</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Campus</div>
            <div className="wiki-infobox-value">Suburban, 180 acres</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Notable alumni</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> (AS Software Development & Data Analytics, 2022)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>Academic programs</h2>

        <h3>Software Development and Data Analytics</h3>
        <p>
          Green River College offers an Associate of Applied Science degree in Software Development & Data Analytics, a comprehensive program that combines fundamental programming skills with data analysis techniques. The program is designed to prepare students for entry-level positions in software development and data science.
        </p>

        <p>
          The curriculum includes coursework in programming languages, database design, statistical analysis, data visualization, and software engineering principles. Students learn both theoretical concepts and practical skills through hands-on projects and real-world applications.
        </p>

        <h2>Notable alumni</h2>

        <h3>Lennox Anderson</h3>
        <p>
          <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> completed an Associate of Applied Science degree in Software Development & Data Analytics at Green River College from August 2019 to January 2022. The experience at Green River College provided the foundational knowledge and skills that would support subsequent academic and professional achievements.
        </p>

        <p>
          During time at Green River College, Anderson developed expertise in programming, data analysis, and software development methodologies. The comprehensive curriculum and hands-on learning approach at Green River College prepared for success in continued education at the <WikiLink onClick={() => onNavigate('colorado')}>University of Colorado Boulder</WikiLink> and eventual career in technology.
        </p>

        <p>
          The academic journey from Green River College to <WikiLink onClick={() => onNavigate('colorado')}>CU Boulder</WikiLink> and then to <WikiLink onClick={() => onNavigate('duke')}>Duke University</WikiLink> demonstrates the quality of education provided to students pursuing careers in technology and engineering.
        </p>

        <p>
          Professional success at <WikiLink onClick={() => onNavigate('manifest')}>Manifest Supply Studies</WikiLink> and <WikiLink onClick={() => onNavigate('flexgen')}>FlexGen Power Systems</WikiLink> reflects the practical, industry-relevant education received at Green River College, particularly in software development and data analytics.
        </p>

        <h3>Coursework and Technical Foundation</h3>
        <p>
          During the associate degree program, Anderson completed a comprehensive technical curriculum that provided both programming fundamentals and practical application skills. In <strong>Python Programming</strong>, developed proficiency in Python syntax, object-oriented programming, and software development best practices. The <strong>Java Programming</strong> course provided experience with enterprise-level programming concepts and cross-platform application development.
        </p>

        <p>
          The computer science foundation was strengthened through <strong>Data Structures and Algorithms</strong>, learning essential computational problem-solving techniques and algorithm optimization. Web development expertise was built through <strong>Front-end Web Development</strong> and <strong>Web Development 2</strong>, covering both client-side technologies and advanced web application development patterns.
        </p>

        <p>
          The data-focused curriculum included <strong>Python for Data</strong>, which provided specialized skills in data manipulation and analysis using Python libraries. <strong>Database Technologies</strong> and <strong>Data Technologies</strong> courses offered comprehensive training in database design, management, and data processing systems. The analytical foundation was completed with <strong>Statistics</strong>, providing the mathematical background necessary for data analysis and interpretation.
        </p>



        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Green River College</a> |
          <a href="#">Community colleges in Washington</a> |
          <a href="#">Public colleges in the United States</a> |
          <a href="#">Educational institutions in King County, Washington</a> |
          <a href="#">Educational institutions established in 1963</a>
        </div>
      </div>
    </div>
  );
}