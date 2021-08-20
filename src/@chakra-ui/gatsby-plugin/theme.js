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
      bgColor: "#001b2b",
      backgroundImage: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23004b78' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");)`,
      color: "gray.50",
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
