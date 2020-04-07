import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "rebass/styled-components"
import LightboxGallery from "@common/LightboxGallery"

import Section from "@common/Section"

export default () => {
  const { mediaCollection } = useStaticQuery(graphql`
    {
      mediaCollection: contentfulMediaCollection(name: { eq: "Gallery" }) {
        media {
          file {
            fileName
          }
          fixed {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  `)

  const photos = mediaCollection.media.map(({ fixed, file: { fileName } }) => {
    return {
      ...fixed,
      title: fileName
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")
        .replace(/\..+/g, ""),
    }
  })

  return (
    <Section>
      <Box mt={9}>
        <LightboxGallery photos={photos} />
      </Box>
    </Section>
  )
}
