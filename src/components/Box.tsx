import { styled } from '../theme'

// Allows us to pass stitches props to non-stitches components
export const Box = styled('div', {
  variants: {
    rounded: {
      true: {
        borderRadius: '$2',
        overflow: 'hidden',
      },
    },
  },
})
