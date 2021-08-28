import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const fonts = {
  heading: `
    GeneralSans-Variable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
    GeneralSans-Variable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  mono: `
    InconsolataVariable, -apple-system, Menlo, Monaco, Consolas`
}

const colors = {
  aqua:
  {
    50: "#d7fff9",
    100: "#aafffe",
    200: "#7afaff",
    300: "#48f1ff",
    400: "#1ae4ff",
    500: "#00c3e6",
    600: "#00a3b4",
    700: "#007e82",
    800: "#00504e",
    900: "#001f1d",
  }
}

const styles = {
  global: {
    body: {
      background: "#001b2b",
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
          color: "gray.100"
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
