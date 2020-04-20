import React from "react"
import styled from "styled-components"
import StyledGatsbyLink from "@common/StyledGatsbyLink"

const StyledLink = styled(StyledGatsbyLink)`
  &:hover,
  &:focus,
  &.active {
    padding-bottom: 3px;
    text-decoration: none;
    border-bottom: 2px solid orange;
    cursor: pointer;
  }
  transition: all 0.15s ease;
  text-transform: uppercase;
  font-size: 0.8rem;
`

export default props => <StyledLink activeClassName="active" {...props} />
