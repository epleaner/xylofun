import React from "react"
import styled from "styled-components"
import StyledGatsbyLink from "@common/StyledGatsbyLink"

const StyledLink = styled(StyledGatsbyLink)`
  padding: 5px 0px;
  &:hover,
  &:focus,
  &.active {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`

export default props => <StyledLink activeClassName="active" {...props} />
