import baseTheme from '@rebass/preset';

const theme = {
  ...baseTheme,
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  space: [...Array(20).keys()].map((i) => i * 8),
  text: {
    ...baseTheme.text,
    heading: {
      ...baseTheme.text.heading,
      marginY: [4, 5],
    },
  },
};

export default theme;
