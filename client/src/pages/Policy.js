import React from 'react';
import Layout from '../components/Layout/Layout';


const Policy = () => {
  return (
    <Layout title={"Policy - Ecommerce app"}>
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal information. By using our website, you agree to the collection and use of information in accordance with this policy.
        </p>
        <p>
          <strong>Information Collection</strong><br />
          We collect information to provide better services to our users. This information may include your name, email address, and other personal details you provide.
        </p>
        <p>
          <strong>Use of Information</strong><br />
          The information we collect is used to improve our services, respond to your requests, and provide you with relevant updates.
        </p>
        <p>
          <strong>Data Security</strong><br />
          We take appropriate measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>
          <strong>Changes to Privacy Policy</strong><br />
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Help@gmail.com">Help@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}

export default Policy;
