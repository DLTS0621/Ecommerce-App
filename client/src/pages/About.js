import React from 'react';
import Layout from '../components/Layout/Layout';




const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a dedicated team committed to providing you with the best products and services. Our mission is to deliver exceptional quality and unparalleled customer service. 
        </p>
        <p>
          With years of experience in the industry, we take pride in our ability to meet your needs and exceed your expectations. Whether you're looking for cutting-edge technology or unique products, we have something for everyone.
        </p>
        <p>
          Our team is passionate about what we do, and we are constantly striving to innovate and improve. Thank you for visiting our site, and we look forward to serving you!
        </p>
      </div>
    </Layout>
  );
}

export default About;
