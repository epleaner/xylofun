import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Flex, Box, Text } from "rebass/styled-components"

import Section from "@common/Section"
import AudioPlayer from "@common/AudioPlayer"
import Circle from "@common/shapes/Circle"
import ContentfulRichText from "@common/ContentfulRichText"

import Audio from "@static/audio/igwijo_tutti.mp3"

const CircleContainer = ({ children }) => (
  <Box my={[10, 3]} width={[1, 1, 1 / 3]}>
    <Flex justifyContent="center" flexWrap="wrap">
      {children}
    </Flex>
  </Box>
)

const Mission = () => {
  const {
    redCircleText,
    greenCircleText,
    blueCircleText,
  } = useStaticQuery(graphql`
    {
      redCircleText: contentfulBlurb(name: { eq: "Mission: Red Circle" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
      greenCircleText: contentfulBlurb(name: { eq: "Mission: Green Circle" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
      blueCircleText: contentfulBlurb(name: { eq: "Mission: Blue Circle" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
    }
  `)

  console.log(redCircleText, greenCircleText, blueCircleText)

  return (
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
                    <ContentfulRichText
                      document={
                        redCircleText.childContentfulBlurbBodyRichTextNode.json
                      }
                    />
                  </Text>
                </Box>
              </CircleContainer>
              <CircleContainer>
                <Box mb={4}>
                  <Circle color="green" />
                </Box>
                <Box mt={8} mx={2}>
                  <Text lineHeight="body" textAlign="center">
                    <ContentfulRichText
                      document={
                        greenCircleText.childContentfulBlurbBodyRichTextNode
                          .json
                      }
                    />
                  </Text>
                </Box>
              </CircleContainer>
              <CircleContainer>
                <Box mb={4}>
                  <Circle color="blue" />
                </Box>
                <Box mt={8} mx={2}>
                  <Text lineHeight="body" textAlign="center">
                    <ContentfulRichText
                      document={
                        blueCircleText.childContentfulBlurbBodyRichTextNode.json
                      }
                    />
                  </Text>
                </Box>
              </CircleContainer>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Section>
  )
}

export default Mission
