import React from 'react';

import Page from '@common/Page';
import Hero from '@sections/Hero';
import Mission from '@sections/Mission';
import IntroVideo from '@sections/IntroVideo';

const IndexPage = () => (
  <Page title="Home">
    <Hero />
    <Mission />
    <IntroVideo />
  </Page>
);

export default IndexPage;
