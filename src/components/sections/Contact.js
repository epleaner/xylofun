import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Flex, Box, Button} from 'rebass/styled-components';
import {Label, Input, Textarea} from '@rebass/forms';
import Section from '@common/Section';
import ContactForm from '@common/ContactForm';
import BannerImage from '@images/banners/contact-us.jpg';

export default () => {
  return (
    <Section
      bannerProps={{title: 'Contact Us', image: BannerImage, height: '400px'}}
    >
      <Flex justifyContent="center" mx={[3, 6]} width={1}>
        <Box my={[4, 5]} width={[1, 1 / 2]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  );
};
