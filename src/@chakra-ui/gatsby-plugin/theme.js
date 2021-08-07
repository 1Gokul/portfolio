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
  },
  "cyan": {
    "50": "#E9F8FC",
    "100": "#C0EBF6",
    "200": "#98DFF1",
    "300": "#6FD2EB",
    "400": "#47C5E6",
    "500": "#1FB8E0",
    "600": "#1994B3",
    "700": "#126F87",
    "800": "#0C4A5A",
    "900": "#06252D"
  }
}

const styles = {
  global: {
    body: {
      bg: "aqua.1000",
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
        bg: "aqua.200",
        color: "black",
        _hover: {
          bg: "aqua.600",
          color: "gray.200"
        }
      },

    }

  },
  NavLink: {
    baseStyle: {
      bg: "pink.200",
      padding: "50px",
      margin: "50px",
      _hover: {
        color: "aqua.400"
      },
    }
  }
}



export default extendTheme ({ config, fonts, components, colors, styles })
