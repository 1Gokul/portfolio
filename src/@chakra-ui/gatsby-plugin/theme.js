import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const fonts = {
  heading: `
    Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
    Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  mono: `
    Space Mono, -apple-system, Menlo, Monaco, Consolas`
}

const colors = {
  aqua:
  {
    50: "#ddfcff",
    100: "#b5f0f9",
    200: "#8be4f3",
    300: "#61daee",
    400: "#3ccee8",
    500: "#29b5cf",
    600: "#1a8da1",
    700: "#0c6574",
    800: "#003d47",
    900: "#00161a",
  },
  "purple": {
    "50": "#EFEAFA",
    "100": "#D3C5F2",
    "200": "#B79FE9",
    "300": "#9B7AE1",
    "400": "#7F55D8",
    "500": "#632FD0",
    "600": "#4F26A6",
    "700": "#3C1C7D",
    "800": "#281353",
    "900": "#14092A"
  }
}

const styles = {
  global: {
    body: {
      bg: "purple.900",
      color: "gray.200"
    }
  }
}

const components = {
  Button: {
    defaultProps:{
      zIndex: "1"
    },
    variants:{
      solid: {
        bg: "purple.200",
        color: "black",
        _hover: {
          bg: "purple.600",
          color: "gray.200"
        }
      },
      nav: {
        _hover: {
          color: "purple.400"
        }
      }

    },
    SectionHeader: {
      defaultProps: {
        color: "teal"
      }

    }

  }
}

export default extendTheme ({ config, fonts, components, colors, styles })
