import { styled } from '../theme'
import { color } from '../util'

export const Button = styled('button', {
  padding: '$3 $5',

  color: color('$fg'),
  background: 'transparent',

  border: '1px solid ' + color('$fg'),
  borderRadius: '$2',

  cursor: 'pointer',

  willChange: 'color, background',
  transition: '$fast',
  '&:hover': {
    color: color('$bg'),
    background: color('$fg'),
  },

  variants: {
    color: {
      normal: {
        $$fg: '$colors$foreground',
        $$bg: '$colors$background',
      },
      reverse: {
        $$fg: '$colors$background',
        $$bg: '$colors$foreground',
      },
      accent: {
        $$fg: '$colors$background',
        $$bg: '$colors$foreground',
        '&:hover': {
          color: color('$fg'),
          background: color('blue100'),
          borderColor: color('blue100'),
        },
      },
    },
  },

  defaultVariants: {
    color: 'normal',
  },
})
