import React from 'react';

import Page from '@common/Page';
import Hero from '@sections/Hero';
import Mission from '@sections/Mission';
import AboutBlurb from '@sections/AboutBlurb';
import GalleryBlurb from '@sections/GalleryBlurb';
import HowToOrderBlurb from '@sections/HowToOrderBlurb';
import ContactBlurb from '@sections/ContactBlurb';
import IntroVideo from '@sections/IntroVideo';

const IndexPage = () => (
  <Page title="Home">
    <Hero />
    <Mission />
    <IntroVideo />
    <AboutBlurb />
    <GalleryBlurb />
    <HowToOrderBlurb />
    <ContactBlurb />
  </Page>
);

export default IndexPage;
