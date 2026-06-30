import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import logo from '../../assets/voyago.png';

const samplePosts = [
  {
    id: 1,
    title: "Top 10 Must-See Spots in New York City",
    excerpt: "From the iconic Statue of Liberty to the hidden gems of Brooklyn, here's your ultimate NYC checklist.",
    category: "City Guide",
    date: "Coming Soon",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "How to Plan a Weekend Getaway in Under 30 Minutes",
    excerpt: "Short on time? Here's our step-by-step guide to planning the perfect weekend trip without the stress.",
    category: "Travel Tips",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Budget Travel: 5 American Cities That Won't Break the Bank",
    excerpt: "You don't need to spend a fortune to have an incredible trip. These cities offer amazing experiences on a budget.",
    category: "Budget Travel",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Family-Friendly Itineraries: Traveling With Kids Made Easy",
    excerpt: "Planning a family vacation doesn't have to be stressful. Here are our top tips for kid-friendly travel.",
    category: "Family Travel",
    date: "Coming Soon",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "The Best Free Attractions in America's Top Cities",
    excerpt: "Who says you need to pay to have fun? Discover the best free things to do in cities across the U.S.",
    category: "City Guide",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Solo Travel 101: A Beginner's Guide to Exploring Alone",
    excerpt: "Traveling alone for the first time? Here's everything you need to know to make it an unforgettable experience.",
    category: "Travel Tips",
    date: "Coming Soon",
    readTime: "9 min read",
  },
];

function Blog() {
  return (
    <div className="blog">
      {/* Hero */}
      <section className="blog-hero">
        <h1>Voyago Travel Blog</h1>
        <p>Free travel tips, itineraries, and guides to fuel your wanderlust.</p>
      </section>

      {/* Email Signup */}
      <section className="blog-subscribe">
        <div className="section-container">
          <div className="subscribe-card">
            <h2>Get Travel Tips in Your Inbox</h2>
            <p>Subscribe for free itineraries, city guides, and travel hacks — delivered weekly.</p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="blog-posts">
        <div className="section-container">
          <h2>Latest Articles</h2>
          <div className="posts-grid">
            {samplePosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-image-placeholder">
                  <span className="post-category">{post.category}</span>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <div className="section-container">
          <h2>Don't Just Read About Travel — Plan Your Trip</h2>
          <p>Let Voyago build your perfect itinerary in minutes.</p>
          <Link to="/plan" className="btn btn-primary btn-large">Plan Your Trip</Link>
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

export default Blog;
