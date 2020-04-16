import React from "react"
import styled from "styled-components"
import StyledGatsbyLink from "@common/StyledGatsbyLink"

const StyledLink = styled(StyledGatsbyLink)`
  &:hover,
  &:focus,
  &.active {
    padding-bottom: 5px;
    text-decoration: none;
    border-bottom: 5px solid orange;
    cursor: pointer;
  }
  transition: all 0.15s ease;
`

export default props => <StyledLink activeClassName="active" {...props} />
