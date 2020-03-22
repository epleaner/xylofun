import React from 'react';
import {Box} from 'rebass';

const Section = ({children, ...rest}) => {
  return (
    <Box height="100vh" width="100vw" {...rest}>
      {children}
    </Box>
  );
};

export default Section;
