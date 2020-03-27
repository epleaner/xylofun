import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';
import BannerImage from '@images/hero/banner.jpg';

const Banner = ({height, imgSrc, children}) => (
  <ParallaxBanner
    style={{height: height || '100vh'}}
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
