import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import logo from '../../assets/voyago.png';

function Landing() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Voyago Logo" className="hero-logo" />
          <h1>Travel Planning, <span className="highlight">Simplified</span></h1>
          <p className="hero-subtitle">
            From 1-day getaways to long vacation trips — Voyago builds your perfect
            itinerary based on your preferences. Flights, lodging, and things to do,
            all in one place.
          </p>
          <div className="hero-cta">
            <Link to="/plan" className="btn btn-primary">Plan Your Trip</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <span className="card-dot"></span>
              <span className="card-dot"></span>
              <span className="card-dot"></span>
            </div>
            <div className="card-body">
              <div className="card-destination">New York City</div>
              <div className="card-details">
                <div className="card-detail-item">
                  <span className="card-icon">&#9992;</span>
                  <span>Flight booked</span>
                </div>
                <div className="card-detail-item">
                  <span className="card-icon">&#127968;</span>
                  <span>Hotel reserved</span>
                </div>
                <div className="card-detail-item">
                  <span className="card-icon">&#127759;</span>
                  <span>12 attractions planned</span>
                </div>
              </div>
              <div className="card-timeline">
                <div className="timeline-item active">
                  <div className="timeline-dot"></div>
                  <div className="timeline-text">
                    <strong>Day 1</strong>
                    <span>Central Park, MoMA, Times Square</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-text">
                    <strong>Day 2</strong>
                    <span>Brooklyn Bridge, DUMBO, Pizza Tour</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-text">
                    <strong>Day 3</strong>
                    <span>Statue of Liberty, SoHo, Broadway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="section-container">
          <h2>The Problem With Travel Planning</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">92%</div>
              <div className="stat-label">of Americans plan to travel this year</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">71%</div>
              <div className="stat-label">say planning is stressful</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">78%</div>
              <div className="stat-label">of parents find it even worse</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">16+</div>
              <div className="stat-label">hours spent planning a single trip</div>
            </div>
          </div>
          <p className="problem-text">
            Juggling fifty open tabs for flights, hotels, restaurants, and attractions?
            You're not alone. Travel planning is broken — and it doesn't have to be.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container">
          <h2>One Dashboard. Zero Stress.</h2>
          <p className="solution-subtitle">
            Tell us your preferences, and Voyago handles the rest. Your entire trip
            — planned, organized, and customizable — in one place.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#9992;</div>
              <h3>Flights</h3>
              <p>Find the best flight options and prices for your destination.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127968;</div>
              <h3>Lodging</h3>
              <p>Hotels, Airbnbs, and stays matched to your budget and style.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127759;</div>
              <h3>Attractions</h3>
              <p>Top things to do — free and paid — curated for your interests.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127860;</div>
              <h3>Dining</h3>
              <p>Restaurants and eateries tailored to your dietary preferences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128197;</div>
              <h3>Smart Scheduling</h3>
              <p>Best times to visit each spot, optimized for your trip length.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#9998;</div>
              <h3>Fully Editable</h3>
              <p>Your itinerary, your way. Swap, add, or remove anything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Tell Us Your Preferences</h3>
              <p>Where you want to go, how long, your budget, and what you love to do.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Build Your Itinerary</h3>
              <p>Voyago creates a complete, day-by-day plan with flights, stays, and activities.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Customize & Go</h3>
              <p>Edit anything you'd like, then pack your bags. It's that simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-section">
        <div className="section-container">
          <div className="value-content">
            <h2>Save 16+ Hours on Your Next Trip</h2>
            <p>
              The average traveler spends 16 hours planning and booking a trip.
              For millennials, it's over 20. Some estimates go as high as 30 hours.
            </p>
            <p>
              Voyago gives you all the information you need — flight tickets,
              best travel times, top attractions — in one interface. Spend your
              time traveling, not planning.
            </p>
            <Link to="/plan" className="btn btn-primary">Start Planning Free</Link>
          </div>
          <div className="value-comparison">
            <div className="comparison-card old-way">
              <h4>Without Voyago</h4>
              <ul>
                <li>50+ browser tabs open</li>
                <li>16-30 hours of research</li>
                <li>Scattered bookmarks & notes</li>
                <li>Missed hidden gems</li>
                <li>Constant stress</li>
              </ul>
            </div>
            <div className="comparison-card new-way">
              <h4>With Voyago</h4>
              <ul>
                <li>One clean dashboard</li>
                <li>Minutes, not hours</li>
                <li>Everything organized</li>
                <li>Curated local favorites</li>
                <li>Peace of mind</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Travel Smarter?</h2>
          <p>Join Voyago and plan your next adventure in minutes, not hours.</p>
          <Link to="/plan" className="btn btn-primary btn-large">Plan Your Trip Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Voyago" className="footer-logo" />
            <p>Travel planning, simplified.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <Link to="/plan">Plan a Trip</Link>
              <Link to="/blog">Travel Blog</Link>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Voyago. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
