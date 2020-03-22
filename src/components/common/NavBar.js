import React from 'react';
import {Flex, Text, Box, Link} from 'rebass/styled-components';
import styled from 'styled-components';

const StyledContainer = styled(Flex)`
  position: fixed;
  z-index: 1;
`;

const NavBar = () => (
  <StyledContainer as="header" bg="white" width={1} p={2} alignItems="center">
    <Text fontWeight="bold">Xylofun</Text>
    <Box mx="auto" />
    <Link variant="nav" href="#!">
      About
    </Link>
  </StyledContainer>
);

export default NavBar;
