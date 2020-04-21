import React from "react"
import { Box, Link, Text } from "rebass/styled-components"

const Footer = () => (
  <Box bg="background" px={4} py={2} width={1} as="footer">
    <Text variant="small">
      © 2020 XyloFun | Website by{" "}
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
