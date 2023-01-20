import styled, { CSSProperties } from 'styled-components'

import { Box } from '.'
import type { BoxProps } from '.'

interface FlexProps extends BoxProps {
  direction?: CSSProperties['flexDirection']
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
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
`

Flex.defaultProps = defaultProps

export function Row({ children, ...props }) {
  return (
    <Flex {...props} direction="row">
      {children}
    </Flex>
  )
}

export function ResponsiveRow({ children, ...props }) {
  return (
    <Flex
      wrap="nowrap"
      direction="row"
      mobile$flex-direction="column"
      {...props}
    >
      {children}
    </Flex>
  )
}

export function Col({ children, ...props }) {
  return (
    <Flex {...props} direction="column">
      {children}
    </Flex>
  )
}

// Can't use gap because its caniuse % isn't high enough.
export const Spacer = styled(Box).attrs(props => ({
  minSize: '1rem',
  ...props,
}))`
  flex: 1;
  align-self: stretch;
  justify-self: stretch;
  min-width: ${props => props.minSize};

  ${props => props.theme.breakpoints.mobile} {
    min-height: ${props => props.minSize};
  }
`
