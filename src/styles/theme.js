import baseTheme from "@rebass/preset"

const palette = {
  red: {
    base: "rgba(252, 80, 67,1)",
    red1: "rgba(255,153,145,1)",
    red2: "rgba(255,114,102,1)",
    red3: "rgba(239, 35, 19,1)",
    red4: "rgba(182, 21,  8,1)",
  },

  orange: {
    base: "rgba(252,170, 67,1)",
    orange1: "rgba(255,206,145,1)",
    orange2: "rgba(255,188,102,1)",
    orange3: "rgba(239,142, 19,1)",
    orange4: "rgba(182,105,  8,1)",
  },

  blue: {
    base: "#0044fe",
    blue1: "rgba(125,176,210,1)",
    blue2: "rgba( 80,142,183,1)",
    blue3: "rgba( 20,101,153,1)",
    blue4: "rgba( 12, 75,116,1)",
  },

  green: {
    base: "rgba( 51,193, 76,1)",
    green1: "rgba(128,226,145,1)",
    green2: "rgba( 84,208,105,1)",
    green3: "rgba( 14,183, 44,1)",
    green4: "rgba(  6,139, 29,1)",
  },
}

const theme = {
  ...baseTheme,
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Open Sans, sans-serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    ...baseTheme.colors,
    background: "papayawhip",
    primary: palette.blue.base,
    secondary: palette.green.base,
    ...palette,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  space: [...Array(20).keys()].map(i => i * 8),
  text: {
    ...baseTheme.text,
    heading: {
      ...baseTheme.text.heading,
      marginY: [4, 5],
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    small: {
      fontSize: "0.6rem",
    },
    h1: {
      fontSize: [5, 6],
      ...baseTheme.text.heading,
      marginY: [4, 5],
    },
    h2: {
      fontSize: [4, 5],
      ...baseTheme.text.heading,
      marginY: [4, 5],
    },
    h3: {
      fontSize: [3, 4],
      ...baseTheme.text.heading,
      marginTop: [9, 10],
      marginBottom: [4, 5],
    },
    h4: {
      fontSize: [3, 4],
      ...baseTheme.text.heading,
      marginY: [4, 5],
    },
    h5: {
      fontSize: [1, 2],
      ...baseTheme.text.heading,
      marginY: [4, 5],
    },
  },
  buttons: {
    ...baseTheme.buttons,
    primary: {
      ...baseTheme.buttons.primary,
      bg: "orange.orange3",
      transition: "all linear .15s",

      ":hover,:focus,.active": {
        bg: "orange.base",
      },
    },
    outline: {
      ...baseTheme.buttons.outline,
      transition: "all linear .15s",
      color: "#fafafa",
      border: "1px solid #fafafa",
      boxShadow: "none",
      ":hover,:focus,.active": { bg: "#fafafa", color: "inherit" },
    },
    circle: {
      bg: "#fafafa",
      width: "200px",
      height: "200px",
      borderRadius: "100%",
    },
  },
}

export default theme
