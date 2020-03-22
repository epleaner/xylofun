import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import BannerImage from '@images/hero/banner.jpg';

const Banner = ({children}) => (
  <ParallaxBanner
    style={{height: '100%'}}
    layers={[
      {
        image: BannerImage,
        amount: 0.5,
      },
    ]}
    tagOuter="figure"
  >
    {children}
  </ParallaxBanner>
);

export default Banner;
