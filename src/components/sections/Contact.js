import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Flex, Box, Button} from 'rebass/styled-components';
import {Label, Input, Textarea} from '@rebass/forms';
import Section from '@common/Section';
import BannerImage from '@images/banners/contact.jpg';

export default () => {
  return (
    <Section
      bannerProps={{title: 'Contact Us', image: BannerImage, height: '400px'}}
    >
      <Flex justifyContent="center" mx={[3, 6]} width={1}>
        <Box my={[4, 5]} width={[1, 1 / 2]}>
          <form name="contact" method="POST" data-netlify="true">
            <Flex flexWrap="wrap">
              <Box width={1} mb={3}>
                <Label mb={1} htmlFor="name">
                  Name (required)
                </Label>
                <Input
                  width={[1]}
                  id="name"
                  required
                  name="name"
                  defaultValue=""
                />
              </Box>
              <Box width={1} mb={3}>
                <Label mb={1} htmlFor="email">
                  Email (required)
                </Label>
                <Input
                  width={[1]}
                  type="email"
                  id="email"
                  required
                  name="email"
                  defaultValue=""
                />
              </Box>
              <Box width={1} mb={3}>
                <Label mb={1} htmlFor="phone">
                  Phone Number
                </Label>
                <Input width={[1]} id="phone" name="phone" defaultValue="" />
              </Box>
              <Box width={1} mb={3}>
                <Label mb={1} htmlFor="subject">
                  Subject
                </Label>
                <Input
                  width={[1]}
                  id="subject"
                  name="subject"
                  defaultValue=""
                />
              </Box>
              <Box width={1} mb={3}>
                <Label mb={1} htmlFor="message">
                  Message
                </Label>
                <Textarea
                  width={[1]}
                  id="message"
                  name="message"
                  defaultValue=""
                />
              </Box>
              <Box width={1} mb={3}>
                <Button type="submit">Submit</Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Section>
  );
};