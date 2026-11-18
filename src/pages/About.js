import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About YummyGo 🍕</h1>
        <p className="about-subtitle">
          Delivering your favorite meals — fast, fresh, and full of flavor.
        </p>
        <Link to="/menu" className="about-cta">Explore Our Menu →</Link>
      </section>

      <section className="about-card">
        <p>
          <strong>YummyGo</strong> is a food delivery website that brings your
          favorite meals straight to your door.
        </p>
        <p>
          We offer <strong>Fast Food</strong>, <strong>Drinks</strong>, and{' '}
          <strong>Sweets</strong> from the best restaurants around.
        </p>
        <p>
          Our goal is simple: make food ordering <em>easy, fast, and enjoyable</em>{' '}
          for everyone!
        </p>
      </section>

      <section className="about-features">
        <div className="about-feature">
          <div className="feature-icon">🍔</div>
          <h3>Fast Food</h3>
          <p>Best burgers, sandwiches and pizzas in town.</p>
        </div>
        <div className="about-feature">
          <div className="feature-icon">🥤</div>
          <h3>Drinks</h3>
          <p>Fresh juices and milkshakes delivered cold.</p>
        </div>
        <div className="about-feature">
          <div className="feature-icon">🍰</div>
          <h3>Sweets</h3>
          <p>Delicious desserts and ice cream for every mood.</p>
        </div>
      </section>

      <section className="about-why">
        <h2 className="about-why-title">Why YummyGo?</h2>
        <ul>
          <li>🚀 Lightning-fast delivery to your door</li>
          <li>🍽️ Curated restaurants for top quality</li>
          <li>💳 Easy ordering, simple checkout</li>
        </ul>
      </section>
    </div>
  );
}

export default About;