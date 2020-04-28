import React from 'react';
import Layout from '../components/layout';
import MyImageGallery from '../components/imageGallery';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ marginBottom: `1.45rem` }}>
      <MyImageGallery />
    </div>
  </Layout>
);

export default IndexPage;
