import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Box } from "rebass/styled-components"
import Section from "@common/Section"
import ContactForm from "@common/ContactForm"

export default () => {
  const { pageContent } = useStaticQuery(graphql`
    {
      pageContent: contentfulPage(title: { eq: "Contact Us" }) {
        title
        banner {
          fixed(quality: 100, width: 2000) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section
      bannerProps={{
        title: pageContent.title,
        image: pageContent.banner.fixed.srcWebp,
        height: "400px",
      }}
    >
      <Flex justifyContent="center" mx={[3, 6]} width={1}>
        <Box my={[4, 5]} width={[1, 1 / 2]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  )
}
