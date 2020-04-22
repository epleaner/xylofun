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
      text: contentfulBlurb(name: { eq: "How to Order Section" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
    }
  `)
  return (
    <Section alignItems="center" bg="blue.base" px={[3, 5]}>
      <Flex width={[1, 2 / 3]}>
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
      <Flex justifyContent="center" width={[1, 1 / 3]}>
        <FadeIn right>
          <Box>
            <StyledGatsbyLink to="/how-to-order">
              <Button sx={{ cursor: "pointer" }} variant="outline" p={3}>
                <Text variant="nav">How to order</Text>
              </Button>
            </StyledGatsbyLink>
          </Box>
        </FadeIn>
      </Flex>
    </Section>
  )
}
