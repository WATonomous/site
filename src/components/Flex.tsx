import styled, { CSSProperties } from 'styled-components'

import { Box } from '.'
import type { BoxProps } from '.'

interface FlexProps extends BoxProps {
  justify: CSSProperties['justifyContent']
  align: CSSProperties['alignItems']
  wrap: CSSProperties['flexWrap']
}

// TODO maybe find a better way to do this with less boilerplate
const defaultProps: FlexProps = {
  align: 'stretch',
  justify: 'start',
  wrap: 'wrap',
} as const

export const Flex = styled(Box).attrs(props => ({
  ...defaultProps,
  ...props,
}))<FlexProps>`
  position: relative;

  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
`

Flex.defaultProps = defaultProps

export const Row = styled(Flex)`
  flex-direction: 'row';
`

export const Col = styled(Flex)`
  flex-direction: 'col';
`

// Can't use gap because its caniuse % isn't high enough.
export const Spacer = styled.div`
  flex: 1;
  align-self: stretch;
  justify-self: stretch;
  min-width: 1rem;
`
