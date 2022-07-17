import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const fonts = {
  heading: `
    GeneralSans-Variable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
    GeneralSans-Variable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  mono: `
    Inconsolata, -apple-system, Menlo, Monaco, Consolas`
};

const colors = {
  aqua: {
    50: "#d7fff9",
    100: "#aafffe",
    200: "#7afaff",
    300: "#48f1ff",
    400: "#1ae4ff",
    500: "#00c3e6",
    600: "#00a3b4",
    700: "#007e82",
    800: "#00504e",
    900: "#001f1d"
  }
};

const styles = {
  global: {
    body: {
      background: "var(--theme-bg)",
      color: "gray.50",
      borderColor: "var(--theme-aqua)"
    }
  }
};

const components = {
  Button: {
    baseStyle: { borderRadius: "0.25rem" },
    variants: {
      solid: {
        bg: "aqua.200",
        color: "black",
        _hover: {
          bg: "aqua.600",
          color: "gray.100"
        }
      }
    }
  },
  LinkBox: {
    defaultProps: {
      color: "var(--theme-aqua)",
      _hover: {
        color: "var(--theme-pink)"
      }
    }
  },
  Link: {
    baseStyle: {
      color: "gray.200",
      _hover: {
        color: "var(--theme-pink)",
        textDecoration: "none"
      }
    }
  }
};

export default extendTheme({ config, fonts, components, colors, styles });
