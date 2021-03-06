import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Flex, Box } from "rebass/styled-components"
import styled from "styled-components"
import Section from "@common/Section"
import Circle from "@common/shapes/Circle"
import ContentfulRichText from "@common/ContentfulRichText"
import Banner from "@common/parallax/Banner"
import AboutBannerImage from "@images/banners/woman-man-playing.jpg"

const About = () => {
  const { pageContent } = useStaticQuery(graphql`
    {
      pageContent: contentfulPage(title: { eq: "About XyloFun" }) {
        title
        banner {
          fixed(quality: 100, width: 2000) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        richText {
          json
        }
      }
    }
  `)

  return (
    <Section
      bannerProps={{
        title: pageContent.title,
        image: pageContent.banner.fixed.srcWebp,
      }}
    >
      <Box mx={[3, 15]} my={[5]}>
        <ContentfulRichText document={pageContent.richText.json} />
      </Box>
    </Section>
  )
}

export default About
