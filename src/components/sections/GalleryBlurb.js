import React from "react"
import { Flex, Box, Text, Button } from "rebass/styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ContentfulRichText from "@common/ContentfulRichText"

import StyledGatsbyLink from "@common/StyledGatsbyLink"
import Section from "@common/Section"
import FadeIn from "@common/FadeIn"

export default () => {
  const { text } = useStaticQuery(graphql`
    {
      text: contentfulBlurb(name: { eq: "Gallery Section" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
    }
  `)
  return (
    <Section alignItems="center" bg="green.base" px={[3, 5]}>
      <Flex width={[1, 2 / 3]} order={[0, 1]}>
        <FadeIn>
          <Box>
            <Text variant="heading" color="white">
              <ContentfulRichText
                document={text.childContentfulBlurbBodyRichTextNode.json}
              />
            </Text>
          </Box>
        </FadeIn>
      </Flex>
      <Flex justifyContent="center" width={[1, 1 / 3]} order={[1, 0]}>
        <FadeIn left>
          <Box>
            <StyledGatsbyLink to="/gallery">
              <Button sx={{ cursor: "pointer" }} variant="outline" p={3}>
                <Text variant="nav">See it in action</Text>
              </Button>
            </StyledGatsbyLink>
          </Box>
        </FadeIn>
      </Flex>
    </Section>
  )
}
