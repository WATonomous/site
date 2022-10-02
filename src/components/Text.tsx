import { styled } from '../theme'
import { color } from '../util'

// Default is a span, use `as` property to change
export const Text = styled('span', {
  variants: {
    color: {
      normal: {
        color: 'inherit',
      },
      reverse: {
        color: color('background'),
      },
      accent: {
        color: color('blue100'),
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },

  defaultVariants: {
    color: 'normal',
    align: 'left',
  },
})
