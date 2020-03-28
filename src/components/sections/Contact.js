import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Heading, Flex, Box} from 'rebass/styled-components';
import styled from 'styled-components';
import Section from '@common/Section';
import Circle from '@common/shapes/Circle';
import ContentfulRichText from '@common/ContentfulRichText';
import Banner from '@common/parallax/Banner';

const HeadingContainer = styled(Flex)`
  position: absolute;
  top: 50%;
`;
const ElevatedHeading = styled(Heading)`
  z-index: 1;
  color: white;
  top: 50%;
`;

const About = () => {
  return (
    <Section>
      <Banner height="250px">
        <HeadingContainer justifyContent="center" width={1}>
          <ElevatedHeading>Contact Us</ElevatedHeading>
        </HeadingContainer>
      </Banner>
      <Box mx={[3, 6]}>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Box>
    </Section>
  );
};

export default About;
