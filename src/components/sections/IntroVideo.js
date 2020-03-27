import React from 'react';
import {Flex, Box, Text, Button} from 'rebass/styled-components';
import styled from 'styled-components';

import Section from '@common/Section';
import Demo from '@static/video/xylofun-demo-short.mp4';
const StyledVideo = styled.video`
  width: 100%;
`;

const IntroVideo = () => (
  <Section minHeight={0} bg="white">
    <Box width={1}>
      <Flex justifyContent="center">
        <StyledVideo
          controls
          type="video/mp4"
          src={Demo}
          frameBorder="0"
          allowFullScreen
        >
          Sorry, your browser doesn't support embedded videos.
        </StyledVideo>
      </Flex>
    </Box>
  </Section>
);

export default IntroVideo;
