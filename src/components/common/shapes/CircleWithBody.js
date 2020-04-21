import React from "react"
import styled from "styled-components"

const Circle = styled.div`
  background: ${({ theme, color }) => theme.colors[color].base};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1em;
  border-radius: 50%;
  vertical-align: middle;
  box-shadow: 0px 0px 30px -15px black;
  &:before {
    content: "";
    float: left;
    width: auto;
    padding-bottom: 100%;
  }
`

export default props => <Circle {...props} />
