import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Flex, Box, Text } from "rebass/styled-components"

import Section from "@common/Section"
import CircleWithBody from "@common/shapes/CircleWithBody"
import ContentfulRichText from "@common/ContentfulRichText"
import FadeIn from "@common/FadeIn"

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

  return (
    <Section minHeight="75vh" bg="papayawhip">
      <Flex justifyContent="center" flexWrap="wrap">
        <Flex alignItems="center" flexWrap="wrap" height="100%">
          <Box width={1} mx={[0, 4]}>
            <Flex flexWrap="wrap">
              <Box width={[1, 1, 1 / 3]}>
                <Box m={3} my={6}>
                  <FadeIn>
                    <CircleWithBody color="red">
                      <Text
                        mx={6}
                        lineHeight="body"
                        color="white"
                        textAlign="center"
                      >
                        <ContentfulRichText
                          document={
                            redCircleText.childContentfulBlurbBodyRichTextNode
                              .json
                          }
                        />
                      </Text>
                    </CircleWithBody>
                  </FadeIn>
                </Box>
              </Box>
              <Box width={[1, 1, 1 / 3]}>
                <Box m={3} my={6}>
                  <FadeIn>
                    <CircleWithBody color="green">
                      <Text
                        mx={6}
                        lineHeight="body"
                        color="white"
                        textAlign="center"
                      >
                        <ContentfulRichText
                          document={
                            greenCircleText.childContentfulBlurbBodyRichTextNode
                              .json
                          }
                        />
                      </Text>
                    </CircleWithBody>
                  </FadeIn>
                </Box>
              </Box>
              <Box width={[1, 1, 1 / 3]}>
                <Box m={3} my={6}>
                  <FadeIn>
                    <CircleWithBody color="blue">
                      <Text
                        mx={6}
                        lineHeight="body"
                        color="white"
                        textAlign="center"
                      >
                        <ContentfulRichText
                          document={
                            blueCircleText.childContentfulBlurbBodyRichTextNode
                              .json
                          }
                        />
                      </Text>
                    </CircleWithBody>
                  </FadeIn>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Section>
  )
}

export default Mission
