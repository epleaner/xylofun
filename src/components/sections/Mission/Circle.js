import React from 'react';
import {Flex, Box, Text} from 'rebass/styled-components';
import Circle from '@common/shapes/Circle';

export default (props) => (
  <Flex justifyContent="center" flexWrap="wrap">
    <Box mb={4}>
      <Circle color={props.color} />
    </Box>
    <Box mt={[5]} mx={2}>
      <Text textAlign="center">{props.text}</Text>
    </Box>
  </Flex>
);
