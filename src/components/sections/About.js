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
  top: 40%;
`;
const ElevatedHeading = styled(Heading)`
  z-index: 1;
  color: white;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      pageContent: contentfulPage(title: { eq: "About Xylofun" }) {
        title
        richText {
          json
        }
      }
    }
  `);

  const {pageContent} = data;

  return (
    <Section>
      <Banner height="250px">
        <HeadingContainer justifyContent="center" width={1}>
          <ElevatedHeading>{pageContent.title}</ElevatedHeading>
        </HeadingContainer>
      </Banner>
      <Box mx={[3, 6]} my={[5]}>
        <ContentfulRichText document={pageContent.richText.json} />
      </Box>
    </Section>
  );
};

export default About;
