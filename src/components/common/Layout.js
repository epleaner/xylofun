import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import {Flex, Box} from 'rebass/styled-components';

import SEO from '@common/SEO';
import Footer from '@common/Footer';
import NavBar from '@common/NavBar';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyles />
      <Flex flexDirection="column" minHeight={'100vh'}>
        <NavBar />
        <Box mt={6}>{children}</Box>
        <Footer />
      </Flex>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
