import { Col, Row } from '.'

import styled from 'styled-components'

export interface StackProps {
  gap: string
}

export const HStack = styled(Row)<StackProps>`
  > :not(:first-child) {
    // margin: 0;
    margin-left: ${props => props.gap};
  }
`

export const VStack = styled(Col)<StackProps>`
  > :not(:first-child) {
    // margin: 0;
    margin-top: ${props => props.gap};
  }
`
