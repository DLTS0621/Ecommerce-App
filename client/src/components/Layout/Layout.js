import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({
  children,
  title = 'Ecommerce app',
  description = 'mern stack project',
  keywords = 'ecommerce, mern, stack',
  author = 'tharushi',
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Toaster /> {/* This will render the toasts */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
