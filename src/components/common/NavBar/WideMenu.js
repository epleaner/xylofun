import React from 'react';
import {Text, Box} from 'rebass/styled-components';

import StyledGatsbyLink from '@common/StyledGatsbyLink';

const WideMenu = ({items}) => (
  <>
    {items.map((item) => (
      <Box key={item} mx={2}>
        <StyledGatsbyLink
          to={`/${item
              .toLowerCase()
              .split(' ')
              .join('-')}`}
        >
          {item}
        </StyledGatsbyLink>
      </Box>
    ))}
  </>
);

export default WideMenu;
