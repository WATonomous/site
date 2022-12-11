import { BoxProps, boxStyles } from '.'
import NextImage, { ImageProps } from 'next/future/image'

import styled from 'styled-components'

export const Image = styled(NextImage)<ImageProps & BoxProps>`
  ${boxStyles}
`
