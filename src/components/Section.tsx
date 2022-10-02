import { styled } from '../theme'
import { color } from '../util'

export const Section = styled('section', {
  position: 'relative',
  width: '100%',

  variants: {
    size: {
      1: {
        py: '$3',
      },
      2: {
        py: '$5',
      },
      3: {
        py: '$7',
      },
      4: {
        py: '$8',
      },
      5: {
        py: '$9',
      },
    },
    color: {
      accent: {
        background: color('blue100', 0.15),
      },
    },
  },

  defaultVariants: {
    size: 2,
  },
})
