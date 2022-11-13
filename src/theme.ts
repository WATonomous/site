import _styled, { AnyStyledComponent, StyledComponent } from 'styled-components'

import type { MakePartial } from './util'

// TODO TS autosuggest
export const theme = {
  colors: {
    white100: 'rgb(255, 255, 255)',
    white200: 'rgb(237, 237, 237)',

    black100: 'rgb(0, 0, 0)',
    black200: 'rgb(24, 24, 24)',

    blue100: 'rgb(66, 135, 245)',
    blue200: 'rgb(48, 113, 217)',

    // redo this
    gradient: 'linear-gradient(30deg, $blue100, $blue200)',

    get foreground() {
      return this.white100
    },

    get background() {
      return this.black100
    },
  },

  transitions: {
    slow: '0.3s ease-in-out',
    normal: '0.1s ease-in-out',
    fast: '0.075s ease-in-out',
  },

  breakpoints: {
    medium: '@media (max-width: 768px)',
    large: '@media (max-width: 1024px)',
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
