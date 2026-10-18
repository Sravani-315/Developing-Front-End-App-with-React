import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="about-us-description">
          Welcome to Paradise Nursery, where green meets serenity! We are passionate about bringing nature closer to you. Our mission is to provide the finest selection of houseplants that not only beautify your space but also promote a healthier and more peaceful environment. With over a decade of experience, we've curated a collection of plants that are perfect for both beginners and seasoned plant enthusiasts. Each plant is carefully nurtured to ensure it arrives at your doorstep healthy and thriving. Whether you're looking to create a lush indoor garden or add a touch of greenery to your office, Paradise Nursery is your trusted partner in cultivating a greener lifestyle.
        </p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
