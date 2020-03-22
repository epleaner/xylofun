import React from 'react';
import {Box, Text, Link} from 'rebass/styled-components';

const Footer = () => (
  <Box mt="auto" px={4} py={2} width={1} as="footer">
    <Text fontSize={2} textAlign="center">
      © 2020 Xylofun
    </Text>
    <Text mt={2} fontSize={1} textAlign="center">
      Website by <Link href="https://elipleaner.com">Eli Pleaner</Link>
    </Text>
  </Box>
);

export default Footer;
