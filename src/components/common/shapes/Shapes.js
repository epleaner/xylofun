import React from 'react';
import {motion} from 'framer-motion';
import {Flex} from 'rebass/styled-components';
import styled from 'styled-components';

const RedCircle = styled(motion.div)`
  background: red;
  border-radius: 30px;
  width: 150px;
  height: 150px;
`;

export default () => (
  <Flex>
    <RedCircle animate={{scale: 2}} />
  </Flex>
);
