import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Box, Text, Heading} from 'rebass/styled-components';
import styled from 'styled-components';

import Section from '@common/Section';
import Banner from '@common/parallax/Banner';

const HeadingBox = styled(Box)`
  position: absolute;
  left: 15%;
  top: 35%;
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
    <Section>
      <Banner>
        <HeadingBox>
          <Heading color="white" fontFamily="heading" fontSize={[7, 8]}>
            Xylofun
          </Heading>
          <Text color="white" fontSize={[5, 6]}>
            Music for everyone.
          </Text>
        </HeadingBox>
      </Banner>
    </Section>
  );
};

export default Hero;
