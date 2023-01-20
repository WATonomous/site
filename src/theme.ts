import _styled, { AnyStyledComponent, StyledComponent } from 'styled-components'

import { transparentize } from './util'

// TODO TS autosuggest
export const theme = {
  colors: {
    white100: 'rgb(255 255 255)',
    white200: 'rgb(237 237 237)',

    black100: 'rgb(0 0 0)',
    black200: 'rgb(24 24 24)',

    blue100: 'rgb(67 131 255)',
    blue200: 'rgb(37 78 160)',

    yellow: 'rgb(254 231 92)',
    red: 'rgb(237 66 69)',

    get foreground() {
      return this.white100
    },

    get background() {
      return this.black100
    },

    get semiBackground() {
      return transparentize(this.background, 0.5)
    },

    get semiForeground() {
      return transparentize(this.foreground, 0.5)
    },
  },

  transitions: {
    slow: '0.3s ease-in-out',
    normal: '0.1s ease-in-out',
    fast: '0.075s ease-in-out',
  },

  breakpoints: {
    small: '@media (max-width: 768px)',
    medium: '@media (max-width: 1024px)',
  },
} as const

// export function styled<P extends object>(
//   el: AnyStyledComponent,
//   defaultProps: Partial<P> = {}
// ): StyledComponent<typeof el, typeof theme, P, keyof typeof defaultProps> {
//   const styleFunction = _styled(el)

//   // Could also implement dot syntax with get()
//   return new Proxy(styleFunction, {
//     apply(target, thisArg, args) {
//       const component = target<MakePartial<P, keyof typeof defaultProps>>(
//         args[0],
//         ...args.slice(1)
//       )
//       component.defaultProps = defaultProps
//       return component
//     },
//   })
// }
