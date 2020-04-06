import React from "react"
import { Flex, Box, Text, Button } from "rebass/styled-components"
import styled from "styled-components"
import StyledGatsbyLink from "@common/StyledGatsbyLink"

import Section from "@common/Section"
import AudioPlayer from "@common/AudioPlayer"
import Circle from "@common/shapes/Circle"

import Audio from "@static/audio/igwijo_tutti.mp3"

const CircleContainer = ({ children }) => (
  <Box my={[10, 3]} width={[1, 1, 1 / 3]}>
    <Flex justifyContent="center" flexWrap="wrap">
      {children}
    </Flex>
  </Box>
)

const Mission = () => (
  <Section bg="white">
    <Flex justifyContent="center" flexWrap="wrap">
      <Box width={1}>
        <AudioPlayer src={Audio} />
      </Box>
      <Flex alignItems="center" flexWrap="wrap" height="100%">
        <Box width={1} mx={[0, 4]}>
          <Flex flexWrap="wrap">
            <CircleContainer>
              <Box mb={4}>
                <Circle color="red" />
              </Box>
              <Box mt={8} mx={2}>
                <Text lineHeight="body" textAlign="center">
                  The XyloFun programme aims to extend the benefits of music
                  education to the schools in South Africa that need it the
                  most.
                </Text>
              </Box>
            </CircleContainer>
            <CircleContainer>
              <Box mb={4}>
                <Circle color="green" />
              </Box>
              <Box mt={8} mx={2}>
                <Text lineHeight="body" textAlign="center">
                  The XyloFun system enables students to start playing exciting,
                  creative music from the very first lesson.
                </Text>
              </Box>
            </CircleContainer>
            <CircleContainer>
              <Box mb={4}>
                <Circle color="blue" />
              </Box>
              <Box mt={8} mx={2}>
                <Text lineHeight="body" textAlign="center">
                  XyloFun training courses give teachers instruments, skills and
                  confidence to teach the music curriculum effectively,
                  regardless of previous experience.
                </Text>
              </Box>
            </CircleContainer>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </Section>
)

export default Mission
