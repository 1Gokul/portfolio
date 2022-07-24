import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const fonts = {
  heading: `
    GeneralSans-Variable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
    GeneralSans-Variable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  mono: `
  Space Mono, -apple-system, Menlo, Monaco, Consolas`
};

const colors = {
  cyan: {
    50: '#e6feff',
    100: '#a5fcff',
    200: '#76f3f7',
    300: '#6fe5e8',
    400: '#67d4d8',
    500: '#5ec2c5',
    600: '#54adb0',
    700: '#489597',
    800: '#397577',
    900: '#214546'
  }
};

const styles = {
  global: {
    body: {
      background: 'var(--theme-bg)',
      color: 'gray.50',
      borderColor: 'var(--theme-aqua)'
    }
  }
};

const components = {
  Button: {
    baseStyle: { borderRadius: '0.25rem' },
    variants: {
      solid: {
        bg: 'cyan.200',
        color: 'black',
        _hover: {
          bg: 'cyan.600',
          color: 'gray.100'
        }
      }
    }
  },
  LinkBox: {
    defaultProps: {
      color: 'var(--theme-aqua)',
      _hover: {
        color: 'var(--theme-pink)'
      }
    }
  },
  Link: {
    baseStyle: {
      color: 'gray.200',
      _hover: {
        color: 'var(--theme-pink)',
        textDecoration: 'none'
      }
    }
  }
};

export default extendTheme({ config, fonts, components, colors, styles });
