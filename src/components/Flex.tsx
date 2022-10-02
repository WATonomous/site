import { styled } from '../theme'
import { Box } from '.'

export const Flex = styled('div', {
  position: 'relative',
  display: 'flex',

  variants: {
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$3',
      },
      3: {
        gap: '$5',
      },
      4: {
        gap: '$7',
      },
      5: {
        gap: '$8',
      },
      6: {
        gap: '$9',
      },
    },
  },

  defaultVariants: {
    align: 'stretch',
    justify: 'start',
    wrap: 'wrap',
    gap: 2,
  },
})

export const Row = styled(Flex, {
  flexDirection: 'row',
})

export const Col = styled(Flex, {
  flexDirection: 'column',
})

export const Cell = styled(Box, {
  flex: 1,
})
