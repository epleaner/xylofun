import React from 'react';
import {Flex, Box, Text, Button} from 'rebass/styled-components';
import styled from 'styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';
import Section from '@common/Section';

export default () => (
  <Section alignItems="center" bg="green.base" px={[3, 5]}>
    <Flex width={[1, 2 / 3]} order={[0, 1]}>
      <Box>
        <Text variant="heading" color="white">
          <h1>
            Within minutes of starting the very first session, even those who
            have never played a musical instrument before find themselves
            performing in a band, producing a song that they know and love.
          </h1>
        </Text>
      </Box>
    </Flex>
    <Flex justifyContent="center" width={[1, 1 / 3]} order={[1, 0]}>
      <Box>
        <StyledGatsbyLink to="/gallery">
          <Button sx={{cursor: 'pointer'}} variant="outline" p={3}>
            <Text variant="nav">See it in action</Text>
          </Button>
        </StyledGatsbyLink>
      </Box>
    </Flex>
  </Section>
);
