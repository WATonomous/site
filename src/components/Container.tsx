import { styled } from '../theme'

export const Container = styled('div', {
  px: '$8',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
    align: {
      left: {
        ml: 0,
        mr: 'auto',
      },
      center: {
        mx: 'auto',
      },
      right: {
        ml: 'auto',
        mr: 0,
      },
    },
  },

  defaultVariants: {
    size: '4',
    align: 'left',
  },
})
