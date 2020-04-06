import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "rebass/styled-components"
import LightboxGallery from "@common/LightboxGallery"

import Section from "@common/Section"

export default () => {
  const data = useStaticQuery(graphql`
    {
      contentfulMedia: allContentfulAsset {
        edges {
          node {
            file {
              fileName
            }
            fixed {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  `)

  const { contentfulMedia } = data

  const photos = contentfulMedia.edges.map(
    ({
      node: {
        fixed,
        file: { fileName },
      },
    }) => {
      return {
        ...fixed,
        title: fileName
          .toLowerCase()
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")
          .replace(/\..+/g, ""),
      }
    }
  )

  return (
    <Section>
      <Box mt={9}>
        <LightboxGallery photos={photos} />
      </Box>
    </Section>
  )
}
