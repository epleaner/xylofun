import React from "react"
import { Box, Link, Text } from "rebass/styled-components"

const Footer = () => (
  <Box bg="background" px={4} py={6} width={1} as="footer">
    <Text fontSize={2} textAlign="center">
      © 2020 XyloFun
    </Text>
    <Text mt={2} fontSize={1} textAlign="center">
      Website by{" "}
      <Link
        href="https://elipleaner.com"
        sx={{
          color: "inherit",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        Eli Pleaner
      </Link>
    </Text>
  </Box>
)

export default Footer
