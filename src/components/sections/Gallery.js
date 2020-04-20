import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import LightboxGallery from "@common/LightboxGallery"

const StyledCarousel = styled(Carousel)`
  li.slide {
    background: none;
  }
  .control-prev.control-arrow::before {
    border-right: 8px solid black;
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: none;
  }
  .control-next.control-arrow::before {
    border-left: 8px solid black;
  }
  .carousel .control-dots .dot {
    background: orange;
    box-shadow: none;
  }
`

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
        <StyledCarousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {[
            "409708603",
            "409708342",
            "409708251",
            "409708001",
            "409707796",
          ].map(id => (
            <iframe
              key={id}
              src={`https://player.vimeo.com/video/${id}`}
              height="400px"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ))}
        </StyledCarousel>
        <LightboxGallery photos={photos} />
      </Box>
    </Section>
  )
}
