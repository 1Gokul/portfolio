import { extendTheme } from "@chakra-ui/react"

const theme = {
  fonts: {
    heading: `
    Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
    body: `
    Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
    mono: `
    Space Mono, -apple-system, Menlo, Monaco, Consolas`
  },
}
export default extendTheme (theme)
