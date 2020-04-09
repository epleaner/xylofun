import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"

const IFrameWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  width: 100%;
  height: 0;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

import Section from "@common/Section"

const IntroVideo = () => (
  <Section minHeight={0} bg="white">
    <Box width={1}>
      <Flex justifyContent="center">
        <IFrameWrapper>
          <iframe
            src="https://player.vimeo.com/video/405772499"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </IFrameWrapper>
      </Flex>
    </Box>
  </Section>
)

export default IntroVideo
