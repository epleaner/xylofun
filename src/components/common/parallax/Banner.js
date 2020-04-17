import React from "react"
import PropTypes from "prop-types"
import { Flex, Heading } from "rebass/styled-components"
import styled from "styled-components"
import { ParallaxBanner } from "react-scroll-parallax"

const HeadingContainer = styled(Flex)`
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
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
        image: image,
        amount: 0.5,
      },
    ]}
    tagOuter="figure"
  >
    {title && (
      <HeadingContainer justifyContent="center" width={1}>
        <ElevatedHeading fontSize={[6, 7]}>{title}</ElevatedHeading>
      </HeadingContainer>
    )}
    {children}
  </ParallaxBanner>
)

Banner.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.node,
  children: PropTypes.node,
}

export default Banner
