import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h1>Our Smart Solutions</h1>

      <div className="service-card">
        <h2>🔬 Expert Solution</h2>
        <p>
          Not sure which mobile suits your specific needs? Connect directly with our expert advisors to receive personalized suggestions based on your requirements — like budget, camera usage, gaming, or business needs. 
        </p>
        <button onClick={() => navigate("/expert")}>Connect with Expert</button>
      </div>

      <div className="service-card">
        <h2>⚙️ Advanced Filter</h2>
        <p>
          Use our advanced filtering system to select mobiles that match your exact needs — such as budget, brand, RAM, camera, battery life, and more. Instantly see results tailored to your preferences. Perfect for users who want to explore and decide on their own in real-time.
        </p>
        <button onClick={() => navigate("/filter")}>Try Filter Feature</button>
      </div>

      <div className="service-card">
        <h2>📂 Explore by Categories</h2>
        <p>
          Explore our pre-defined categories from the home page: Budget-friendly, Performance-focused, Camera-centric, and Brand-based models. Quickly navigate to the type of phones that interest you the most.
        </p>
        <button onClick={() => navigate("/categories")}>Explore Categories</button>
      </div>
    </div>
  );
}
