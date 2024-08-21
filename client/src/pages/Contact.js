import React from 'react';
import Layout from '../components/Layout/Layout';


const Contact = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <div className="contact-item">
            <h2>Email</h2>
            <p>Help@gmail.com</p>
          </div>
          <div className="contact-item">
            <h2>Phone Number</h2>
            <p>0715567312</p>
          </div>
          <div className="contact-item">
            <h2>Location</h2>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
