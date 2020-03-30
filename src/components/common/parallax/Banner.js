import React from "react"
import { Flex, Heading } from "rebass/styled-components"
import styled from "styled-components"
import { ParallaxBanner } from "react-scroll-parallax"
import BannerImage from "@images/hero/banner.jpg"

const HeadingContainer = styled(Flex)`
  position: absolute;
  top: 40%;
`
const ElevatedHeading = styled(Heading)`
  z-index: 1;
  color: white;
`

const Banner = ({ height, image, title, children }) => (
  <ParallaxBanner
    style={{ height: height || "100vh" }}
    layers={[
      {
        image: image || BannerImage,
        amount: 0.5,
      },
    ]}
    tagOuter="figure"
  >
    {title && (
      <HeadingContainer justifyContent="center" width={1}>
        <ElevatedHeading>{title}</ElevatedHeading>}
      </HeadingContainer>
    )}
    {children}
  </ParallaxBanner>
)

export default Banner
