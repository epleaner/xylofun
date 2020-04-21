import React from "react"
import { Flex, Box, Text, Button } from "rebass/styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ContentfulRichText from "@common/ContentfulRichText"

import StyledGatsbyLink from "@common/StyledGatsbyLink"
import Section from "@common/Section"

export default () => {
  const { text } = useStaticQuery(graphql`
    {
      text: contentfulBlurb(name: { eq: "About Section" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
    }
  `)
  return (
    <Section alignItems="center" bg="red.base" px={[3, 5]}>
      <Flex width={[1, 2 / 3]} justifyContent="center">
        <Box>
          <Text color="background" fontSize={[1]}>
            <ContentfulRichText
              document={text.childContentfulBlurbBodyRichTextNode.json}
            />
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" width={[1, 1 / 3]}>
        <Box>
          <StyledGatsbyLink to="/about">
            <Button sx={{ cursor: "pointer" }} variant="outline" p={3}>
              <Text variant="nav">About the project</Text>
            </Button>
          </StyledGatsbyLink>
        </Box>
      </Flex>
    </Section>
  )
}
