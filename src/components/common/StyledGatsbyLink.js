import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus,
  &.active {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export default (props) => <StyledLink activeClassName="active" {...props} />;
