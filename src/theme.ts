import { createStitches } from '@stitches/react'

function setAllFactory(...properties) {
  return (val) => Object.fromEntries(properties.map((prop) => [prop, val]))
}

export const config = {
  theme: {
    fonts: {
      heading: 'Epilogue, Inter',
      subheading: 'Inter',
      paragraph: 'Inter',
    },
    fontSizes: {
      1: '0.5rem',
      2: '0.75rem',
      3: '1rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '2rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.9rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '3rem',
      8: '5rem',
      9: '7.5rem',
    },
    sizes: {
      1: '1rem',
      2: '1.5rem',
      3: '3rem',
    },
    transitions: {
      slow: '0.3s ease-in-out',
      normal: '0.1s ease-in-out',
      fast: '0.075s ease-in-out',
    },
    colors: {
      white100: '255, 255, 255',

      white200: '237, 237, 237',
      black100: '0, 0, 0',
      black200: '24, 24, 24',

      blue100: '66, 135, 245',
      blue200: '48, 113, 217',

      foreground: '$black100',
      background: '$white100',

      gradient: 'linear-gradient(30deg, $blue100, $blue200)',
    },
    radii: {
      1: '0.5rem',
      2: '1rem',
      3: '4rem',
    },
  },

  utils: {
    pl: setAllFactory('paddingLeft'),
    pr: setAllFactory('paddingRight'),
    pt: setAllFactory('paddingTop'),
    pb: setAllFactory('paddingBottom'),
    px: setAllFactory('pl', 'pr'),
    py: setAllFactory('pt', 'pb'),
    p: setAllFactory('px', 'py'),

    ml: setAllFactory('marginLeft'),
    mr: setAllFactory('marginRight'),
    mx: setAllFactory('ml', 'mr'),
  },
} as const

export const { styled, createTheme } = createStitches(config)
