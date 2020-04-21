import React from "react"
import { Flex, Box, Text, Button } from "rebass/styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ContentfulRichText from "@common/ContentfulRichText"

import StyledGatsbyLink from "@common/StyledGatsbyLink"
import Section from "@common/Section"

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
        <Box>
          <Text variant="heading" color="background">
            <ContentfulRichText
              document={text.childContentfulBlurbBodyRichTextNode.json}
            />
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" width={[1, 1 / 3]} order={[1, 0]}>
        <Box>
          <StyledGatsbyLink to="/gallery">
            <Button sx={{ cursor: "pointer" }} variant="outline" p={3}>
              <Text variant="nav">See it in action</Text>
            </Button>
          </StyledGatsbyLink>
        </Box>
      </Flex>
    </Section>
  )
}
