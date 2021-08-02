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
  }
}

export default extendTheme ({ config, fonts, colors })
