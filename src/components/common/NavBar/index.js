import React from 'react';
import {Flex, Text, Box} from 'rebass/styled-components';
import styled from 'styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';
import WideMenu from '@common/NavBar/WideMenu';
import MobileMenu from '@common/NavBar/MobileMenu';

const StyledContainer = styled(Flex)`
  position: fixed;
  z-index: 2;
  box-shadow: 0 0 10px 0 #808080a3;
`;

const navItems = ['About', 'Gallery', 'Who We Are', 'How to Order', 'Contact'];

const NavBar = () => (
  <StyledContainer
    as="header"
    bg="background"
    width={1}
    py={2}
    px={[2, 10]}
    alignItems="center"
  >
    <StyledGatsbyLink to="/">
      <Text fontWeight="bold">Xylofun</Text>
    </StyledGatsbyLink>
    <Box mx="auto" />
    <Box display={['none', 'flex']}>
      <WideMenu items={navItems} />
    </Box>
    <Box display={['flex', 'none']}>
      <MobileMenu items={navItems} />
    </Box>
  </StyledContainer>
);

export default NavBar;
