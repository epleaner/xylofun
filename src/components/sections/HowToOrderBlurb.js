import React from 'react';
import {Flex, Box, Text, Button} from 'rebass/styled-components';
import styled from 'styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';
import Section from '@common/Section';

export default () => (
  <Section alignItems="center" bg="blue.base" px={[3, 5]}>
    <Flex width={[1, 2 / 3]}>
      <Box>
        <Text variant="heading" color="white">
          <h1>
            It is based on a specially designed 15 note Alto xylophone made with
            a special wood from a sustainable source that is very strong and has
            a beautiful ring.
          </h1>
        </Text>
        <Text variant="body" color="white" fontSize={18}>
          The keys of the xylophones are marked with three colours – red, blue
          and green – which correspond to the three chords used in many popular
          songs – C F and G – and are the basis for an accessible notation
          system.
        </Text>
      </Box>
    </Flex>
    <Flex justifyContent="center" width={[1, 1 / 3]}>
      <Box>
        <StyledGatsbyLink to="/how-to-order">
          <Button sx={{cursor: 'pointer'}} variant="outline" p={3}>
            <Text variant="nav">How to order</Text>
          </Button>
        </StyledGatsbyLink>
      </Box>
    </Flex>
  </Section>
);
