import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface EnergyForecastingPageProps {
  onNavigate: (page: PageType) => void;
}

export function EnergyForecastingPage({ onNavigate }: EnergyForecastingPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Forecasting Energy Market Data</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Forecasting Energy Market Data</div>
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
            Energy Market<br/>Forecasting System
          </div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Hybrid ML architecture for energy trading
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Machine Learning Project</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Domain</div>
            <div className="wiki-infobox-value">Time Series Analysis<br />Energy Trading</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Market Coverage</div>
            <div className="wiki-infobox-value">1,046 ERCOT settlement points</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Prediction Horizons</div>
            <div className="wiki-infobox-value">15 minutes to 7 days</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Accuracy Improvement</div>
            <div className="wiki-infobox-value">Up to 6% over existing models</div>
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
          <strong>Forecasting Energy Market Data</strong> is an advanced machine learning project focused on developing hybrid ML/deep learning architectures for predicting energy market prices and demand patterns. The system combines multiple machine learning techniques in a multi-horizon framework to achieve superior accuracy for battery storage arbitrage optimization across the Electric Reliability Council of Texas (ERCOT) market.
        </p>

        <p>
          The project addresses critical challenges in energy trading by providing accurate predictions across multiple time horizons, from short-term 15-minute forecasts to long-term 7-day predictions, enabling more effective energy storage and trading strategies.
        </p>

        <h2>Project Overview</h2>
        <p>
          The Forecasting Energy Market Data project was developed to address the growing need for accurate energy market predictions in the context of battery energy storage systems and grid-scale energy trading. The research focused on creating a comprehensive forecasting system capable of handling the complex dynamics of energy markets across multiple time scales.
        </p>

        <p>
          This hybrid machine learning architecture was designed and implemented by <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>, combining the strengths of different algorithmic approaches to achieve unprecedented accuracy in energy market forecasting.
        </p>

        <h2>Technical Architecture</h2>

        <h3>Hybrid ML/Deep Learning Framework</h3>
        <p>
          The forecasting system employs a sophisticated hybrid architecture that combines Random Forest, XGBoost, and LSTM (Long Short-Term Memory) models in a unified multi-horizon prediction framework. This approach leverages the complementary strengths of different machine learning techniques:
        </p>

        <ul>
          <li><strong>Random Forest</strong> - Provides robust ensemble predictions and handles feature interactions effectively</li>
          <li><strong>XGBoost</strong> - Delivers high-performance gradient boosting with excellent handling of structured data</li>
          <li><strong>LSTM Networks</strong> - Captures long-term temporal dependencies and sequential patterns in time series data</li>
        </ul>

        <h3>Multi-Horizon Prediction Framework</h3>
        <p>
          The system is designed to provide accurate predictions across multiple time horizons, ranging from short-term 15-minute forecasts to long-term 7-day predictions. This multi-scale approach enables energy trading strategies that can optimize both immediate dispatch decisions and longer-term storage planning.
        </p>

        <p>
          The multi-horizon framework allows for comprehensive energy market analysis, supporting decision-making processes that require different levels of temporal granularity for optimal battery storage arbitrage strategies.
        </p>

        <h2>Market Coverage and Data Integration</h2>

        <h3>ERCOT Settlement Points</h3>
        <p>
          The forecasting system covers 1,046 ERCOT (Electric Reliability Council of Texas) settlement points, providing comprehensive market coverage across the Texas electricity grid. This extensive coverage enables detailed regional analysis and optimization strategies that account for geographical variations in energy prices and demand patterns.
        </p>

        <p>
          The system's ability to process and predict market conditions across such a large number of settlement points demonstrates its scalability and practical applicability to real-world energy trading operations.
        </p>

        <h3>Data Processing and Feature Engineering</h3>
        <p>
          The project involved sophisticated data processing techniques to integrate multiple data sources and create comprehensive feature sets for model training. This included historical price data, demand patterns, weather information, and other market-relevant variables.
        </p>

        <p>
          Advanced feature engineering techniques were employed to capture complex market dynamics and create input representations that effectively support the hybrid ML architecture's predictive capabilities.
        </p>

        <h2>Performance and Accuracy</h2>

        <h3>Benchmark Comparison</h3>
        <p>
          The hybrid forecasting system achieved up to 6% improved accuracy over current energy trading models used in battery storage arbitrage optimization. This improvement represents a significant advancement in energy market prediction capabilities, with direct implications for trading profitability and grid efficiency.
        </p>

        <p>
          The performance gains were measured against established baseline models and industry-standard forecasting approaches, demonstrating the practical value of the hybrid ML architecture for real-world energy trading applications.
        </p>

        <h3>Battery Storage Arbitrage Optimization</h3>
        <p>
          The improved forecasting accuracy directly translates to enhanced battery storage arbitrage strategies, enabling more profitable charge/discharge decisions and better utilization of energy storage assets. The system's predictions support optimization algorithms that determine optimal timing for energy storage and release operations.
        </p>

        <h2>Technical Innovation</h2>
        <p>
          The Forecasting Energy Market Data project represents a significant advancement in applying machine learning to energy market prediction. The hybrid architecture's ability to combine different ML techniques effectively addresses the complex, multi-scale nature of energy market dynamics.
        </p>

        <p>
          The project's multi-horizon approach provides a comprehensive solution for energy trading optimization, addressing both short-term operational decisions and longer-term strategic planning requirements within a single unified framework.
        </p>

        <h2>Applications and Impact</h2>
        <p>
          The forecasting system has significant applications in energy trading, grid operations, and renewable energy integration. The improved prediction accuracy enables more efficient use of energy storage resources and contributes to overall grid stability and economic efficiency.
        </p>

        <p>
          The project's success demonstrates the potential for advanced machine learning techniques to address critical challenges in energy market optimization, contributing to the broader adoption of renewable energy and grid modernization efforts.
        </p>


        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Energy market forecasting</a> |
          <a href="#">Machine learning applications</a> |
          <a href="#">Battery storage optimization</a> |
          <a href="#">Time series analysis</a> |
          <a href="#">Energy trading systems</a>
        </div>
      </div>
    </div>
  );
}