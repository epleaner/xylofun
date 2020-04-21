import React from "react"
import { motion } from "framer-motion"
import { Flex } from "rebass/styled-components"
import styled from "styled-components"

const Circle = styled(motion.div)`
  background: ${({ theme, color }) => theme.colors[color].base};
  border-radius: 100%;
  width: ${({ size }) => (size ? size : "100px")};
  height: ${({ size }) => (size ? size : "100px")};
`

export default props => (
  <Flex>
    <Circle {...props} animate={{ scale: 2 }} />
  </Flex>
)
