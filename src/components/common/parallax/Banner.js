import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import BannerImage from '@images/hero/banner.jpg';

const Banner = ({imgSrc, children}) => (
  <ParallaxBanner
    style={{height: '100%'}}
    layers={[
      {
        image: imgSrc || BannerImage,
        amount: 0.5,
      },
    ]}
    tagOuter="figure"
  >
    {children}
  </ParallaxBanner>
);

export default Banner;
