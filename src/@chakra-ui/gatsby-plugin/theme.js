import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const fonts = {
  heading: `
    ManropeVariable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
    ManropeVariable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  mono: `
    Space Mono, -apple-system, Menlo, Monaco, Consolas`
}

const colors = {
  aqua:
  {
    "50": "#E5F5FF",
    "100": "#B8E4FF",
    "200": "#8AD3FF",
    "300": "#5CC2FF",
    "400": "#2EB1FF",
    "500": "#00A0FF",
    "600": "#0080CC",
    "700": "#006099",
    "800": "#004066",
    "900": "#002d47",
    "1000": "#001b2b",
  }
}

const styles = {
  global: {
    body: {
      bg: "aqua.1000",
      color: "gray.50"
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
        bg: "aqua.200",
        color: "black",
        _hover: {
          bg: "aqua.600",
          color: "gray.200"
        }
      }

    }

  },
  LinkBox: {
    defaultProps: {
      color: "pink.200",
      _hover: {
        color: "aqua.300"
      }
    }
  },
  Link: {
    baseStyle: {
      color: "grey.200",
      _hover: {
        textDecoration: "none",
        color: "aqua.300"
      }
    }
  },
}



export default extendTheme ({ config, fonts, components, colors, styles })
