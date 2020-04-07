import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "rebass/styled-components"
import Section from "@common/Section"
import ContentfulRichText from "@common/ContentfulRichText"
import BannerImage from "@images/banners/how-to-order.jpg"

export default () => {
  const { pageContent } = useStaticQuery(graphql`
    {
      pageContent: contentfulPage(title: { eq: "How to Order" }) {
        title
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
        image: BannerImage,
        height: "400px",
      }}
    >
      <Box mx={[3, 6]} my={4}>
        <ContentfulRichText document={pageContent.richText.json} />
      </Box>
    </Section>
  )
}
