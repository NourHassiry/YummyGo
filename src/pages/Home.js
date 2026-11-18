import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className="home-text">
        <span className="home-eyebrow">🔥 Fresh & Fast</span>

        <h1>Welcome to YummyGo 🍔</h1>

        <p className="home-lead">
          Order your favorite meals from the comfort of your home —
          fast, fresh, and full of flavor.
        </p>

        <ul className="home-points">
          <li>🍔 Fast food, desserts, juices, and milkshakes</li>
          <li>⏱️ Delivered in <strong>30–45 minutes</strong></li>
          <li>❤️ Enjoy our services, made with love</li>
        </ul>

        <Link to="/menu" className="home-btn">Order Now →</Link>

        <div className="home-chips">
          <span className="home-chip">🍔 Fast Food</span>
          <span className="home-chip">🥤 Drinks</span>
          <span className="home-chip">🍰 Sweets</span>
        </div>
      </div>

      <div className="home-video-wrap">
        <video className='home-video' autoPlay muted loop playsInline>
          <source src="intro.mp4" type="video/mp4" />
        </video>
        <span className="video-label">🎬 Watch our story</span>
      </div>
    </div>
  );
}

export default Home;