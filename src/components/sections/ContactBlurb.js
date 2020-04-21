import React from "react"
import { Flex, Box, Text, Button } from "rebass/styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ContentfulRichText from "@common/ContentfulRichText"

import StyledGatsbyLink from "@common/StyledGatsbyLink"
import Section from "@common/Section"

export default () => {
  const { text } = useStaticQuery(graphql`
    {
      text: contentfulBlurb(name: { eq: "Contact Section" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
    }
  `)
  return (
    <Section
      flexDirection="column"
      justifyContent="center"
      bg="orange.base"
      px={[3, 5]}
    >
      <Flex width={1} justifyContent="center">
        <Box>
          <Text textAlign="center" variant="heading" color="background">
            <ContentfulRichText
              document={text.childContentfulBlurbBodyRichTextNode.json}
            />
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" width={1}>
        <Box>
          <StyledGatsbyLink to="/contact">
            <Button sx={{ cursor: "pointer" }} variant="outline" p={3}>
              <Text variant="nav">Contact Us</Text>
            </Button>
          </StyledGatsbyLink>
        </Box>
      </Flex>
    </Section>
  )
}
