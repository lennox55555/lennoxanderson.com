import { WikiLink } from '../WikiLink';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday';

interface DrivingDetectionPageProps {
  onNavigate: (page: PageType) => void;
}

export function DrivingDetectionPage({ onNavigate }: DrivingDetectionPageProps) {
  return (
    <div>
      <div className="wiki-article-header">
        <h1 className="wiki-article-title">Human Aligned Hazardous Driving Detection</h1>
        <div className="wiki-article-subtitle">From Wikipedia, the free encyclopedia</div>
        <div className="wiki-tabs">
          <a href="#" className="wiki-tab active" onClick={() => onNavigate('lennox')}>Article</a>
          <a href="#" className="wiki-tab" onClick={() => onNavigate('lennox')}>Home</a>
        </div>
      </div>

      <div className="wiki-infobox">
        <div className="wiki-infobox-title">Human Aligned Hazardous Driving Detection</div>
        <div className="wiki-infobox-image">
          <video 
            src="/media/HAHD/hazard_detection_demo.mp4" 
            autoPlay
            loop
            muted
            playsInline
            style={{ 
              width: '200px', 
              height: '120px', 
              objectFit: 'cover',
              border: '1px solid #ccc'
            }}
          >
            Your browser does not support the video tag.
          </video>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>
            Hazardous driving detection demo
          </div>
        </div>
        <div className="wiki-infobox-content">
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Type</div>
            <div className="wiki-infobox-value">Research Project</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Domain</div>
            <div className="wiki-infobox-value">Computer Vision<br />Machine Learning</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Data Collection</div>
            <div className="wiki-infobox-value">35+ hours of driving footage</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Technologies</div>
            <div className="wiki-infobox-value">Eye Tracking<br />Deep Learning<br />Bounding Box Detection</div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Principal Investigator</div>
            <div className="wiki-infobox-value">
              <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>
            </div>
          </div>
          <div className="wiki-infobox-row">
            <div className="wiki-infobox-label">Publication</div>
            <div className="wiki-infobox-value">
              <a href="https://arxiv.org/abs/2608.08947" target="_blank" rel="noopener noreferrer">arXiv:2608.08947</a>
            </div>
          </div>
        </div>
      </div>

      <div className="wiki-text">
        <h2>Project Overview</h2>
        <p>
          The Human Aligned Hazardous Driving Detection project was designed to bridge the gap between artificial intelligence perception and human judgment in identifying dangerous driving scenarios. The research methodology involved extensive data collection, simulation development, and the training of multiple machine learning architectures.
        </p>

        <p>
          This comprehensive research initiative was led by <WikiLink onClick={() => onNavigate('lennox')}>Lennox Anderson</WikiLink>, which required the integration of multiple technologies including computer vision, eye tracking systems, driving simulation platforms, and advanced machine learning models.
        </p>

        {/* Main Demo Video */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <video 
            src="/media/HAHD/hazard_detection_demo.mp4" 
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
          <br />
          <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic', textAlign: 'center', maxWidth: '600px', margin: '8px auto 0 auto' }}>
            Human Aligned Hazardous Driving Detection system demonstration with eye tracking and hazard identification
          </div>
        </div>

        <h2>Methodology and Data Collection</h2>

        {/* Durham NC Birds Eye View */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', paddingRight: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 20px 0 0', textAlign: 'justify' }}>
              The raw driving data was collected in Durham, North Carolina throughout 2023 and 2024 in a variety of driving conditions including rain, shine, day, night, snow and other hazardous situations. This comprehensive data collection approach ensured diverse environmental conditions were captured to create a robust dataset for training the hazard detection models.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src="/media/HAHD/durham.jpeg" 
              alt="Durham, NC birds eye view"
              style={{ 
                maxWidth: '100%',
                width: '100%',
                height: 'auto', 
                border: '1px solid #ccc'
              }}
            />
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
              Durham, North Carolina - Data collection area for driving footage
            </div>
          </div>
        </div>

        {/* Car Image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src="/media/HAHD/car.jpg" 
              alt="Data collection vehicle"
              style={{ 
                maxWidth: '100%',
                width: '100%',
                height: 'auto', 
                border: '1px solid #ccc'
              }}
            />
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
              Vehicle used for driving footage data collection
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '300px', paddingLeft: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 0 20px', textAlign: 'justify' }}>
              We used Tesla's built in dash cam system to record all the driving footage. The vehicle is a 2021 Model 3 equipped with Hardware 3, which provided high quality video capture capabilities. The integrated dash cam system automatically recorded driving sessions, capturing multiple camera angles and perspectives that were essential for comprehensive hazard detection analysis.
            </p>
          </div>
        </div>

        {/* Simulation Video */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', paddingRight: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 20px 0 0', textAlign: 'justify' }}>
              Once the video footage was easily exported from the Model 3 using a USB drive, comprehensive preprocessing was performed to segment the driving footage into optimized 15 second clips before uploading to AWS. The custom driving simulation system recorded users' eye gaze patterns throughout these 15 second driving scenarios, enabling participants to identify and mark hazardous situations by pressing the space bar. This methodology created precise ground truth annotations aligned with human visual attention and risk perception.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', padding: '15px' }}>
            <video 
              src="/media/HAHD/simulation.mp4" 
              autoPlay
              loop
              muted
              playsInline
              style={{ 
                maxWidth: '100%',
                width: '100%',
                height: 'auto', 
                border: '1px solid #ccc'
              }}
            >
              Your browser does not support the video tag.
            </video>
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
              Driving simulation system used for eye tracking data collection and ground truth annotation
            </div>
          </div>
        </div>

        {/* Data Overlay Video */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', padding: '15px' }}>
            <video 
              src="/media/HAHD/data_overlay.mp4" 
              autoPlay
              loop
              muted
              playsInline
              style={{ 
                maxWidth: '100%',
                width: '100%',
                height: 'auto', 
                border: '1px solid #ccc'
              }}
            >
              Your browser does not support the video tag.
            </video>
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
              Data overlay visualization showing eye tracking patterns and hazard detection overlays
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '300px', paddingLeft: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 0 20px', textAlign: 'justify' }}>
              Through this comprehensive data collection process, we successfully captured over 41,000 gaze samples accompanied by detailed participant biographical data. This extensive dataset provides unprecedented insights into human hazard perception during driving scenarios, creating a rich foundation for understanding the cognitive and visual patterns that inform human risk assessment in real world driving situations.
            </p>
          </div>
        </div>

        <h2>Machine Learning Development</h2>

        {/* YOLO Image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', paddingRight: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 20px 0 0', textAlign: 'justify' }}>
              YOLOv8 detected objects and provided bounding boxes. We engineered features from these detections: relative size, area, aspect ratio, and position coordinates.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', padding: '15px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              minHeight: '250px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9'
            }}>
              <img 
                src="/media/HAHD/yolo.png" 
                alt="YOLO object detection results"
                style={{ 
                  maxWidth: '100%',
                  maxHeight: '100%',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </div>
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic', textAlign: 'center' }}>
              YOLOv8 based object detection and hazard identification system results
            </div>
          </div>
        </div>

        {/* Hardware Images Stacked */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src="/media/HAHD/hardware1.jpg" 
              alt="Hardware setup"
              style={{ 
                maxWidth: '100%', 
                width: '100%',
                height: 'auto', 
                border: '1px solid #ccc'
              }}
            />
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
              Real time inference hardware system
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '300px', paddingLeft: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 0 20px', textAlign: 'justify' }}>
              The real time inference system utilizes a Raspberry Pi 5 16GB, a Raspberry Pi AI Hat 26 TOPS, and Arducam IMX519 Autofocus Camera 16MP AF. This is where the trained models perform inference to detect human aligned hazardous situations in real time, providing immediate hazard identification capabilities for active driving assistance applications.
            </p>
          </div>
        </div>

        {/* Pipelines Image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0', padding: '20px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px', paddingRight: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 20px 0 0', textAlign: 'justify' }}>
              The training pipeline uses YOLO detected objects and eye gaze data to label hazardous objects, training a Random Forest on visual features (size, position, area) from bounding boxes. During deployment, the Raspberry Pi's camera feeds live video to YOLO for object detection, then Random Forest classifies each object as hazardous or safe (no eye tracking needed). The system learned which visual patterns correlate with human attention, enabling real time hazard alerts.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', padding: '15px' }}>
            <img 
              src="/media/HAHD/pipelines.png" 
              alt="Data processing pipelines"
              style={{ 
                maxWidth: '100%',
                width: '100%',
                height: 'auto', 
                border: '1px solid #ccc'
              }}
            />
            <div style={{ fontSize: '12px', color: '#555', marginTop: '8px', fontStyle: 'italic' }}>
              Training and inference pipeline
            </div>
          </div>
        </div>

        <h2>Future Work</h2>
        <p>
          The project closed out with a paper published on arXiv (<a href="https://arxiv.org/abs/2608.08947" target="_blank" rel="noopener noreferrer">arXiv:2608.08947</a>), and the results reframed where the work should go next. Across every experiment, webcam based eye tracking (WebGazer.js) failed to produce a statistically significant improvement in hazard detection (p = 0.919, 0.578, and 0.667). A geometric analysis pinned down the root cause: WebGazer's 196 px error radius exceeds 93% of hazard object sizes, so attributing a gaze point to a specific object is physically impossible at that instrument precision.
        </p>

        <p>
          The clearest next step is a more accurate data collection and processing pipeline. The existing infrastructure, including the driving simulation platform, the four stage ETL pipeline, the causal alignment module, and the multi seed evaluation framework, was built for extensibility, so the imprecise webcam gaze input can be swapped for dedicated eye tracking hardware such as a Tobii tracker at 0.5–1° (sub degree) accuracy without rebuilding the rest of the system. Alongside better instrumentation, planned directions include collecting a larger post calibration dataset, adding a synthetic positive control that injects ground truth gaze labels to confirm the pipeline can detect signal when it genuinely exists, and benchmarking against established driving attention datasets such as DR(eye)VE and BDD-A.
        </p>

        <div className="wiki-categories">
          <span className="wiki-categories-label">Categories:</span>
          <a href="#">Computer vision research</a> |
          <a href="#">Machine learning projects</a> |
          <a href="#">Autonomous vehicle safety</a> |
          <a href="#">Human AI alignment</a> |
          <a href="#">Driver assistance systems</a>
        </div>
      </div>
    </div>
  );
}