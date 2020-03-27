import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Heading, Flex, Box, Image, Text} from 'rebass/styled-components';
import styled from 'styled-components';

import Section from '@common/Section';
import Pedro from '@images/team/pedro.jpg';
import Lisa from '@images/team/lisa.jpg';
import Nelson from '@images/team/nelson.jpg';

const StyledImage = styled(Image)``;

export default () => {
  return (
    <Section>
      <Flex justifyContent="center" width={1} mt={[5, 6]} mb={[0, 5]}>
        <Heading>Who We Are</Heading>
      </Flex>
      <Flex mt={4} width={1} alignItems="center" flexWrap="wrap">
        <Box mb={[3, 0]} width={[1, 1 / 2]}>
          <StyledImage height="100%" src={Pedro} />
        </Box>
        <Box px={[3, 4, 5]} width={[1, 1 / 2]}>
          <Heading mb={3}>Pedro Espi-Sanchis</Heading>
          <Text lineHeight="body">
            Pedro Espi-Sanchis is the founder and director of XyloFun. He is
            well known as ”Pedro the Music Man” from a long-running children’s
            television series on SABC. He is a musician and African music
            specialist who has been involved in music education and teaching
            training for over 35 years. He is recognized in South Africa and
            internationally for his ground-breaking work in bringing African
            music into the classroom, and for his ability to “use anything to
            make melodious music anytime anywhere with everything” (as one
            teacher wrote on his feedback form.) He has written the music
            sections of multiple textbooks for Oxford University Press and other
            major publishers. Parallel to his work in education, Pedro also
            performs as a musician and story-teller, including close
            collaborations with some great African musicians. He personally
            oversees the production of the xylophones and delivers the XyloFun
            training.
          </Text>
        </Box>
      </Flex>
      <Flex width={1} alignItems="center" flexWrap="wrap">
        <Box order={[1, 0]} px={[3, 4, 5]} width={[1, 1 / 2]}>
          <Heading mb={3}>Lisa Espi</Heading>
          <Text lineHeight="body">
            Lisa Espi has an honours degree in Drama in Education from UCT and
            has worked for many years in the field of creative arts education,
            writing materials and training teachers in many different parts of
            South Africa. Her special interests are visual and performing arts
            as a means of learning across the curriculum, and art and design
            from southern Africa. She is co-producer on the XyloFun project,
            designing the instruments, writing materials and overseeing the
            training courses.
          </Text>
        </Box>
        <Box order={[0, 1]} mb={[3, 0]} mt={[4, 0]} width={[1, 1 / 2]}>
          <StyledImage height="100%" src={Lisa} />
        </Box>
      </Flex>
      <Flex width={1} alignItems="center" flexWrap="wrap">
        <Box mb={[3, 0]} mt={[4, 0]} width={[1, 1 / 2]}>
          <StyledImage height="100%" src={Nelson} />
        </Box>
        <Box px={[3, 4, 5]} width={[1, 1 / 2]}>
          <Heading mb={3}>Nelson Banderson</Heading>
          <Text lineHeight="body">
            Nelson Banderson was born in Limpopo and has lived in Cape Town
            since he was a young child. He came to XyloFun as an established
            craftsman and designer, making baskets and vessels of exceptional
            quality which are stocked by the Kim Sacks Gallery in Johannesburg
            and Kalk Bay Modern in Cape Town. For the XyloFun project he is
            involved in making the instruments from construction to the tuning
            stage.
          </Text>
        </Box>
      </Flex>
    </Section>
  );
};
