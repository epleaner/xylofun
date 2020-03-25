import React from 'react';
import {Flex, Box} from 'rebass/styled-components';
import styled from 'styled-components';

import Section from '@common/Section';
import AudioPlayer from '@common/AudioPlayer';
import Shapes from '@common/shapes/Shapes';

import SampleAudio from '@static/audio/sample.mp3';

const StyledAudioPlayer = styled(AudioPlayer)`
  margin: 0 auto;
`;

const Mission = () => (
  <Section bg="white">
    <Flex pt={6} flexDirection="row" justifyContent="center">
      <Box>
        <StyledAudioPlayer mx="auto" src={SampleAudio} />
      </Box>
    </Flex>
    <Flex flexDirection="row" justifyContent="center">
      <Shapes />
    </Flex>
  </Section>
);

export default Mission;
