import React from 'react';
import {Text, Box} from 'rebass/styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';

const WideMenu = ({items}) => (
  <>
    {items.map((item) => (
      <Box key={item} mx={3}>
        <StyledGatsbyLink
          to={`/${item
              .toLowerCase()
              .split(' ')
              .join('-')}`}
        >
          <Text variant="nav">{item}</Text>
        </StyledGatsbyLink>
      </Box>
    ))}
  </>
);

export default WideMenu;
