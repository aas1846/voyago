import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from '../../assets/voyago.png';

function About() {
  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <h1>About Voyago</h1>
        <p>Making travel planning effortless for everyone.</p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="section-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              Voyago exists to give travelers a seamless, time-saving, and easy
              planning experience. Whether it's a quick day trip or a week-long
              vacation, we believe nobody should spend more time planning a trip
              than enjoying it.
            </p>
            <p>
              We build personalized itineraries based on your specific preferences
              — including flights, lodging, and things to do throughout cities in
              America. And we're just getting started — Voyago aims to expand
              itinerary planning to smaller cities and towns across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="about-founder">
        <div className="section-container">
          <div className="founder-card">
            <div className="founder-avatar">AS</div>
            <div className="founder-info">
              <h2>Meet the Founder</h2>
              <h3>Aman Shah</h3>
              <p className="founder-title">Founder & CEO</p>
              <p>
                Voyago was born from a simple frustration — why does planning a
                vacation feel like a second job? Aman is building Voyago to
                solve this problem, starting as a solo venture with a vision to
                grow into a team of talented professionals as the platform scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="about-audience">
        <div className="section-container">
          <h2>Who Is Voyago For?</h2>
          <p className="audience-subtitle">
            The short answer: anyone who wants to travel. The real answer:
            anyone who wants to travel but doesn't have the time or energy to plan.
          </p>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">&#128106;</div>
              <h3>Busy Parents</h3>
              <p>
                Balancing full-time jobs and kids with vacation planning is
                exhausting. Voyago takes the planning off your plate so you can
                focus on making memories.
              </p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">&#127891;</div>
              <h3>Students & Young Travelers</h3>
              <p>
                Want to explore new cities but don't know where to start?
                Voyago gives you a complete plan so you can just pack and go.
              </p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">&#128188;</div>
              <h3>Working Professionals</h3>
              <p>
                Limited PTO means every trip counts. Voyago makes sure you
                maximize your time at each destination without the research grind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-vision">
        <div className="section-container">
          <h2>Our Vision</h2>
          <div className="vision-timeline">
            <div className="vision-item">
              <div className="vision-marker current"></div>
              <div className="vision-text">
                <h3>Today</h3>
                <p>AI-powered itinerary planning for major U.S. cities with flights, lodging, and activities.</p>
              </div>
            </div>
            <div className="vision-item">
              <div className="vision-marker"></div>
              <div className="vision-text">
                <h3>Next</h3>
                <p>Expanding to smaller cities and towns. Building a travel blog community with free tips and itineraries.</p>
              </div>
            </div>
            <div className="vision-item">
              <div className="vision-marker"></div>
              <div className="vision-text">
                <h3>Future</h3>
                <p>Social media presence, a growing team, and the go-to platform for stress-free travel planning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="section-container">
          <h2>Ready to Let Voyago Plan Your Next Trip?</h2>
          <Link to="/plan" className="btn btn-primary btn-large">Get Started</Link>
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

export default About;
