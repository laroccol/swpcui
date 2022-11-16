import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#ebf1ff", "#e8e8e8")(props),
      letterSpacing: 1.1,
    },
    button: {
      letterSpacing: 1.1,
    },
    "::-moz-selection": {
      /* Code for Firefox */ color: "red",
      background: "yellow",
    },
    "::selection": {
      background: "rgba(143, 168, 50, 0.1)",
    },
    "body::-webkit-scrollbar": {
      width: 1.5,
      height: 1.5,
    },
    "body::-webkit-scrollbar-track": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      borderRadius: "5px",
    },
    "body::-webkit-scrollbar-thumb": {
      backgroundColor: "#dfdfdf",
      borderRadius: "5px",
    },
    "input:focus": {
      borderColor: "red",
    },
  }),
};

const components = {
  Link: {
    variants: {
      MenuLink: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
};

const fonts = {
  body: "Roboto, sans-serif",
};

const theme = extendTheme({
  components,
  styles,
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
