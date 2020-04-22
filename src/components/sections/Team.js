import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Heading, Flex, Box, Text } from "rebass/styled-components"

import Section from "@common/Section"
import ContentfulRichText from "@common/ContentfulRichText"
import LightboxGallery from "@common/LightboxGallery"

export default () => {
  const {
    pedroMedia,
    teamMemberPortraits,
    pedroBio,
    lisaBio,
    nelsonBio,
  } = useStaticQuery(graphql`
    {
      pedroMedia: contentfulMediaCollection(name: { eq: "Pedro Bio Gallery" }) {
        media {
          file {
            fileName
          }
          fixed {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      teamMemberPortraits: contentfulMediaCollection(
        name: { eq: "Team Member Portraits" }
      ) {
        media {
          title
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      pedroBio: contentfulBlurb(name: { eq: "Pedro Bio" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
      lisaBio: contentfulBlurb(name: { eq: "Lisa Bio" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
      nelsonBio: contentfulBlurb(name: { eq: "Nelson Bio" }) {
        childContentfulBlurbBodyRichTextNode {
          json
        }
      }
    }
  `)

  let teamPhotosByName = {}
  teamMemberPortraits.media.forEach(
    ({ title, fluid }) => (teamPhotosByName[title.toLowerCase()] = fluid)
  )

  const pedroGalleryPhotos = pedroMedia.media.map(
    ({ fixed, file: { fileName } }) => {
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
      <Box mb={5}>
        <Flex my={8} width={1} alignItems="center" flexWrap="wrap">
          <Box mb={[3, 0]} width={[1, 1 / 2]}>
            <Img fluid={teamPhotosByName.pedro} />
            <LightboxGallery margin={0} photos={pedroGalleryPhotos} />
          </Box>
          <Box px={[3, 4, 5]} width={[1, 1 / 2]}>
            <Heading>Pedro Espi-Sanchis</Heading>
            <Text lineHeight="body" fontFamily="body">
              <ContentfulRichText
                document={pedroBio.childContentfulBlurbBodyRichTextNode.json}
              />
            </Text>
          </Box>
        </Flex>
        <Flex width={1} alignItems="center" flexWrap="wrap">
          <Box order={[1, 0]} px={[3, 4, 5]} width={[1, 1 / 2]}>
            <Heading>Lisa Espi</Heading>
            <Text lineHeight="body">
              <ContentfulRichText
                document={lisaBio.childContentfulBlurbBodyRichTextNode.json}
              />
            </Text>
          </Box>
          <Box order={[0, 1]} mb={[3, 0]} mt={[4, 0]} width={[1, 1 / 2]}>
            <Img fluid={teamPhotosByName.lisa} />
          </Box>
        </Flex>
        <Flex width={1} alignItems="center" flexWrap="wrap">
          <Box mb={[3, 0]} mt={[4, 0]} width={[1, 1 / 2]}>
            <Img fluid={teamPhotosByName.nelson} />
          </Box>
          <Box px={[3, 4, 5]} width={[1, 1 / 2]}>
            <Heading>Nelson Banderson</Heading>
            <Text lineHeight="body">
              <ContentfulRichText
                document={nelsonBio.childContentfulBlurbBodyRichTextNode.json}
              />
            </Text>
          </Box>
        </Flex>
      </Box>
    </Section>
  )
}
