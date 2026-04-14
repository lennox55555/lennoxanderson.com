import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface CodeDayPageProps {
  onNavigate: (page: PageType) => void;
}

export function CodeDayPage({ onNavigate }: CodeDayPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">CodeDay</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">CodeDay</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/codeday_org_logo.jpg" 
            alt="CodeDay" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            CodeDay organization logo
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Technology Organization</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Industry</div>
            <div className="wiki-infobox-value">Software Development<br />Technology Education</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Focus</div>
            <div className="wiki-infobox-value">Product Development<br />Software Engineering</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Services</div>
            <div className="wiki-infobox-value">Software Development<br />Cloud Infrastructure<br />API Development</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Notable interns</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> (Software Engineer Intern, 2020)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>About CodeDay</h2>
        <p>
          CodeDay operates as a technology organization that bridges the gap between theoretical computer science education and practical software development skills. The organization focuses on providing hands-on experience with modern development tools, cloud infrastructure, and collaborative software engineering practices.
        </p>

        <p>
          The organization's approach emphasizes practical learning through real-world project development, giving participants the opportunity to work on production systems and develop skills in areas such as cloud computing, API development, and full-stack software engineering.
        </p>

        <h2>Software Engineering Contributions at CodeDay</h2>

        <h3>Hiking Trail Locator Product Development</h3>
        <p>
          The Software Engineer role at CodeDay in 2020 involved working on developing an innovative hiking trail locator product. This application was designed to help users find nearby hiking trails and connect with friends for outdoor activities.
        </p>

        <p>
          The hiking trail locator product incorporated social features that allowed users to discover new friends who shared similar outdoor interests and coordinate meetups at various hiking locations. The work focused on creating a comprehensive platform that combined location-based services with social networking capabilities.
        </p>

        <h3>Cloud Infrastructure and AWS Development</h3>
        <p>
          A significant portion of the work involved cloud infrastructure development and deployment using Amazon Web Services (AWS). Responsibilities included pushing code to production environments and managing cloud-based systems that supported the hiking trail locator application.
        </p>

        <p>
          The cloud development work included configuring and maintaining AWS services, implementing continuous integration and deployment pipelines, and ensuring that the application infrastructure could scale to support growing user demands. Experience with AWS provided valuable insights into modern cloud-native development practices.
        </p>

        <h3>Feature Development and Engineering</h3>
        <p>
          The role involved developing new features for the hiking trail locator platform. The work included implementing user-requested functionality, optimizing existing features, and ensuring that new capabilities integrated seamlessly with the existing system architecture.
        </p>

        <p>
          The feature development process required close collaboration with product managers and other developers to ensure that new functionality met user needs while maintaining high code quality and system performance standards.
        </p>

        <h3>Routing and API Development</h3>
        <p>
          Technical contributions included extensive work on routing systems and API development. The work involved designing and implementing API endpoints that supported the application's core functionality, including trail discovery, user matching, and social features.
        </p>

        <p>
          The routing and API development work required understanding of RESTful API design principles, data modeling, and integration patterns that would support both the hiking trail locator's core features and future extensibility requirements.
        </p>

        <h3>Production Code Deployment</h3>
        <p>
          Throughout the internship, the role involved writing and deploying production-ready code. This experience provided valuable exposure to software engineering best practices, including code review processes, testing procedures, and deployment strategies.
        </p>

        <p>
          The work on production deployments included ensuring code quality, implementing proper error handling, and maintaining system reliability during feature updates and infrastructure changes.
        </p>



        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Technology organizations</a> |
          <a href="#">Software development companies</a> |
          <a href="#">Educational technology</a> |
          <a href="#">Software engineering</a> |
          <a href="#">Cloud computing</a>
        </div>
      </div>
    </div>
  );
}