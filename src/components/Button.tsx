import { Box } from '.'
import styled from 'styled-components'

// This should maybe be a subclass of the Link element once we get that done
// Maybe even just make this a variant
export const Button = styled(Box).attrs(props => ({
  as: 'button',
  px: '1.5rem',
  py: '0.75rem',
  ...props,
}))`
  color: ${props => props.theme.colors.foreground};
  background: transparent;

  border: 1px solid currentColor;
  border-radius: 1rem;

  cursor: pointer;
  will-change: color, background;
  transition: ${props => props.theme.transitions.fast};
  &:hover {
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.foreground};
  }
`
