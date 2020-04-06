import React from "react"
import { Text } from "rebass/styled-components"

export default props => (
  <Text {...props}>
    <Text color="red.base" as="span">
      Xy
    </Text>
    <Text color="green.base" as="span">
      lo
    </Text>
    <Text color="blue.base" as="span">
      Fun
    </Text>
  </Text>
)
