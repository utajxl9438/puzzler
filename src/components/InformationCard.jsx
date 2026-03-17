import "./informationcard.css";
function InformationCard() {
  return (
    <div className="info-card">
      <header className="info-card-header">
        <img
          className="info-card-image"
          src="https://png.pngtree.com/png-vector/20240906/ourmid/pngtree-realistic-pineapple-clipart-illustration-tropical-fruit-graphic-png-image_13764427.png"
          alt="Delicious Pineapple"
        />

        <h1 className="info-card-title">Pineapple</h1>

        <div className="status-badge">
          <div className="status-badge-dot"></div>
          <span>Peak Right Now</span>
        </div>
      </header>
      
      {/* Seasonal Information Panel */}
      <div className="info-card-panel">
        <h2>Seasonal Information</h2>

        <ul className="timeline">
          <li className="timeline-month"><div className="timeline-bar"></div><span className="timeline-label">Jan</span></li>
          <li className="timeline-month"><div className="timeline-bar"></div><span className="timeline-label">Feb</span></li>
          <li className="timeline-month"><div className="timeline-bar"></div><span className="timeline-label">Mar</span></li>

          <li className="timeline-month early"><div className="timeline-bar"></div><span className="timeline-label">Apr</span></li>
          <li className="timeline-month early"><div className="timeline-bar"></div><span className="timeline-label">May</span></li>

          <li className="timeline-month peak"><div className="timeline-bar"></div><span className="timeline-label">Jun</span></li>
          <li className="timeline-month peak current"><div className="timeline-bar"></div><span className="timeline-label">Jul</span></li>
          <li className="timeline-month peak"><div className="timeline-bar"></div><span className="timeline-label">Aug</span></li>

          <li className="timeline-month late"><div className="timeline-bar"></div><span className="timeline-label">Sep</span></li>

          <li className="timeline-month"><div className="timeline-bar"></div><span className="timeline-label">Oct</span></li>
          <li className="timeline-month"><div className="timeline-bar"></div><span className="timeline-label">Nov</span></li>
          <li className="timeline-month"><div className="timeline-bar"></div><span className="timeline-label">Dec</span></li>
        </ul>

        <hr />

        <ul className="legend">
          <li className="legend-item peak">
            <div className="legend-dot"></div>
            <span>Peak</span>
          </li>
          <li className="legend-item early">
            <div className="legend-dot"></div>
            <span>Early</span>
          </li>
          <li className="legend-item late">
            <div className="legend-dot"></div>
            <span>Late</span>
          </li>
          <li className="legend-item">
            <div className="legend-dot"></div>
            <span>Unavailable</span>
          </li>
        </ul>
      </div>

      <p className="info-card-meta">Best Within: 3–4 Days</p>
      <p className="info-card-meta">Flavor Profile: Sweet + Juicy</p>
    </div>
  );
}

export default InformationCard;
