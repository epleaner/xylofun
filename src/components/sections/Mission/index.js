import React from 'react';
import {Flex, Box, Text, Button} from 'rebass/styled-components';
import styled from 'styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';
import Section from '@common/Section';
import AudioPlayer from '@common/AudioPlayer';

import Circle from '@sections/Mission/Circle';

import SampleAudio from '@static/audio/sample.mp3';
import MissionVideo from '@static/video/xylofun-demo.mp4';

const StyledAudioPlayer = styled(AudioPlayer)`
  & svg {
    width: 300px;
  }
`;

const Mission = () => (
  <Section bg="white" px={[3, 5]}>
    <Box mb={[6, 3]} mt={[6, 6]} width={[1, 1, 1 / 3]}>
      <Circle
        color="red"
        text="The XyloFun programme aims to extend the benefits of music education
    to the schools in South Africa that need it the most."
      />
    </Box>
    <Box mb={[6, 3]} mt={[0, 6]} width={[1, 1, 1 / 3]}>
      <Circle
        color="green"
        text="The XyloFun system enables students to start playing exciting,
      creative music from the very first lesson."
      />
    </Box>
    <Box mb={[0, 3]} mt={[0, 6]} width={[1, 1, 1 / 3]}>
      <Circle
        color="blue"
        text="XyloFun training courses give teachers instruments, skills and
      confidence to teach the music curriculum effectively, regardless of
      previous experience."
      />
    </Box>
    <Box width={1} mt={[5]} mb={5}>
      <Flex justifyContent="center">
        <StyledAudioPlayer mx="auto" src={SampleAudio} />
      </Flex>
    </Box>
    <Box width={1}>
      <Flex justifyContent="center">
        <Button variant="outline" py={3} px={4} mb={[5, 5, 0]}>
          <StyledGatsbyLink to="/about">
            <Text variant="nav">Learn more</Text>
          </StyledGatsbyLink>
        </Button>
      </Flex>
    </Box>
  </Section>
);

export default Mission;
