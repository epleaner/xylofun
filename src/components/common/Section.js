import React from 'react';
import {Flex} from 'rebass';

const Section = ({children, ...rest}) => {
  return (
    <Flex flexWrap="wrap" minHeight="100vh" width="100vw" {...rest}>
      {children}
    </Flex>
  );
};

export default Section;
