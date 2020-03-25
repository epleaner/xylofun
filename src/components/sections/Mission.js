import React from 'react';
import {Flex, Box, Text, Button} from 'rebass/styled-components';
import styled from 'styled-components';
import {Link} from 'gatsby';

import Section from '@common/Section';
import AudioPlayer from '@common/AudioPlayer';
import Circle from '@common/shapes/Circle';

import SampleAudio from '@static/audio/sample.mp3';

const StyledAudioPlayer = styled(AudioPlayer)`
  margin: 0 auto;
`;

const StyledGatsbyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Mission = () => (
  <Section bg="white" px={[3, 5]}>
    <Flex flexDirection="row" justifyContent="center" flexWrap="wrap">
      <Box width={1} my={6}>
        <Flex flexDirection="row" justifyContent="center">
          <StyledAudioPlayer mx="auto" src={SampleAudio} />
        </Flex>
      </Box>
      <Box mb={[6, 3]} width={[1, 1, 1 / 3]}>
        <Flex flexDirection="row" justifyContent="center" flexWrap="wrap">
          <Box mb={4}>
            <Circle color="red" />
          </Box>
          <Box mt={[5]} mx={2}>
            <Text textAlign="center">
              The XyloFun programme aims to extend the benefits of music
              education to the schools in South Africa that need it the most.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mb={[6, 3]} width={[1, 1, 1 / 3]}>
        <Flex flexDirection="row" justifyContent="center" flexWrap="wrap">
          <Box mb={4}>
            <Circle color="green" />
          </Box>
          <Box mt={[5]} mx={2}>
            <Text textAlign="center">
              The XyloFun system enables students to start playing exciting,
              creative music from the very first lesson.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mb={[0, 3]} width={[1, 1, 1 / 3]}>
        <Flex flexDirection="row" justifyContent="center" flexWrap="wrap">
          <Box mb={4}>
            <Circle color="blue" />
          </Box>
          <Box mt={[5]} mx={2}>
            <Text textAlign="center">
              XyloFun training courses give teachers instruments, skills and
              confidence to teach the music curriculum effectively, regardless
              of previous experience.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width={1} my={5}>
        <Flex justifyContent="center">
          <Button variant="outline" p={3}>
            <StyledGatsbyLink to="/about">
              <Text variant="nav">Learn more</Text>
            </StyledGatsbyLink>
          </Button>
        </Flex>
      </Box>
    </Flex>
  </Section>
);

export default Mission;
