import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">TaskFlow</div>
        <button className="start-btn">Get Started</button>
      </nav>
      
      <main className="hero-section">
        <div className="hero-content">
          <h1>Streamline Your Workflow</h1>
          <p>Manage tasks effortlessly with our intuitive drag-and-drop interface</p>
          <div className="hero-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">Watch Demo</button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature-box">
            <h3>Drag & Drop</h3>
            <p>Intuitive task management</p>
          </div>
          <div className="feature-box">
            <h3>Real-time</h3>
            <p>Instant updates</p>
          </div>
          <div className="feature-box">
            <h3>Teams</h3>
            <p>Collaborative workspace</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;