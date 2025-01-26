import axios from "axios";
import React, { useState } from "react";


export default function Expert() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/expertRequests", formData)
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("Error saving request:", err);
      });
  };

  return (
    <div className="expert-container">
      <h1>🔬 Connect with an Expert</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="expert-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="requirements"
            placeholder="Describe your requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={5}
            required
          />
          <button type="submit">Request Advice</button>
        </form>
      ) : (
        <h2 className="thank-you-message">
          ✅ Thank you! Our expert will contact you soon.
        </h2>
      )}
    </div>
  );
}
