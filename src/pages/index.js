import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"

import Layout from "../components/layout"
import Link from "../components/link"
import Image from "../components/image"
import SEO from "../components/seo"
import ContentfulRichText from "../components/contentfulRichText"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Home" } }) {
        edges {
          node {
            title
            richText {
              json
            }
          }
        }
      }
    }
  `)

  const pageContent = data.allContentfulPage.edges[0].node

  return (
    <Layout>
      <SEO title="Home" />
      <Heading>{pageContent.title}</Heading>
      <ContentfulRichText document={pageContent.richText.json} />
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
      <Box width={{ max: "300px" }} pad="small">
        <Image />
      </Box>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
