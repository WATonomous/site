import { Box } from '.'
import styled from 'styled-components'

export const Section = styled(Box).attrs(props => ({
  as: 'section',
  py: '2rem',
  ...props,
}))`
  position: relative;
  width: 100%;
`
