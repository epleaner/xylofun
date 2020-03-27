import rebassPresetTheme from '@rebass/preset';

const theme = {
  ...rebassPresetTheme,
  ...{
    lineHeights: {
      body: 1.75,
      heading: 1.25,
    },
  },
};

export default theme;
