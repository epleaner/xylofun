import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Box, Text, Heading} from 'rebass/styled-components';
import styled from 'styled-components';

import Section from '@common/Section';
import Banner from '@common/parallax/Banner';

import BannerImage from '@images/banners/hero.jpg';

const HeadingBox = styled(Box)`
  position: absolute;
  left: 5%;
  top: 10%;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      bannerImage: contentfulAsset(title: { eq: "Banner image" }) {
        fixed(width: 1280, quality: 100) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  `);

  const {bannerImage} = data;
  const bannerImageSrc = bannerImage.fixed.src;

  return (
    <Section mt={6}>
      <Banner image={BannerImage}>
        <HeadingBox>
          <Heading color="white" fontSize={8}>
            Xylofun
          </Heading>
          <Text color="white" fontSize={6}>
            Music for everyone.
          </Text>
        </HeadingBox>
      </Banner>
    </Section>
  );
};

export default Hero;
