import React, {useState} from 'react';
import styled from 'styled-components';
import {Box, Text} from 'rebass/styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu} from '@styled-icons/feather';
import {Close} from '@styled-icons/evil';

import StyledGatsbyLink from '@common/StyledGatsbyLink';

const StyledHoverCursor = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledDropMenu = styled.nav`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const StyledClose = styled(Close)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledList = styled.ul`
  list-style: none;
  margin-top: 100px;
  padding: 0;
`;

const variants = {
  list: {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  },
  item: {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100},
  },
};

export default ({items}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <StyledHoverCursor>
        <Menu
          size={20}
          title="Open Navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </StyledHoverCursor>
      {menuOpen && (
        <AnimatePresence>
          <motion.div
            initial="hidden"
            exit="hidden"
            animate="visible"
            variants={variants.list}
          >
            <StyledDropMenu>
              <StyledHoverCursor>
                <StyledClose
                  size={20}
                  title="Close Navigation"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </StyledHoverCursor>
              <StyledList>
                {items.map((item) => (
                  <motion.li
                    initial="hidden"
                    exit="hidden"
                    key={item}
                    variants={variants.item}
                  >
                    <StyledGatsbyLink
                      to={`/${item
                          .toLowerCase()
                          .split(' ')
                          .join('-')}`}
                    >
                      <Text mb={3} variant="nav" textAlign="center">
                        {item}
                      </Text>
                    </StyledGatsbyLink>
                  </motion.li>
                ))}
              </StyledList>
            </StyledDropMenu>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
