import React from 'react';
import {Flex, Text, Box} from 'rebass/styled-components';
import styled from 'styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';

const StyledContainer = styled(Flex)`
  position: fixed;
  z-index: 2;
  box-shadow: 0 0 10px 0 #808080a3;
`;

const NavBar = () => (
  <StyledContainer as="header" bg="white" width={1} p={2} alignItems="center">
    <StyledGatsbyLink to="/">
      <Text fontWeight="bold">Xylofun</Text>
    </StyledGatsbyLink>
    <Box mx="auto" />
    <Box mx={3}>
      <StyledGatsbyLink to="/about">
        <Text>About</Text>
      </StyledGatsbyLink>
    </Box>
    <Box mx={3}>
      <StyledGatsbyLink to="/gallery">
        <Text>Gallery</Text>
      </StyledGatsbyLink>
    </Box>
    <Box mx={3}>
      <StyledGatsbyLink to="/who-we-are">
        <Text>Who We Are</Text>
      </StyledGatsbyLink>
    </Box>
  </StyledContainer>
);

export default NavBar;
