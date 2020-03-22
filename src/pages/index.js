import React from 'react';

import Page from '@common/Page';
import Hero from '@sections/Hero';
import Mission from '@sections/Mission';
import About from '@sections/About';
import Gallery from '@sections/Gallery';

const IndexPage = () => (
  <Page title="Home">
    <Hero />
    <Mission />
    <About />
    <Gallery />
  </Page>
);

export default IndexPage;
