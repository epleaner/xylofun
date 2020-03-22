import React from 'react';
import {Flex, Text, Box, Link} from 'rebass/styled-components';
import styled from 'styled-components';

const StyledContainer = styled(Flex)`
  position: fixed;
`;

const NavBar = () => (
  <StyledContainer as="header" width={1} p={4} alignItems="center">
    <Text fontWeight="bold">Xylofun</Text>
    <Box mx="auto" />
    <Link variant="nav" href="#!">
      About
    </Link>
  </StyledContainer>
);

export default NavBar;
