import React from 'react';
import {Flex, Box, Text, Button} from 'rebass/styled-components';
import styled from 'styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';
import Section from '@common/Section';

export default () => (
  <Section alignItems="center" bg="red.base" px={[3, 5]}>
    <Flex width={[1, 2 / 3]} justifyContent="center">
      <Box>
        <Text variant="heading" color="white">
          <h1>
            The XyloFun project raises funding to supply high quality
            instruments and training to schools in South Africa that do not have
            resources for music education.
          </h1>
        </Text>
      </Box>
    </Flex>
    <Flex justifyContent="center" width={[1, 1 / 3]}>
      <Box>
        <StyledGatsbyLink to="/about">
          <Button sx={{cursor: 'pointer'}} variant="outline" p={3}>
            <Text variant="nav">About the project</Text>
          </Button>
        </StyledGatsbyLink>
      </Box>
    </Flex>
  </Section>
);
