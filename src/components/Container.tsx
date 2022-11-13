import { Box } from '.'
import type { BoxProps } from '.'
import styled from 'styled-components'

interface ContainerProps extends BoxProps {
  sizeSm: number
  sizeMd: number
  sizeLg: number
}

const defaultProps: ContainerProps = {
  mx: 'auto',
  sizeSm: 90,
  sizeMd: 80,
  sizeLg: 60,
} as const

export const Container = styled(Box).attrs(props => ({
  ...defaultProps,
  ...props,
}))<ContainerProps>`
  max-width: ${props => props.sizeLg}vw;

  ${props => props.theme.breakpoints.large} {
    max-width: ${props => props.sizeMd}vw;
  }

  ${props => props.theme.breakpoints.medium} {
    max-width: ${props => props.sizeSm}vw;
  }
`

Container.defaultProps = defaultProps
