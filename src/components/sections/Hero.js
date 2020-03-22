import React from 'react';
import {Box, Text, Heading} from 'rebass/styled-components';
import styled from 'styled-components';

import Section from '@common/Section';
import Banner from '@common/parallax/Banner';

const CenteredBox = styled(Box)`
  position: absolute;
  left: 15%;
  top: 35%;
`;

const Hero = () => (
  <Section>
    <Banner>
      <CenteredBox>
        <Heading color="white" fontFamily="heading" fontSize={[7, 8]}>
          Xylofun
        </Heading>
        <Text color="white" fontSize={[5, 6]}>
          Music for everyone.
        </Text>
      </CenteredBox>
    </Banner>
  </Section>
);

export default Hero;
