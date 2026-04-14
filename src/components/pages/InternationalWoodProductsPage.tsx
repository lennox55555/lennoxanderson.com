import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface InternationalWoodProductsPageProps {
  onNavigate: (page: PageType) => void;
}

export function InternationalWoodProductsPage({ onNavigate }: InternationalWoodProductsPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">International Wood Products</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">International Wood Products, LLC</div>
        <div className="wiki-infobox-image">
          <img 
            src="/media/iwptruck.jpg" 
            alt="International Wood Products truck" 
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', border: '1px solid #ccc' }}
          />
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            IWP delivery truck
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Limited Liability Company</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Industry</div>
            <div className="wiki-infobox-value">Building Materials<br />Distribution</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Headquarters</div>
            <div className="wiki-infobox-value">Clackamas, Oregon<br />United States</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Service Area</div>
            <div className="wiki-infobox-value">Western United States<br />Alaska & Hawaii</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Distribution Centers</div>
            <div className="wiki-infobox-value">6 locations</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Notable interns</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink> (Data Scientist , 2022)
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>About IWP</h2>
        <p>
          International Wood Products, LLC operates as an independent distributor specializing in quality building materials. The company's strategic approach combines a fleet of company-owned trucks with six strategically located distribution centers to ensure reliable service delivery across their extensive service area.
        </p>

        <p>
          IWP has established itself as a trusted partner to premier building products dealers throughout the Western United States. Their service territory extends from California to Washington State, reaching eastward to Idaho, Montana, Wyoming, and Utah, while also serving the unique logistical challenges of Alaska and Hawaii markets.
        </p>

        <p>
          The company's success is built on a foundation of quality materials, reliable service, and unwavering business integrity. IWP's employees are considered the company's greatest asset, with team members across all departments—from warehouse operations to sales, from road services to office administration—setting themselves apart through an unsurpassed level of customer service.
        </p>

        <h2>Data Science Contributions at International Wood Products</h2>

        <h3>Electronic Data Interchange (EDI) Automation</h3>
        <p>
          The Data Scientist role at International Wood Products from May to September 2022 involved making significant contributions to operational efficiency through advanced data science and optimization techniques.
        </p>

        <p>
          The primary achievement was the automation of Electronic Data Interchange (EDI) order processing using Python. This development involved sophisticated systems that streamlined the ingestion and analysis of EDI orders, significantly reducing manual processing overhead and improving order accuracy across the distribution network.
        </p>

        <h3>Logistics Optimization and Route Planning</h3>
        <p>
          Leveraging advanced mathematical optimization techniques, the implementation involved PuLP for linear programming to optimize truck routing under complex capacity and time constraints. These optimization algorithms achieved a 4% reduction in existing routing time, translating to significant operational cost savings and improved delivery efficiency across IWP's extensive service territory.
        </p>

        <h3>Warehouse Operations Enhancement</h3>
        <p>
          Machine learning techniques were applied to optimize warehouse product placement strategies. Using k-means clustering algorithms, order logs and historical order volumes were analyzed to identify optimal product positioning patterns. The Hungarian algorithm was then implemented to create efficient matches between product locations and delivery truck assignments.
        </p>

        <p>
          This comprehensive approach to warehouse optimization resulted in reduced average retrieval times and significantly improved truck loading efficiency, contributing to overall operational streamlining across IWP's distribution centers.
        </p>

        <h3>Data-Driven Decision Making</h3>
        <p>
          The work at IWP demonstrated the practical application of advanced data science techniques in traditional distribution operations. The implementations provided IWP with data-driven insights that continue to inform operational decisions and efficiency improvements across their distribution network.
        </p>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Building materials companies</a> |
          <a href="#">Distribution companies of the United States</a> |
          <a href="#">Companies based in Oregon</a> |
          <a href="#">Lumber companies</a> |
          <a href="#">Supply chain companies</a> |
          <a href="#">Sustainable forestry</a>
        </div>
      </div>
    </div>
  );
}