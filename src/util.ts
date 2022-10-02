import { CSSProperties } from 'react'
import { config } from './theme'

type ColorToken = keyof typeof config.theme.colors | `$${any}`

export function color(token: ColorToken, alpha = 1) {
  return `rgba($${token}, ${alpha})`
}

// Common styles. Maybe just use class helpers instead?
export const cover = {
  position: 'absolute' as CSSProperties['position'],
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}
