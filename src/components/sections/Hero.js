import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Heading } from "rebass/styled-components"

import Section from "@common/Section"
import Banner from "@common/parallax/Banner"
import BrandText from "@common/BrandText"

const Hero = () => {
  const { pageContent } = useStaticQuery(graphql`
    {
      pageContent: contentfulPage(title: { eq: "Home" }) {
        banner {
          fixed(quality: 100, width: 2000) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section mt={6} minHeight={["300px", "100vh"]}>
      <Banner
        height={true}
        title={<BrandText fontSize={[7, "8rem"]} />}
        image={pageContent.banner.fixed.srcWebp}
      ></Banner>
    </Section>
  )
}

export default Hero
