import React from 'react';
import {Flex} from 'rebass/styled-components';
import Banner from '@components/common/parallax/Banner';

const Section = ({bannerProps, children, ...rest}) => {
  return (
    <Flex
      bg="background"
      flexWrap="wrap"
      minHeight="100vh"
      width="100vw"
      {...rest}
    >
      {bannerProps && <Banner {...bannerProps}></Banner>}
      {children}
    </Flex>
  );
};

export default Section;
