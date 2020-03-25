import React from 'react';
import {motion} from 'framer-motion';
import {Flex} from 'rebass/styled-components';
import styled from 'styled-components';

const Circle = styled(motion.div)`
  background: ${({color}) => color};
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

export default ({color}) => (
  <Flex>
    <Circle color={color} animate={{scale: 2}} />
  </Flex>
);
