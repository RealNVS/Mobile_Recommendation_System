import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1 className="hero-title">Find Your Perfect Smartphone</h1>
        <p className="hero-subtitle">Discover the best options tailored to your needs — budget, performance, camera, or brand.</p>

        
        <Link to="/categories" className="hero-button">Start Now</Link>

      </section>

      
    </div>
  );
}
