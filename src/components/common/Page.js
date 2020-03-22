import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import {Flex, Box} from 'rebass/styled-components';
import {ParallaxProvider} from 'react-scroll-parallax';

import SEO from '@common/SEO';
import Footer from '@common/Footer';
import NavBar from '@common/NavBar';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const Page = ({title, children}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title={title} />
      <GlobalStyles />
      <ParallaxProvider>
        <Flex flexDirection="column" minHeight={'100vh'}>
          <NavBar />
          <Box>{children}</Box>
          <Footer />
        </Flex>
      </ParallaxProvider>
    </>
  </ThemeProvider>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
